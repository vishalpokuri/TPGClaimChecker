import Image from "next/image";

export default function Header() {
  return (
    <header className="m-[100px]">
      <div className="w-auto h-auto p-8">
        <Image
          src="/images/tpgch.png"
          alt="TPG Chennai Logo"
          width={150}
          height={56}
        />
      </div>
    </header>
  );
}
