"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  // ডিফল্ট কালার এবং থিম পরিবর্তন করা হয়েছে
  baseColor = "transparent",
  menuColor = "#3b82f6", // Blue color for icon
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");
      if (contentEl) {
        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;
        return topBar + contentHeight + padding;
      }
    }
    return 280; // Desktop height when expanded
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      // মেনু খুললে ব্যাকগ্রাউন্ড হালকা ডার্ক বা ব্লু শেড হতে পারে যাতে টেক্সট পড়া যায়
      backgroundColor: isExpanded ? "rgba(10, 20, 40, 0.95)" : "transparent",
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1",
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => tl?.kill();
  }, [ease, items]);

  useLayoutEffect(() => {
    if (isExpanded && tlRef.current) {
      // মেনু ওপেন থাকা অবস্থায় রি-ক্যালকুলেট
      gsap.to(navRef.current, { height: calculateHeight(), duration: 0.3 });
    }
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.reverse().eventCallback("onReverseComplete", () =>
        setIsExpanded(false),
      );
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    // কন্টেইনার এখন ফুল উইডথ (w-full)
    <div
      className={`card-nav-container absolute left-0 right-0 w-[1300px] mx-auto z-[99] top-0 px-4 md:px-8 mt-6 ${className}`}
    >
      <nav
        ref={navRef}
        // বর্ডার ব্লু থিমে করা হয়েছে (border-blue-500/50)
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-xl border border-blue-500/40 backdrop-blur-md relative overflow-hidden will-change-[height] transition-all`}
        style={{
          backgroundColor: isExpanded ? "rgba(15, 23, 42, 0.9)" : "transparent",
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-6 z-[2]">
          {/* Logo - Now on the Left */}
          <div className="logo-container flex items-center">
            <img src={logo} alt={logoAlt} className="logo h-[30px]" />
          </div>

          {/* Hamburger Menu - Now on the Right */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-current transition-transform duration-300 ${
                isHamburgerOpen
                  ? "translate-y-[4px] rotate-45 text-blue-600"
                  : ""
              }`}
            />
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-current transition-transform duration-300 ${
                isHamburgerOpen
                  ? "-translate-y-[4px] -rotate-45 text-blue-600"
                  : ""
              }`}
            />
          </div>
        </div>

        {/* Expansion Content */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-4 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[15px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card relative flex flex-col gap-2 p-5 rounded-lg min-h-[100px] md:h-[180px] flex-1 border border-white/10"
              ref={setCardRef(idx)}
              style={{
                backgroundColor: item.bgColor || "rgba(255,255,255,0.05)",
                color: item.textColor || "#fff",
              }}
            >
              <div className="nav-card-label font-semibold text-xl md:text-2xl">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center text-white gap-2 hover:underline text-sm md:text-base opacity-80 hover:opacity-100"
                    href={lnk.href}
                  >
                    <GoArrowUpRight className="text-white" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
