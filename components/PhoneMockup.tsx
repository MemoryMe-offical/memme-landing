export default function PhoneMockup() {
  const memos = [
    { time: "오전 9:14", text: "코딩 공부하기", read: true },
    { time: "오전 11:32", text: "점심 돈까스 vs 파스타 고민중", read: true },
    { time: "오후 2:07", text: "팀 발표 자료 마저 정리하기", read: false },
    { time: "오후 3:41", text: "넷플릭스 드라마 제목 물어봐야함", read: false },
    { time: "오후 5:15", text: "내일 운동 루틴 바꿔보기", read: false },
  ];

  return (
    <div className="relative">
      {/* 폰 외형 */}
      <div
        className="relative rounded-[48px] p-[3px] shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #ffffff40 0%, #ffffff10 100%)",
          width: 280,
        }}
      >
        <div
          className="rounded-[45px] overflow-hidden"
          style={{ backgroundColor: "#f0f5ff", minHeight: 560 }}
        >
          {/* 상단 바 */}
          <div
            className="px-6 pt-12 pb-4"
            style={{ backgroundColor: "#588DFF" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/70 text-xs">안녕하세요</p>
                <p className="text-white font-bold text-base">나의 메모</p>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <span className="text-white text-sm font-bold">M</span>
              </div>
            </div>

            {/* 입력창 미리보기 */}
            <div
              className="rounded-2xl px-4 py-3 flex items-center gap-2"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-white/50 text-sm flex-1">생각 적기...</span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#ffffff" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#588DFF">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 메모 목록 */}
          <div className="px-4 py-4 flex flex-col gap-2">
            {memos.map((memo, i) => (
              <div
                key={i}
                className="flex items-end gap-2"
                style={{ justifyContent: "flex-end" }}
              >
                <span className="text-gray-400 text-[10px] mb-1">{memo.time}</span>
                <div
                  className="px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] text-sm leading-snug"
                  style={{
                    backgroundColor: i < 2 ? "#cfdfff" : "#588DFF",
                    color: i < 2 ? "#2d5099" : "#ffffff",
                    fontSize: 12,
                  }}
                >
                  {memo.text}
                </div>
              </div>
            ))}

            {/* 보드로 정리됨 */}
            <div
              className="mt-3 rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid #cfdfff" }}
            >
              <div
                className="px-3 py-2 flex items-center gap-2"
                style={{ backgroundColor: "#588DFF" }}
              >
                <span className="text-white text-xs font-semibold">📋 할 일 보드로 정리됨</span>
              </div>
              <div className="px-3 py-2 bg-white">
                <p className="text-gray-400 text-[10px]">3개 메모가 자동 분류됐어요</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 그림자 */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 blur-xl opacity-40"
        style={{ backgroundColor: "#3A6FCC" }}
      />
    </div>
  );
}
