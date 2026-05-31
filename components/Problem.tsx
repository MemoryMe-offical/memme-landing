export default function Problem() {
  const pains = [
    {
      emoji: "😤",
      text: "카톡 '나에게 보내기'로 메모했는데\n결국 그냥 묻혀버림",
    },
    {
      emoji: "🤯",
      text: "메모앱, 노션, 메모장, 스티커...\n여기저기 흩어져서 어디 있는지도 모름",
    },
    {
      emoji: "😮‍💨",
      text: "정리하려고 앱 켰는데\n뭐부터 시작해야 할지 막막해서 그냥 닫음",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#588DFF" }}
          >
            공감되지 않나요
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            메모는 했는데
            <br />
            <span className="text-gray-400">정작 쓸 때 못 찾는 거</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "#f8f9ff", border: "1px solid #eef2ff" }}
            >
              <div className="text-4xl mb-5">{pain.emoji}</div>
              <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-900 font-semibold">
            MEMME는 이 흐름을 뒤집었어요.
          </p>
          <p className="text-gray-500 mt-2">먼저 던지고, 나중에 정리.</p>
        </div>
      </div>
    </section>
  );
}
