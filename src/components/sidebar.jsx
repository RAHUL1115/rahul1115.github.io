import Image from "next/image";
import Link from "next/link";

export default function Sidebar(){
  return (
    <div class="flex flex-col h-full justify-center items-center space-y-8">
      <Image
        width={112}
        height={112}
        className="w-28 aspect-square bg-white rounded-full"
        src="/img/rahul.jpg"
        alt="Rahul Gupta Image"
      ></Image>
      <div class="flex flex-col items-center space-y-3">
        <Link
          class="font-semibold hover:underline text-black transition-all"
          href="/"
        >About</Link>
        <Link
          class="font-semibold hover:underline text-black transition-all"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          class="font-semibold hover:underline text-black transition-all"
          href="/articles"
        >
          Articles
        </Link>
        <Link
          class="font-semibold hover:underline text-black transition-all"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};