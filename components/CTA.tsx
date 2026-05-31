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
            <br />무료고, 광고도 없어요.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store에서 받기
            </a>
            <a href="#" className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.33.18.7.19 1.06.04L15.38 12 3.24.2C2.88.05 2.51.06 2.18.24 1.52.6 1.07 1.3 1.07 2.2v19.6c0 .9.45 1.6 1.11 1.96zM16.84 13.4l2.79-2.79-11.2-6.46L16.84 13.4zm3.51-1.8c.58.35.58 1.44 0 1.79l-2.36 1.36-3.11-3.11 3.11-3.11 2.36 1.07zM8.43 21.85L19.63 15.4l-2.79-2.79-8.41 9.24z" />
              </svg>
              Google Play에서 받기
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
