const steps = [
  {
    num: "01",
    title: "생각나면 그냥 적어",
    desc: "카톡 보내듯 한 줄 던져두세요. 분류하거나 정리할 필요 없어요. 길게 쓸 필요도 없어요.",
    tag: "메모",
    example: "\"내일 치과 예약 잊지 말기\"",
  },
  {
    num: "02",
    title: "비슷한 것들이 모인다",
    desc: "메모가 쌓이면 자동으로 보드가 만들어져요. 할 일, 아이디어, 일정이 알아서 분류됩니다.",
    tag: "보드",
    example: "할 일 3개 / 아이디어 5개 / 일정 2개",
  },
  {
    num: "03",
    title: "AI한테 물어봐",
    desc: "\"이번 주 계획 요약해줘\" 한 마디면 흩어진 메모들이 정리된 형태로 돌아와요.",
    tag: "AI 정리",
    example: "\"이번 주 해야 할 일 정리해줘\"",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28" style={{ backgroundColor: "#EEF4FF" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#588DFF" }}
          >
            어떻게 쓰나요
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            세 단계면
            <br />
            끝이에요
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center rounded-3xl p-8 bg-white"
              style={{ border: "1px solid #e5eeff" }}
            >
              <div className="flex-shrink-0">
                <span
                  className="text-5xl font-black"
                  style={{ color: "#cfdfff" }}
                >
                  {step.num}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#EEF4FF", color: "#588DFF" }}
                  >
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
              <div
                className="flex-shrink-0 rounded-2xl px-5 py-3 text-sm italic"
                style={{
                  backgroundColor: "#f8faff",
                  color: "#588DFF",
                  border: "1px dashed #cfdfff",
                  maxWidth: 220,
                }}
              >
                {step.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
