import Image from "next/image";
import Link from "next/link";
import RahulImage from "#/assets/img/rahul.jpg";


export default function Sidebar() {
  return (
    <div className="flex flex-col h-full justify-center items-center space-y-8">
      <Image
        src={RahulImage}
        className="w-28 aspect-square bg-white rounded-full"
        alt="Rahul Gupta Image"
      ></Image>
      <div className="flex flex-col items-center space-y-3">
        <Link
          className="font-semibold hover:underline text-black transition-all"
          href="/"
        >
          About
        </Link>
        <Link
          className="font-semibold hover:underline text-black transition-all"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="font-semibold hover:underline text-black transition-all"
          href="/articles"
        >
          Articles
        </Link>
        <Link
          className="font-semibold hover:underline text-black transition-all"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
