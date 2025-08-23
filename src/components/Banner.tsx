"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface BannerProps {
  children: React.ReactNode;
}

export function Banner({ children }: BannerProps) {
  // I don't want the banner to stay hidden if it gets changed, so we'll
  // encode some additional information into the value to make sure we are
  // hiding the correct banner.
  //
  // date,counter
  const bannerInfo = "2025-08-22,0";
  const [hidden, setHidden] = useState(
    () => localStorage.getItem("bannerHidden") === bannerInfo,
  );

  if (hidden) {
    return;
  }

  return (
    <div
      id="banner"
      className="flex flex-row w-full items-center justify-center h-8 bg-cyan-700 text-white font-medium"
    >
      {children}
      <button
        type="button"
        className="absolute right-3 hover:cursor-pointer"
        onClick={(_event) => {
          localStorage.setItem("bannerHidden", bannerInfo);
          setHidden(true);
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
