import Image from "next/image";

//----------------------
// Page
//----------------------

export default function Home() {
  return (
    <main>
      <video src="/abstract-art.mp4" autoPlay muted loop playsInline className="w-full h-[200px] block object-cover" />
    </main>
  );
}
