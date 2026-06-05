import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | MEMME",
  description: "MEMME 개인정보 처리방침",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "1. 개인정보의 수집 및 이용 목적",
    body: [
      {
        heading: "가. 회원 가입 및 관리",
        items: [
          "회원 가입 의사 확인",
          "회원제 서비스 제공에 따른 본인 식별 및 인증",
          "회원자격 유지 및 관리",
          "서비스 부정이용 방지",
          "각종 고지 및 통지",
        ],
      },
      {
        heading: "나. 소셜 로그인 제공",
        items: [
          "카카오 및 애플 계정을 통한 간편 로그인 제공",
          "소셜 로그인 이용자 식별",
          "서비스 계정 연동 및 관리",
        ],
      },
      {
        heading: "다. 서비스 제공",
        items: [
          "AI 기반 링크 및 텍스트 자동 요약 서비스 제공",
          "채팅 형태의 메모 저장 및 관리",
          "카테고리별 정보 분류 및 검색",
          "미디어 자료실 제공",
          "외부 앱 공유 연동",
          "맞춤형 서비스 제공",
        ],
      },
      {
        heading: "라. 서비스 개선 및 안정적 운영",
        items: [
          "서비스 이용 기록 분석",
          "오류 확인 및 서비스 품질 개선",
          "부정 이용 방지 및 보안 관리",
        ],
      },
    ],
  },
  {
    title: "2. 수집하는 개인정보 항목",
    body: [
      { heading: "가. 일반 회원가입 시 필수 수집 항목", items: ["이메일", "비밀번호", "이름"] },
      {
        heading: "나. 소셜 로그인 이용 시 수집 항목",
        paragraphs: [
          "카카오 또는 애플 소셜 로그인을 이용하는 경우, 운영팀은 해당 소셜 로그인 제공자로부터 아래 정보를 제공받을 수 있습니다.",
        ],
        items: [
          "카카오 로그인: 카카오 계정 식별값, 이메일, 이름 또는 닉네임",
          "애플 로그인: 애플 계정 식별값, 이메일, 이름",
        ],
        note: "단, 소셜 로그인 제공자로부터 실제 제공받는 정보는 이용자가 해당 제공자에게 동의한 항목 및 제공자의 정책에 따라 달라질 수 있습니다.",
      },
      {
        heading: "다. 서비스 이용 과정에서 자동으로 생성되어 수집될 수 있는 정보",
        items: ["IP 주소", "접속 로그", "서비스 이용 기록", "오류 로그", "불량 이용 기록"],
      },
      {
        heading: "라. 서비스 이용 과정에서 이용자가 직접 입력하거나 업로드하는 정보",
        items: [
          "채팅 및 메모 내용",
          "게시물 내용",
          "카테고리 설정 정보",
          "파일, 이미지, 동영상 등 이용자가 업로드한 미디어",
          "외부 앱 공유를 통해 저장한 링크 또는 텍스트",
        ],
      },
      {
        heading: "마. AI 요약 서비스 이용 시 수집되는 정보",
        items: [
          "요약을 요청한 링크 URL",
          "이용자가 입력한 텍스트 내용",
          "AI 요약 결과",
          "요약 생성 시각 및 진행 상태",
        ],
      },
    ],
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    body: [
      {
        heading: "가. 회원 탈퇴 시까지 보유하는 정보",
        items: [
          "회원 정보",
          "소셜 로그인 연동 정보",
          "채팅 및 메모 내용",
          "게시물 내용",
          "카테고리 설정 정보",
          "업로드한 파일, 이미지, 동영상 등 미디어 자료",
          "AI 요약 요청 기록 및 결과",
        ],
        note: "단, 이용자가 직접 삭제한 콘텐츠는 서비스 운영 정책 및 관련 법령에 따라 필요한 범위 내에서 처리 후 삭제됩니다. 또한 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지 보관할 수 있습니다.",
      },
      {
        heading: "나. 관계 법령에 따른 보관",
        paragraphs: ["관련 법령에 따라 일정 기간 보관이 필요한 정보는 아래 기간 동안 보관할 수 있습니다."],
        items: [
          "계약 또는 청약철회 등에 관한 기록: 5년",
          "대금결제 및 재화 등의 공급에 관한 기록: 5년",
          "소비자의 불만 또는 분쟁처리에 관한 기록: 3년",
          "표시·광고에 관한 기록: 6개월",
          "웹사이트 또는 서비스 접속 기록: 3개월",
        ],
      },
    ],
  },
  {
    title: "4. 개인정보의 제3자 제공",
    paragraphs: [
      "운영팀은 이용자의 개인정보를 제1조에서 명시한 개인정보의 처리 목적 범위 내에서만 처리하며, 이용자의 동의가 있거나 법률에 특별한 규정이 있는 경우 등 관련 법령에서 허용하는 경우에만 개인정보를 제3자에게 제공합니다.",
      "운영팀은 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, AI 요약 기능 제공 과정에서 이용자가 입력한 텍스트 또는 URL 정보가 AI 서비스 제공자에게 전송될 수 있습니다.",
    ],
  },
  {
    title: "5. 개인정보 처리의 위탁",
    paragraphs: [
      "운영팀은 원활한 서비스 제공을 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.",
    ],
    items: [
      "위탁받는 자: AWS(Amazon Web Services)",
      "위탁하는 업무의 내용: 서버 호스팅, 데이터 저장 및 관리",
    ],
    note: "운영팀은 위탁계약 체결 시 개인정보가 안전하게 관리될 수 있도록 관련 법령에 따라 필요한 사항을 관리·감독합니다.",
  },
  {
    title: "6. 개인정보의 국외 이전",
    paragraphs: [
      "운영팀은 AI 요약 서비스 제공을 위해 아래와 같이 개인정보가 국외로 이전될 수 있음을 고지합니다.",
    ],
    items: [
      "이전받는 자: OpenAI",
      "이전 국가: 미국",
      "이전 항목: 이용자가 요약을 요청한 텍스트 내용, 링크 URL",
      "이전 목적: AI 기반 텍스트 및 링크 요약 결과 생성",
      "이전 시점 및 방법: 이용자가 AI 요약 기능을 요청하는 시점에 네트워크를 통해 전송",
      "보유 및 이용기간: AI 요약 결과 생성 등 서비스 제공 목적 달성 후 지체 없이 파기하거나, AI 서비스 제공자의 정책 및 계약 조건에 따라 필요한 기간 동안 보관 후 파기",
    ],
    note: "이용자는 AI 요약 기능 이용을 원하지 않는 경우 해당 기능을 사용하지 않을 수 있습니다.",
  },
  {
    title: "7. 정보주체의 권리·의무 및 행사방법",
    paragraphs: [
      "이용자는 운영팀에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.",
    ],
    items: [
      "개인정보 열람 요구",
      "오류 등이 있을 경우 정정 요구",
      "개인정보 삭제 요구",
      "개인정보 처리정지 요구",
      "채팅 및 게시물 내용 수정 또는 삭제",
      "AI 요약 이력 삭제 요구",
    ],
    note: "권리 행사는 개인정보 보호책임자 이메일을 통해 요청할 수 있으며, 운영팀은 관련 법령에 따라 지체 없이 조치합니다.",
  },
  {
    title: "8. 회원 탈퇴 및 개인정보 삭제",
    paragraphs: [
      "이용자는 개인정보 보호책임자 이메일을 통해 회원 탈퇴 및 개인정보 삭제를 요청할 수 있습니다.",
      "운영팀은 이용자의 요청을 확인한 후 본인 확인 절차를 거쳐 관련 법령에 따라 보관이 필요한 정보를 제외하고 개인정보를 삭제합니다.",
      "다만, 관계 법령에 따라 보관이 필요한 정보는 해당 법령에서 정한 기간 동안 분리 보관 후 파기합니다.",
    ],
  },
  {
    title: "9. 개인정보의 파기",
    paragraphs: ["운영팀은 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다."],
    body: [
      {
        heading: "가. 파기절차",
        paragraphs: ["이용자가 입력한 정보는 처리 목적 달성 후 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 또는 즉시 파기됩니다."],
      },
      {
        heading: "나. 파기방법",
        items: [
          "전자적 파일 형태의 정보는 복구 및 재생이 불가능한 방법으로 삭제합니다.",
          "종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.",
        ],
      },
    ],
  },
  {
    title: "10. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항",
    paragraphs: ["운영팀은 현재 서비스 제공을 위해 쿠키 등 개인정보 자동 수집 장치를 별도로 운영하지 않습니다."],
  },
  {
    title: "11. 개인정보의 안전성 확보 조치",
    paragraphs: ["운영팀은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다."],
    items: [
      "비밀번호 암호화 저장",
      "개인정보 접근 권한 제한",
      "서버 및 데이터베이스 접근 통제",
      "전송 구간 암호화",
      "개인정보 처리 담당자 최소화",
      "서비스 오류 및 보안 로그 관리",
    ],
  },
  {
    title: "12. AI 서비스 관련 추가 고지사항",
    body: [
      {
        heading: "가. AI 요약 정확성",
        paragraphs: [
          "운영팀은 AI 요약 결과의 정확성, 완전성, 최신성을 보장하지 않습니다.",
          "중요한 정보는 반드시 원본 내용을 직접 확인하시기 바랍니다.",
        ],
      },
      {
        heading: "나. AI 서비스 이용 시 주의사항",
        paragraphs: [
          "이용자는 AI 요약 기능 이용 시 주민등록번호, 금융정보, 비밀번호, 민감한 개인정보 등 중요한 개인정보가 포함된 내용을 입력하지 않도록 주의해야 합니다.",
        ],
      },
      {
        heading: "다. 서비스 품질 개선",
        paragraphs: ["운영팀은 개인을 식별할 수 없는 통계 정보에 한하여 서비스 품질 개선 및 안정적 운영을 위해 활용할 수 있습니다."],
      },
      {
        heading: "라. AI 서비스 제공자 변경",
        paragraphs: ["운영팀은 더 나은 서비스 제공을 위해 AI 서비스 제공자를 변경할 수 있으며, 변경이 필요한 경우 관련 법령 및 내부 정책에 따라 사전 공지합니다."],
      },
    ],
  },
  {
    title: "13. 개인정보 보호책임자",
    paragraphs: [
      "운영팀은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
    ],
    items: ["개인정보 보호책임자: Memme 운영팀", "이메일: memoryme202601@gmail.com"],
    note: "개인정보 관련 문의, 열람, 정정, 삭제, 처리정지, 회원 탈퇴 요청은 위 이메일을 통해 접수할 수 있습니다.",
  },
  {
    title: "14. 개인정보 처리방침의 변경",
    paragraphs: [
      "이 개인정보 처리방침은 앱 서비스 출시일부터 적용됩니다.",
      "운영팀은 개인정보 처리방침을 변경하는 경우 서비스 내 공지사항 또는 별도 안내를 통해 변경 내용을 고지합니다.",
      "이전 개인정보 처리방침은 아래에서 확인할 수 있습니다.",
      "해당사항 없음",
    ],
  },
];

