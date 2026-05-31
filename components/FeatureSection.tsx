"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

function Row({
  label, title, desc, srcMain, srcSide, altMain, altSide, flip, bg,
}: {
  label: string;
  title: React.ReactNode;
  desc: React.ReactNode;
  srcMain: string; srcSide: string;
  altMain: string; altSide: string;
  flip: boolean; bg: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <div ref={ref} style={{ backgroundColor: bg, overflow: "hidden" }}>
      <div className={`max-w-6xl mx-auto px-6 py-24 lg:py-36 flex flex-col items-center gap-16 lg:gap-20 ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>

        {/* 텍스트 */}
        <div className="flex-1 max-w-[420px] text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-[12px] font-semibold mb-4 tracking-wide"
            style={{ color: "#588DFF" }}
          >
            {label}
          </motion.p>

          <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="headline"
              style={{ color: "#0F172A" }}
            >
              {title}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-[16px] leading-[1.8]"
            style={{ color: "#64748B" }}
          >
            {desc}
          </motion.div>
        </div>

        {/* 폰 두 개 — 데스크탑 */}
        <motion.div
          className="flex-shrink-0 relative hidden lg:block"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ width: 490, height: 560 }}
        >
          {/* 뒤 폰 — 기울임 버전 */}
          <div
            className="absolute"
            style={{
              right: flip ? "auto" : 0,
              left: flip ? 0 : "auto",
              top: 0,
              zIndex: 1,
            }}
          >
            <div
              className="float"
              style={{
                animationDelay: "0.4s",
                filter: "drop-shadow(0 28px 56px rgba(88,141,255,0.18)) drop-shadow(0 6px 20px rgba(0,0,0,0.08))",
              }}
            >
              <Image
                src={srcSide}
                alt={altSide}
                width={294}
                height={490}
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* 앞 폰 — 정면 버전 */}
          <div
            className="absolute"
            style={{
              left: flip ? "auto" : 0,
              right: flip ? 0 : "auto",
              bottom: 0,
              zIndex: 2,
            }}
          >
            <div
              className="float"
              style={{
                filter: "drop-shadow(0 36px 72px rgba(30,70,200,0.28)) drop-shadow(0 10px 28px rgba(0,0,0,0.12))",
              }}
            >
              <Image
                src={srcMain}
                alt={altMain}
                width={252}
                height={497}
                style={{ display: "block" }}
              />
            </div>
          </div>
        </motion.div>

        {/* 폰 한 개 — 모바일 */}
        <motion.div
          className="flex-shrink-0 block lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          style={{ filter: "drop-shadow(0 32px 64px rgba(88,141,255,0.22))" }}
        >
          <Image
            src={srcMain}
            alt={altMain}
            width={252}
            height={497}
            style={{ display: "block" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section id="feature">
      <Row
        label="메모"
        title={<>생각나면<br /><span style={{ color: "#588DFF" }}>그냥 던져요.</span></>}
        desc={
          <>
            탭 하나로 바로 입력. 제목도, 분류도 필요 없어요.<br /><br />
            카카오톡 나에게 보내기처럼 빠르게 기록하고,<br />
            나중에 찾을 땐 검색 한 번이면 충분해요.
          </>
        }
        srcMain="/imgs/memo-portrait.png"
        srcSide="/imgs/memo-left.png"
        altMain="메모 타임라인 화면"
        altSide="메모 타임라인 앵글뷰"
        flip={false} bg="#ffffff"
      />
      <Row
        label="보드"
        title={<>쌓인 메모들,<br /><span style={{ color: "#588DFF" }}>보드로 정리해요.</span></>}
        desc={
          <>
            롱프레스 하나로 메모를 보드로 변환.<br /><br />
            관련된 것들을 주제별로 묶고,<br />
            #태그로 나중에 바로 꺼내볼 수 있어요.
          </>
        }
        srcMain="/imgs/board-convert-portrait.png"
        srcSide="/imgs/board-create-left.png"
        altMain="보드 변환 메뉴"
        altSide="보드 만들기 화면"
        flip={true} bg="#F5F8FF"
      />
      <Row
        label="노트"
        title={<>링크, 사진, 영상<br /><span style={{ color: "#588DFF" }}>전부 한 곳에.</span></>}
        desc={
          <>
            유튜브에서 공유 버튼 하나면 인박스로 바로 들어와요.<br /><br />
            보드에 노트로 추가하면<br />
            이미지·영상·파일·링크 모두 함께 보관돼요.
          </>
        }
        srcMain="/imgs/board-inner-portrait.png"
        srcSide="/imgs/media-share-left.png"
        altMain="보드 내부 화면"
        altSide="미디어 공유 화면"
        flip={false} bg="#ffffff"
      />
    </section>
  );
}
