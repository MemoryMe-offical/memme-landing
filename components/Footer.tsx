import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #E8EFFF" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <Image src="/mainlogo.png" alt="MEMME" width={22} height={22} className="rounded-md" style={{ opacity: 0.6 }} />
          <span className="text-[13px] font-black italic tracking-tight" style={{ color: "#475569" }}>MEMME</span>
        </div>

        <div className="flex items-center gap-4 text-[12px]" style={{ color: "#64748B" }}>
          <Link href="/privacy" className="transition-colors hover:text-slate-900">
            개인정보 처리방침
          </Link>
          <a href="mailto:ehdtjq1278@naver.com" className="transition-colors hover:text-slate-900">
            문의하기 →
          </a>
        </div>

        <p className="text-[11px]" style={{ color: "#94A3B8" }}>© 2026 MemoryMe. All rights reserved.</p>
      </div>
    </footer>
  );
}
