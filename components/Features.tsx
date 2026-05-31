"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>
      </svg>
    ),
    title: "메모",
    desc: "떠오른 생각을 바로 남겨요. 제목이나 분류는 나중에 해도 괜찮아요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "보드",
    desc: "흩어진 메모를 주제별로 묶어요. 아이디어가 조금씩 형태를 갖춰요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="M9 15h6"/>
      </svg>
    ),
    title: "노트",
    desc: "글, 이미지, 영상, 링크를 한곳에 담아요. 자료 찾는 시간이 줄어들어요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/><path d="M19 16v6"/>
      </svg>
    ),
    title: "인박스",
    desc: "유튜브나 브라우저에서 바로 보내요. 일단 모아두고 나중에 정리해요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
      </svg>
    ),
    title: "해시태그",
    desc: "태그를 달아두면 다시 찾기 쉬워요. 비슷한 보드만 빠르게 모아볼 수 있어요.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#588DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      </svg>
    ),
    title: "북마크",
    desc: "자주 보는 메모와 보드는 따로 표시해요. 필요한 순간 바로 꺼내볼 수 있어요.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F5F8FF" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* 헤드라인 클립 리빌 */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold mb-3 tracking-wide"
            style={{ color: "#588DFF" }}
          >
            핵심 개념
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.65, delay: 0.06, ease }}
              className="headline"
              style={{ color: "#0F172A" }}
            >
              MEMME가
              <br /><span style={{ color: "#CBD5E1" }}>동작하는 방식.</span>
            </motion.h2>
          </div>
        </div>

        {/* 카드 그리드 — 순차 진입 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(88,141,255,0.12)" }}
              className="bg-white rounded-2xl p-6 transition-shadow duration-200"
              style={{ border: "1px solid #E8EFFF" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#EEF4FF" }}
              >
                {f.icon}
              </div>
              <h3 className="text-[15px] font-bold mb-1.5" style={{ color: "#0F172A" }}>{f.title}</h3>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "#64748B", wordBreak: "keep-all", overflowWrap: "break-word" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
