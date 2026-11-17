"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-[#F5B700] text-[#050505] rounded-md flex items-center justify-center hover:bg-[#FFD84D] transition-all duration-200 shadow-lg"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

