"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const roleColor: Record<string, { bg: string; text: string }> = {
  Marketing: { bg: "#FFF3E0", text: "#F57C00" },
  Frontend:  { bg: "#E3F2FD", text: "#1565C0" },
  Backend:   { bg: "#E8F5E9", text: "#2E7D32" },
  Designer:  { bg: "#F3E5F5", text: "#6A1B9A" },
};

const members = [
  {
    name: "오하석",
    role: "Marketing",
    github: null,
    avatar: "https://avatars.githubusercontent.com/u/150317567?v=4",
  },
  {
    name: "서동섭",
    role: "Frontend",
    github: "https://github.com/dongsubnambuk",
    avatar: "https://avatars.githubusercontent.com/u/105368619?v=4",
  },
  {
    name: "손경락",
    role: "Frontend",
    github: "https://github.com/ganglike248",
    avatar: "https://avatars.githubusercontent.com/u/81566899?v=4",
  },
  {
    name: "한동균",
    role: "Backend",
    github: "https://github.com/hdg5639",
    avatar: "https://avatars.githubusercontent.com/u/107734276?v=4",
  },
  {
    name: "최은서",
    role: "Backend",
    github: "https://github.com/eunseo16",
    avatar: "https://avatars.githubusercontent.com/u/180482872?v=4",
  },
  {
    name: "이선민",
    role: "Designer",
    github: null,
    avatar: "https://github.com/user-attachments/assets/a4cf3053-e8ad-44e3-8e00-af5299ec16bf",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#ffffff", marginBottom: "-3px" }}>
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold mb-3 tracking-wide"
            style={{ color: "#588DFF" }}
          >
            팀 MEMME
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.65, delay: 0.06, ease }}
              className="headline"
              style={{ color: "#0F172A" }}
            >
              함께 만들었어요.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.map((m, i) => {
            const color = roleColor[m.role];
            const card = (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5, ease }}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="relative overflow-hidden rounded-full"
                  style={{
                    width: 80, height: 80,
                    boxShadow: "0 4px 20px rgba(88,141,255,0.14)",
                    border: "2px solid #EEF4FF",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>{m.name}</p>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: color.bg, color: color.text }}
                  >
                    {m.role}
                  </span>
                </div>
              </motion.div>
            );

            return m.github ? (
              <a key={m.name} href={m.github} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={m.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
