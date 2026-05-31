"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="download"
      className="relative py-28 lg:py-36"
      style={{ backgroundColor: "#588DFF" }}
    >
      {/* 웨이브를 4px 위로 올려 섹션 경계 갭 완전 제거 */}
      <div className="absolute left-0 right-0" style={{ lineHeight: 0, top: "-4px" }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "auto" }}>
          <path d="M0,0 L1440,0 L1440,38 C1080,70 360,6 0,38 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* 배경 그라디언트 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full" style={{
          width: 600, height: 600, top: "-20%", right: "-10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)",
        }} />
        <div className="absolute rounded-full" style={{
          width: 400, height: 400, bottom: "-10%", left: "-5%",
          background: "radial-gradient(circle, rgba(30,70,200,0.15) 0%, transparent 65%)",
        }} />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

        {/* 캐릭터 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="/character.png"
            alt="MEMME 캐릭터"
            width={200}
            height={263}
            className="select-none float"
            style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,60,0.22))" }}
          />
        </motion.div>

        {/* 텍스트 + 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h2 className="headline text-white mb-4">
            지금 떠오른 거,
            <br />그냥 던져요.
          </h2>
          <p className="text-[16px] leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
            앱 열고 30초면 첫 메모 끝.
            <br />곧 앱스토어와 구글플레이에서 만나요.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#" className="btn-primary">
              곧 만나요
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
