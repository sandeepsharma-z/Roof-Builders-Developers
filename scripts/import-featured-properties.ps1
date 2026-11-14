$ErrorActionPreference = "Stop"

$sourceUrl = "https://roofandassetsinfra.com/"
$projectRoot = Split-Path -Parent $PSScriptRoot
$outputRoot = Join-Path $projectRoot "public\roof-assets-infra-featured-properties"
$html = (Invoke-WebRequest -Uri $sourceUrl -UseBasicParsing).Content

New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

$imagePattern = '<div class="carousel-item(?: active)?" data-slide="(?<id>\d+)">\s*<div class="pxp-hero-bg pxp-cover" style="background-image: url\((?<url>[^)]+)\)'
$captionPattern = '<div class="carousel-item(?: active)?" data-slide="(?<id>\d+)">\s*<div class="pxp-blog-posts-carousel-1-caption-category">(?<location>.*?)</div>\s*<div class="pxp-blog-posts-carousel-1-caption-title">(?<title>.*?)</div>\s*<div class="pxp-blog-posts-carousel-1-caption-summary">(?<summary>.*?)</div>\s*<a href="(?<url>[^"]+)"'
$pricePattern = '<a href="(?<url>[^"]+)" class="pxp-prop-card-1 rounded-lg">.*?<div class="pxp-prop-card-1-details-price">(?<title>.*?)</div>\s*<div class="pxp-prop-card-1-details-title">(?<price>.*?)</div>'
$singleline = [Text.RegularExpressions.RegexOptions]::Singleline

$imagesBySlide = @{}
foreach ($match in [regex]::Matches($html, $imagePattern, $singleline)) {
  $imagesBySlide[$match.Groups["id"].Value] = $match.Groups["url"].Value.Trim()
}

$pricesByUrl = @{}
foreach ($match in [regex]::Matches($html, $pricePattern, $singleline)) {
  $pricesByUrl[$match.Groups["url"].Value.TrimEnd("/")] = [Net.WebUtility]::HtmlDecode(($match.Groups["price"].Value -replace '<[^>]+>', '').Trim())
}

$records = @()
$failures = @()
foreach ($match in [regex]::Matches($html, $captionPattern, $singleline)) {
  $slide = $match.Groups["id"].Value
  $detailsUrl = $match.Groups["url"].Value.Trim()
  $slug = ([Uri]$detailsUrl).AbsolutePath.Trim("/").Split("/")[-1]
  $propertyFolder = Join-Path $outputRoot $slug
  $imageUrl = $imagesBySlide[$slide]
  $extension = [IO.Path]::GetExtension(([Uri]$imageUrl).AbsolutePath)
  if ([string]::IsNullOrWhiteSpace($extension)) { $extension = ".jpg" }
  $imageName = "featured$extension"
  $imagePath = Join-Path $propertyFolder $imageName

  New-Item -ItemType Directory -Path $propertyFolder -Force | Out-Null

  try {
    Invoke-WebRequest -Uri $imageUrl -OutFile $imagePath -UseBasicParsing
  } catch {
    $failures += [pscustomobject]@{ slug = $slug; imageUrl = $imageUrl; error = $_.Exception.Message }
    continue
  }

  $summary = [Net.WebUtility]::HtmlDecode(($match.Groups["summary"].Value -replace '<[^>]+>', '').Trim())
  $record = [ordered]@{
    slide = [int]$slide
    slug = $slug
    name = [Net.WebUtility]::HtmlDecode(($match.Groups["title"].Value -replace '<[^>]+>', '').Trim())
    location = [Net.WebUtility]::HtmlDecode(($match.Groups["location"].Value -replace '<[^>]+>', '').Trim())
    price = $pricesByUrl[$detailsUrl.TrimEnd("/")]
    summary = $summary
    image = "$slug/$imageName"
    imageSource = $imageUrl
    detailsUrl = $detailsUrl
  }

  [IO.File]::WriteAllText((Join-Path $propertyFolder "details.json"), ($record | ConvertTo-Json -Depth 4), [Text.UTF8Encoding]::new($false))
  $records += [pscustomobject]$record
}

$records = @($records | Sort-Object slide)
[IO.File]::WriteAllText((Join-Path $outputRoot "all-featured-properties.json"), ($records | ConvertTo-Json -Depth 4), [Text.UTF8Encoding]::new($false))
if ($failures.Count -eq 0) {
  [IO.File]::WriteAllText((Join-Path $outputRoot "download-failures.json"), "[]", [Text.UTF8Encoding]::new($false))
} else {
  [IO.File]::WriteAllText((Join-Path $outputRoot "download-failures.json"), ($failures | ConvertTo-Json -Depth 3), [Text.UTF8Encoding]::new($false))
}

[pscustomobject]@{
  discoveredImages = $imagesBySlide.Count
  savedProperties = $records.Count
  failedDownloads = $failures.Count
  outputFolder = $outputRoot
}
