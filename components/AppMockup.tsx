"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* 실제 앱 메인화면(나와의 채팅)을 코드로 재현한 폰 목업 */

const MEMOS = [
  { id: 1, type: "memo", text: "내일 치과 예약 잊지 말기", time: "오전 9:14", delay: 0 },
  { id: 2, type: "memo", text: "런닝 30분 + 스트레칭", time: "오전 10:32", delay: 400 },
  {
    id: 3,
    type: "board",
    title: "사이드 프로젝트 아이디어",
    tags: ["개발", "아이디어"],
    noteCount: 4,
    time: "오후 2:07",
    delay: 800,
  },
  { id: 4, type: "memo", text: "넷플릭스 볼 것 - 도깨비 다시보기", time: "오후 3:41", delay: 1200 },
  { id: 5, type: "memo", text: "생일 선물 아이디어 찾아보기", time: "오후 5:05", delay: 1600 },
];

function BoardCard({ title, tags, noteCount }: { title: string; tags: string[]; noteCount: number }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        maxWidth: "85%",
        minWidth: 200,
        marginLeft: "auto",
        boxShadow: "0 2px 12px rgba(88,141,255,0.15)",
      }}
    >
      {/* 헤더 */}
      <div
        className="flex items-center justify-between px-3 py-2.5"
        style={{ backgroundColor: "#588DFF" }}
      >
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" opacity={0.8}>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
          <span className="text-white font-semibold text-[12px]">{title}</span>
        </div>
        <span className="text-white/60 text-[10px]">▶</span>
      </div>
      {/* 바디 */}
      <div className="px-3 py-2" style={{ backgroundColor: "#cfdfff" }}>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(88,141,255,0.15)", color: "#3A6FCC" }}
              >
                #{t}
              </span>
            ))}
          </div>
          <span className="text-[10px]" style={{ color: "#9DAFC8" }}>
            노트 {noteCount}개
          </span>
        </div>
      </div>
    </div>
  );
}

function MemoBubble({ text }: { text: string }) {
  return (
    <div
      className="ml-auto px-3.5 py-2.5 rounded-2xl rounded-br-md text-white text-[13px] leading-snug"
      style={{ maxWidth: "82%", backgroundColor: "#588DFF" }}
    >
      {text}
    </div>
  );
}

export default function AppMockup({ animate = false }: { animate?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : MEMOS.length);
  const [typing, setTyping] = useState(animate);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (!animate) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    MEMOS.forEach((m, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), m.delay + 600)
      );
    });

    // 타이핑 효과
    const phrase = "아이디어 하나 더 생각남";
    timers.push(setTimeout(() => {
      setTyping(true);
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        setInputText(phrase.slice(0, idx));
        if (idx >= phrase.length) clearInterval(interval);
      }, 80);
    }, 3000));

    return () => timers.forEach(clearTimeout);
  }, [animate]);

  return (
    <div className="relative" style={{ width: 260 }}>
      {/* 폰 외형 */}
      <div
        className="relative rounded-[44px] overflow-hidden"
        style={{
          background: "#111",
          padding: "2px",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08) inset",
        }}
      >
        <div
          className="rounded-[42px] overflow-hidden flex flex-col"
          style={{ backgroundColor: "#EEF3FF", height: 520 }}
        >
          {/* 노치 */}
          <div className="flex justify-center pt-2 pb-1" style={{ backgroundColor: "#111" }}>
            <div className="phone-notch" />
          </div>

          {/* 상태바 */}
          <div
            className="flex items-center justify-between px-4 py-1"
            style={{ backgroundColor: "#EEF3FF" }}
          >
            <span className="text-[10px] font-semibold text-gray-500">9:41</span>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-400">●●●●</span>
            </div>
          </div>

          {/* 헤더 */}
          <div
            className="flex items-center justify-between px-3 py-2"
            style={{ backgroundColor: "#EEF3FF", borderBottom: "1px solid #DDE8FF" }}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src="/mainart.png" alt="프로필" width={32} height={32} className="object-cover scale-125 translate-y-1" />
            </div>
            <span className="text-[14px] font-bold text-gray-800">나와의 채팅</span>
            <div className="flex gap-2">
              <span className="text-[11px] text-gray-400">🔍</span>
              <span className="text-[11px] text-gray-400">☰</span>
            </div>
          </div>

          {/* 채팅 영역 */}
          <div className="flex-1 overflow-hidden relative px-3 py-3 flex flex-col gap-2.5">
            {/* 워터마크 */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ opacity: 0.06 }}
            >
              <Image src="/mainlogo.png" alt="" width={80} height={80} />
            </div>

            {MEMOS.slice(0, visibleCount).map((item, i) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 bubble-in"
                style={{ animationDelay: animate ? "0ms" : `${i * 60}ms` }}
              >
                <div className="flex items-end justify-end gap-1.5">
                  <span className="text-[9px] text-gray-400 mb-0.5">{item.time}</span>
                  {item.type === "memo" ? (
                    <MemoBubble text={item.text!} />
                  ) : (
                    <BoardCard
                      title={item.title!}
                      tags={item.tags!}
                      noteCount={item.noteCount!}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 입력바 */}
          <div
            className="flex items-center gap-2 px-3 py-2.5"
            style={{ backgroundColor: "#fff", borderTop: "1px solid #EEF0F8" }}
          >
            <div
              className="flex-1 rounded-2xl px-3 py-2 flex items-center"
              style={{ backgroundColor: "#EEF3FF", minHeight: 36 }}
            >
              <span
                className="text-[12px] flex-1"
                style={{ color: inputText ? "#0f0f0f" : "#AABBCC" }}
              >
                {inputText || "나를 기억하고 기록하는 공간"}
                {inputText && (
                  <span className="cursor-blink" style={{ color: "#588DFF" }}>|</span>
                )}
              </span>
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#588DFF" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 폰 그림자 */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        style={{
          width: 200,
          height: 24,
          background: "radial-gradient(ellipse, rgba(88,141,255,0.3) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
