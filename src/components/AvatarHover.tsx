"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/context/LanguageProvider";

export default function AvatarHover() {
  const { t } = useLang();
  // hovered：鼠标/笔悬停或键盘聚焦；tapped：触屏点按
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const show = hovered || tapped;

  const reset = () => {
    setHovered(false);
    setTapped(false);
  };

  return (
    <div className="mx-auto w-56 md:w-72">
      <div
        className="relative aspect-[3/4] cursor-pointer overflow-hidden border-2 border-[var(--line)] bg-[var(--card)] shadow-manga outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent)] dark:shadow-manga-white"
        onPointerEnter={(e) => {
          if (e.pointerType !== "touch") setHovered(true);
        }}
        onPointerLeave={reset}
        onPointerDown={() => setTapped((v) => !v)}
        onFocus={() => setHovered(true)}
        onBlur={reset}
        tabIndex={0}
        role="img"
        aria-label={t(
          "张昭坤头像，悬停或点击查看另一张照片",
          "Zhaokun avatar, hover or tap to see another photo"
        )}
      >
        {/* 默认：二次元头像；悬停/点按后渐隐 */}
        <Image
          src="/images/avatar.png"
          alt="张昭坤二次元头像 / Zhaokun Zhang manga avatar"
          fill
          priority
          sizes="(max-width: 768px) 14rem, 18rem"
          className={`object-contain p-2 transition-opacity duration-700 ease-in-out ${
            show ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* 悬停/点按：另一张照片；渐显 */}
        <Image
          src="/images/avatar-real.png"
          alt="张昭坤真实照片 / Zhaokun Zhang real photo"
          fill
          sizes="(max-width: 768px) 14rem, 18rem"
          className={`object-contain p-2 transition-opacity duration-700 ease-in-out ${
            show ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <p className="mt-4 text-center font-hand text-sm text-[var(--fg-soft)]">
        {t("把鼠标移上来看看 ✦", "Hover or tap me ✦")}
      </p>
    </div>
  );
}
