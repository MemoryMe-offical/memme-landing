import Image from "next/image";

const stories = [
  {
    num: "01",
    tag: "메모",
    title: "일단 던져두세요.",
    desc: [
      "카톡 나에게 보내기처럼 쓰는데,",
      "그거보다 훨씬 강력해요.",
      "분류 없이, 폴더 없이,",
      "그냥 생각나면 바로 적으면 돼요.",
    ],
    quote: "\"결혼식 날짜 꼭 메모해야지\"",
    image: "/onboarding2.png",
    imageAlt: "메모 화면",
    reverse: false,
  },
  {
    num: "02",
    tag: "정리",
    title: "알아서 모아줘요.",
    desc: [
      "메모가 쌓이면 비슷한 것들끼리",
      "자동으로 보드로 묶어줘요.",
      "내가 정리하려고 앱 켜다가",
      "그냥 닫는 일 없어요.",
    ],
    quote: "\"할 일 · 아이디어 · 일정 자동 분류\"",
    image: "/onboarding3.png",
    imageAlt: "정리 화면",
    reverse: true,
  },
  {
    num: "03",
    tag: "AI",
    title: "물어보면 다 나와요.",
    desc: [
      "\"이번 주 내가 뭐 적어뒀지?\"",
      "한 마디면 흩어진 메모들이",
      "깔끔하게 정리되어 돌아와요.",
      "직접 뒤질 필요 없어요.",
    ],
    quote: "\"이번 주 할 일 정리해줘\"",
    image: "/onboarding1.png",
    imageAlt: "AI 정리 화면",
    reverse: false,
  },
];

export default function Story() {
  return (
    <section id="story" className="bg-white py-8">
      {stories.map((story, i) => (
        <div
          key={i}
          className={`max-w-6xl mx-auto px-6 py-20 lg:py-28 flex flex-col ${
            story.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-16 lg:gap-24`}
        >
          {/* 텍스트 */}
          <div className="flex-1 max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300">
                {story.num}
              </span>
              <span
                className="text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: "#EEF4FF", color: "#588DFF" }}
              >
                {story.tag}
              </span>
            </div>

            <h2 className="text-[42px] lg:text-[52px] font-black leading-[1.1] tracking-tight text-gray-900 mb-6">
              {story.title}
            </h2>

            <div className="space-y-1 mb-8">
              {story.desc.map((line, j) => (
                <p key={j} className="text-[17px] text-gray-500 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            <div
              className="inline-block rounded-xl px-5 py-3 text-[15px] font-medium italic"
              style={{
                backgroundColor: "#F8FAFF",
                color: "#588DFF",
                border: "1px solid #E8EFFF",
              }}
            >
              {story.quote}
            </div>
          </div>

          {/* 이미지 */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              className="rounded-3xl flex items-center justify-center p-8 lg:p-12"
              style={{
                backgroundColor: i % 2 === 0 ? "#F0F5FF" : "#FFF8F0",
                width: 320,
                height: 360,
              }}
            >
              <Image
                src={story.image}
                alt={story.imageAlt}
                width={220}
                height={280}
                className="select-none object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
