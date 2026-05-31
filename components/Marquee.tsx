const items = [
  "채팅형 메모", "✦", "보드 정리", "✦", "링크·영상 저장",
  "✦", "해시태그", "✦", "검색", "✦", "미디어 자료실",
  "✦", "AI 분석", "✦", "iOS & Android", "✦", "완전 무료", "✦",
];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4"
      style={{
        backgroundColor: "#060C1E",
        borderTop: "1px solid rgba(88,141,255,0.08)",
        borderBottom: "1px solid rgba(88,141,255,0.08)",
      }}
    >
      <div className="flex gap-10 marquee-track whitespace-nowrap w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[11px] font-semibold flex-shrink-0 tracking-widest uppercase"
            style={{ color: item === "✦" ? "#588DFF" : "rgba(255,255,255,0.18)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
