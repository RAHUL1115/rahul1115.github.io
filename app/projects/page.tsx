import Base from "#/components/Base";
import Image from "next/image";

import neuroevolutionImage from "#/public/img/projects/neuroevolution.png"

export default function Home() {
  return (
    <Base>
      <div className="container mx-auto space-y-5 mt-10 px-6 md:px-3 flex-1">
        <div>
          <p className="text-3xl text-center">Porjects</p>
          <p className="text-center text-xs text-blue-500">
            Projects that i have made
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <a
            href="https://github.com/RAHUL1115/neuroevolution"
            className="w-full border rounded-lg cursor-pointer"
          >
            <Image src={neuroevolutionImage} className="aspect-video" alt="" />
            <div className="flex justify-between px-4">
              <p className="uppercase font-bold">neuroevolution</p>
              <p>2020-11-02</p>
            </div>
          </a>
        </div>
      </div>
    </Base>
  );
}
