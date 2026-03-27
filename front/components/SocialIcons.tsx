import Image from "next/image";

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/rpope5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={32}
          height={32}
          className="hover:scale-110 transition"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/robert-pope-ii/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={32}
          height={32}
          className="hover:scale-110 transition"
        />
      </a>
    </div>
  );
}