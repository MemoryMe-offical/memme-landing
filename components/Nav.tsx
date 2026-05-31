"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const { scrollY } = useScroll();

  // 스크롤 0→80px 구간에서 연속 변환 — 상태 전환 없이 부드럽게
  const bgOpacity   = useTransform(scrollY, [0, 80], [0, 1]);
  const logoColor   = useTransform(scrollY, [0, 80], ["#ffffff", "#0F172A"]);
  const borderColor = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.2)", "rgba(232,239,255,1)"]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
    >
      {/* 스크롤에 따라 서서히 나타나는 배경 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(255,255,255,0.92)",
          opacity: bgOpacity,
        }}
      />

      {/* 항상 표시되는 구분선 — 히어로: 흰색 반투명, 스크롤 후: 연파랑 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 1, backgroundColor: borderColor }}
      />

      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/mainlogo.png" alt="MEMME" width={28} height={28} className="rounded-lg" />
          <motion.span
            className="font-bold text-[15px] tracking-tight"
            style={{ color: logoColor }}
          >
            MEMME
          </motion.span>
        </div>
      </div>
    </nav>
  );
}
