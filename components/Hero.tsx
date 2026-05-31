"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.34, 0.76], [1, 1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.38, 0.78], [1, 1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#588DFF" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{
          width: 800, height: 800, top: "-20%", right: "-15%",
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
        }} />
        <div className="absolute rounded-full" style={{
          width: 500, height: 500, bottom: "-5%", left: "-8%",
          background: "radial-gradient(circle, rgba(30,70,200,0.2) 0%, transparent 65%)",
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-20 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

          {/* 왼쪽 텍스트 — 스크롤 패럴랙스 */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-[480px]"
            style={{ y: textY, opacity: textOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
            >
              <Image
                src="/mainlogo.png" alt="MEMME" width={40} height={40}
                className="rounded-xl"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
              />
              <div>
                <p className="text-white font-black text-[16px] italic tracking-tight leading-none">MEMME</p>
                <p className="mt-0.5 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>나를 기억하고, 기록하는 공간</p>
              </div>
            </motion.div>

            {/* 헤드라인 — 클립 리빌 */}
            <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, delay: 0.1, ease }}
                className="display text-white"
              >
                생각나면
                <br />그냥 던져.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="text-[17px] leading-relaxed mb-10 max-w-[340px] mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              카카오톡 나에게 보내기처럼 빠르게,
              <br />링크·영상은 저장하고 AI로 분석.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55, ease }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#download" className="btn-primary">
                곧 만나요
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[11px] mt-5"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
            </motion.p>
          </motion.div>

          {/* 데스크탑 폰 — 패럴랙스 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1, ease }}
            className="flex-shrink-0 relative hidden lg:block"
            style={{ width: 530, height: 620, y: phoneY, opacity: phoneOpacity }}
          >
            {/* 뒤 폰 — 기울임 (타임라인) */}
            <div className="absolute" style={{ right: 0, top: 0, zIndex: 1 }}>
              <div
                className="float"
                style={{
                  animationDelay: "0.7s",
                  filter: "drop-shadow(0 40px 64px rgba(0,0,60,0.22)) drop-shadow(0 8px 24px rgba(0,0,0,0.1))",
                }}
              >
                <Image
                  src="/imgs/memo-left.png"
                  alt="메모 타임라인"
                  width={312}
                  height={520}
                  style={{ display: "block" }}
                  priority
                />
              </div>
            </div>
            {/* 앞 폰 — 정면 (스플래시) */}
            <div className="absolute" style={{ left: 0, bottom: 0, zIndex: 2 }}>
              <div
                className="float"
                style={{
                  filter: "drop-shadow(0 48px 80px rgba(30,70,200,0.4)) drop-shadow(0 12px 32px rgba(0,0,0,0.14))",
                }}
              >
                <Image
                  src="/imgs/splash-portrait.png"
                  alt="MEMME 스플래시"
                  width={272}
                  height={536}
                  style={{ display: "block" }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* 모바일 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="flex-shrink-0 block lg:hidden"
            style={{ y: phoneY, opacity: phoneOpacity }}
          >
            <div className="float" style={{ filter: "drop-shadow(0 36px 72px rgba(30,70,200,0.38))" }}>
              <Image
                src="/imgs/splash-portrait.png"
                alt="MEMME 앱"
                width={248}
                height={489}
                style={{ display: "block" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[11px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0, marginBottom: "-3px", backgroundColor: "#ffffff" }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "auto" }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