type PolicyBlock = {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
};

type PolicySection = PolicyBlock & {
  title: string;
  body?: PolicyBlock[];
};

function PolicyContent({ block, nested = false }: { block: PolicyBlock; nested?: boolean }) {
  return (
    <div className={nested ? "mt-7" : "mt-5"}>
      {block.heading ? <h3 className="text-[16px] font-extrabold leading-7 text-slate-800">{block.heading}</h3> : null}
      {block.paragraphs ? (
        <div className={block.heading ? "mt-2.5 space-y-1.5" : "space-y-1.5"}>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-7 text-slate-600">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {block.items ? (
        <ul className="mt-2.5 list-disc space-y-1 pl-5 text-[15px] leading-7 text-slate-600 marker:text-[#588DFF]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.note ? <p className="mt-2.5 text-[15px] leading-7 text-slate-600">{block.note}</p> : null}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFF]">
      <section className="border-b border-[#E8EFFF] bg-white">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <Link href="/" className="text-sm font-bold text-[#588DFF] transition-colors hover:text-[#3F73E6]">
            ← 홈으로
          </Link>
          <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">개인정보 처리방침</h1>
          <p className="mt-5 text-[16px] leading-8 text-slate-600">
            Memme 운영팀(이하 “운영팀”)은 이용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 등 관련 법령을 준수하기 위해 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
        {(sections as PolicySection[]).map((section) => (
          <section key={section.title} className="border-b border-slate-200/70 py-9 first:pt-0 last:border-b-0">
            <h2 className="text-[22px] font-black leading-snug tracking-tight text-slate-950">{section.title}</h2>
            <PolicyContent block={section} />
            {section.body?.map((block) => (
              <PolicyContent key={block.heading ?? block.paragraphs?.[0] ?? block.items?.[0]} block={block} nested />
            ))}
          </section>
        ))}
      </article>

      <Footer />
    </main>
  );
}
