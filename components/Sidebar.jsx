import Image from "next/image";
import Link from "next/link";
import RahulImage from "#/assets/img/rahul.jpg";
import { ExternalLinkIcon } from "lucide-react";


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
          target="blank"
          href="https://blog.amrahul.in/"
        >
          <span className="flex items-center gap-1">
            Blogs <ExternalLinkIcon size={16} />
          </span>
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
