/**
 * Trainhello - Main Interactive Scripts
 * Bus Reservation, Bus Tickets Online & Click-to-Call Handlers
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global TFN constant
  const DEFAULT_PHONE = "+1(888) 892-3463";
  const DEFAULT_TEL = "tel:+18888923463";

  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileToggle.textContent = isOpen ? "✕" : "☰";
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.textContent = "☰";
      }
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });

        item.classList.toggle("active", !isActive);
      });
    }
  });

  // Bus Search Form Tab Handling
  const tabBtns = document.querySelectorAll(".bus-tab-btn");
  const returnGroup = document.getElementById("returnDateGroup");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tabType = btn.dataset.tab;
      if (returnGroup) {
        if (tabType === "oneway") {
          returnGroup.style.opacity = "0.45";
          const input = returnGroup.querySelector("input");
          if (input) input.disabled = true;
        } else {
          returnGroup.style.opacity = "1";
          const input = returnGroup.querySelector("input");
          if (input) input.disabled = false;
        }
      }
    });
  });

  // Quick Route Pills Autofill
  const routePills = document.querySelectorAll(".quick-route-chip");
  const originInput = document.getElementById("busOrigin");
  const destInput = document.getElementById("busDestination");

  routePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const from = pill.dataset.from;
      const to = pill.dataset.to;
      if (originInput && destInput && from && to) {
        originInput.value = from;
        destInput.value = to;

        // Visual feedback
        originInput.style.borderColor = "#FF5E14";
        destInput.style.borderColor = "#FF5E14";
        setTimeout(() => {
          originInput.style.borderColor = "";
          destInput.style.borderColor = "";
        }, 1200);
      }
    });
  });

  // Set default dates
  const departInput = document.getElementById("busDepartDate");
  const returnInput = document.getElementById("busReturnDate");
  if (departInput && !departInput.value) {
    const today = new Date();
    departInput.value = today.toISOString().split("T")[0];
    if (returnInput && !returnInput.value) {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 3);
      returnInput.value = tomorrow.toISOString().split("T")[0];
    }
  }

  // Bus Search Submit -> Connect to Telephone Concierge
  const searchForm = document.getElementById("busSearchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const originVal = originInput ? originInput.value.trim() : "";
      const destVal = destInput ? destInput.value.trim() : "";

      if (!originVal || !destVal) {
        alert("Please enter both origin and destination cities to search bus schedules.");
        if (!originVal && originInput) originInput.focus();
        else if (destInput) destInput.focus();
        return;
      }

      // Prompt to connect immediately with live desk for exact fares
      const proceed = confirm(
        `Great news! We found live bus schedules & discount seats for ${originVal} to ${destVal}.\n\nWould you like to speak directly with an agent now to lock in your live fare discount?`
      );
      if (proceed) {
        window.location.href = DEFAULT_TEL;
      }
    });
  }

  // Call click tracking
  const callTriggers = document.querySelectorAll(".btn-call-trigger");
  callTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Engagement",
          event_label: "Bus Call Button Click",
          value: 1.0,
        });
      }
    });
  });
});
