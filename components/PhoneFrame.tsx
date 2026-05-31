import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt?: string;
  width?: number;
}

export default function PhoneFrame({ src, alt = "", width = 256 }: PhoneFrameProps) {
  const height = Math.round(width * 2.16);

  return (
    <div
      className="phone-shell"
      style={{
        width,
        borderRadius: Math.round(width * 0.14),
        boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)",
      }}
    >
      <div
        className="phone-screen overflow-hidden"
        style={{ borderRadius: Math.round(width * 0.12), height }}
      >
        <Image
          src={src}
          alt={alt}
          width={430}
          height={932}
          className="w-full h-full object-cover object-top select-none"
          style={{ display: "block" }}
          priority
        />
      </div>
    </div>
  );
}
