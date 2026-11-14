"use client";

import { useEffect, useState } from "react";

function SocialIcon({ type }: { type: "linkedin" | "whatsapp" | "instagram" }) {
  const paths = {
    linkedin: (
      <path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM9 8.8V19h3.2v-5.1c0-1.3.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8v5H19v-5.6c0-2.8-.6-4.9-3.8-4.9-1.5 0-2.6.8-3.1 1.6V8.8H9Z" />
    ),
    whatsapp: (
      <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.92L2.05 22l5.2-1.52A9.9 9.9 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.9.92-3-.2-.31a8.08 8.08 0 1 1 6.79 3.72Zm4.44-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.36-1.69c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  };
  return (
    <svg
      className={`footerSvg footerSvg--${type}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

type MotionVariant = "editorial" | "leadership";

// Temporarily disabled for the first public release. Set to true to restore.
const ENABLE_WELCOME_POPUP = false;
const ENABLE_CHATBOT = false;

export default function PageEnhancements({
  scope,
  variant = "editorial",
  assistantOnly = false,
}: {
  scope: string;
  variant?: MotionVariant;
  assistantOnly?: boolean;
}) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeClosed, setWelcomeClosed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatTyping, setChatTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    Array<{ from: "bot" | "user"; text: string }>
  >([
    {
      from: "bot",
      text: "Hi! Welcome to ROOF 👋 How can I help with your property search today?",
    },
  ]);

  useEffect(() => {
    if (!ENABLE_WELCOME_POPUP) return;
    const timer = window.setTimeout(() => setShowWelcome(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ENABLE_CHATBOT || !welcomeClosed) return;
    const timer = window.setTimeout(() => setChatOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, [welcomeClosed]);

  const dismissWelcome = () => {
    setShowWelcome(false);
    setWelcomeClosed(true);
  };

  const sendChatMessage = (text: string) => {
    const question = text.trim();
    if (!question || chatTyping) return;
    setChatMessages((messages) => [
      ...messages,
      { from: "user", text: question },
    ]);
    setChatInput("");
    setChatTyping(true);
    window.setTimeout(() => {
      const lower = question.toLowerCase();
      let answer =
        "I can help you shortlist the right property. Please share your preferred location, property type and approximate budget.";
      if (/price|budget|cost|rate/.test(lower))
        answer =
          "Prices depend on the project and plot size. Share your preferred project or budget and I’ll guide you to the closest available options.";
      else if (/plot|land/.test(lower))
        answer =
          "We have plotted developments in Jhajjar, Haridwar and other growth corridors. What location and plot size are you considering?";
      else if (/visit|site/.test(lower))
        answer =
          "Absolutely. Tell me the project and your preferred day, and our advisor can arrange a site visit for you.";
      else if (/loan|finance|emi/.test(lower))
        answer =
          "Loan eligibility varies by project and profile. Our advisor can help you check available bank-assistance options after you shortlist a property.";
      else if (/location|where|sector/.test(lower))
        answer =
          "Our current portfolio includes Gurugram, Jhajjar, Haridwar and nearby NCR growth locations. Which area interests you most?";
      else if (/hello|hi|hey|namaste/.test(lower))
        answer =
          "Hello! 😊 Are you looking for a residential plot, a home, or a commercial property?";
      setChatMessages((messages) => [
        ...messages,
        { from: "bot", text: answer },
      ]);
      setChatTyping(false);
    }, 750);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        `${scope} > section h1, ${scope} > section h2, ${scope} > section h3, ${scope} > section p, ${scope} > section blockquote, ${scope} > section img, ${scope} > section a, ${scope} > footer > *`,
      ),
    );
    const sectionCounts = new Map<Element, number>();

    elements.forEach((element, index) => {
      const section =
        element.closest("section, footer") ?? element.parentElement;
      const localIndex = section ? (sectionCounts.get(section) ?? 0) : index;
      if (section) sectionCounts.set(section, localIndex + 1);

      let motionClass = "motionUp";
      if (element.tagName === "IMG") motionClass = "motionScale";
      else if (element.tagName === "BLOCKQUOTE")
        motionClass = variant === "leadership" ? "motionRight" : "motionLeft";
      else if (element.tagName === "H1" || element.tagName === "H2")
        motionClass = variant === "leadership" ? "motionLeft" : "motionUp";
      else if (element.tagName === "H3")
        motionClass =
          variant === "leadership"
            ? "motionUp"
            : localIndex % 2
              ? "motionRight"
              : "motionLeft";
      else if (element.tagName === "P") motionClass = "motionSoft";
      else if (element.tagName === "A")
        motionClass = variant === "leadership" ? "motionRight" : "motionUp";

      element.classList.add("aboutScrollReveal", motionClass);
      element.style.setProperty(
        "--about-delay",
        `${Math.min(localIndex, 4) * 70}ms`,
      );
    });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("isRevealed");
          observer.unobserve(entry.target);
        }),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
    };
  }, [scope, variant]);

  return (
    <>
      {ENABLE_WELCOME_POPUP && showWelcome && (
        <div
          className="welcomePopup"
          role="dialog"
          aria-modal="true"
          aria-label="ROOF welcome"
        >
          <div className="welcomeVisual">
            <img
              src="/popup-luxury-residence.png"
              alt="Premium landscaped residential community"
            />
            <div className="welcomeImageBadge">
              <img
                src="/roof-logo-white.png"
                alt="Roof Builders and Developers"
              />
            </div>
            <span>
              Spaces chosen
              <br />
              with perspective.
            </span>
          </div>
          <div className="welcomeContent">
            <button
              type="button"
              className="welcomeClose"
              onClick={dismissWelcome}
              aria-label="Close welcome popup"
            >
              ×
            </button>
            <span className="welcomeEyebrow">
              Your property journey starts here
            </span>
            <h2>
              Find a Place
              <br />
              <em>That Feels Right.</em>
            </h2>
            <p>
              Explore carefully selected residential, commercial and plotted
              opportunities with clear guidance at every step.
            </p>
            <div className="welcomeBenefits">
              <span>✓ Verified Projects</span>
              <span>✓ Expert Guidance</span>
              <span>✓ Site Visit Support</span>
            </div>
            <div className="welcomeActions">
              <a
                className="welcomePrimary"
                href="/#contact"
                onClick={dismissWelcome}
              >
                Explore Properties <span>↗</span>
              </a>
              <a href="tel:+919876543210">Speak to an Advisor</a>
            </div>
            <small>Personal guidance · No unnecessary calls</small>
          </div>
        </div>
      )}
      {ENABLE_CHATBOT && chatOpen && (
        <aside className="roofChatPanel" aria-label="ROOF property assistant">
          <header>
            <div className="roofChatAvatar">
              <img src="/roof-logo-white.png" alt="" />
            </div>
            <div>
              <strong>ROOF Property Concierge</strong>
              <span>
                <i /> Online · Ready to help
              </span>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </header>
          <div className="roofChatWelcome">
            <strong>Welcome to ROOF</strong>
            <span>Personal property guidance, right when you need it.</span>
          </div>
          <div className="roofChatBody">
            <span className="roofChatTime">Replies in a few seconds</span>
            <div className="roofChatMessages">
              {chatMessages.map((message, index) => (
                <div
                  className={
                    message.from === "user"
                      ? "roofChatBubble user"
                      : "roofChatBubble"
                  }
                  key={`${message.from}-${index}`}
                >
                  {message.text}
                </div>
              ))}
              {chatTyping && (
                <div className="roofChatTyping">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>
            <div className="roofQuickReplies">
              <button
                type="button"
                onClick={() => sendChatMessage("Show me residential plots")}
              >
                ⌂ Find a plot
              </button>
              <button
                type="button"
                onClick={() => sendChatMessage("Tell me about project prices")}
              >
                ₹ Check prices
              </button>
              <button
                type="button"
                onClick={() => sendChatMessage("Schedule a site visit")}
              >
                ⌖ Book site visit
              </button>
            </div>
          </div>
          <form
            className="roofChatComposer"
            onSubmit={(event) => {
              event.preventDefault();
              sendChatMessage(chatInput);
            }}
          >
            <input
              value={chatInput}
              onChange={(event) => setChatInput(event.target.value)}
              placeholder="Type your property question..."
              aria-label="Chat message"
            />
            <button type="submit" aria-label="Send message">
              ↗
            </button>
          </form>
          <footer>
            <span>Your details stay private</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              Continue on WhatsApp ↗
            </a>
          </footer>
        </aside>
      )}
      {ENABLE_CHATBOT && <button
        className={`roofChatButton ${chatOpen ? "open" : ""}`}
        type="button"
        onClick={() => setChatOpen(!chatOpen)}
        aria-label={
          chatOpen ? "Close property assistant" : "Open property assistant"
        }
      >
        <span className="floatingCallPulse" aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.7-4.4A8.3 8.3 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z" />
          <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
        </svg>
      </button>}
    </>
  );
}
