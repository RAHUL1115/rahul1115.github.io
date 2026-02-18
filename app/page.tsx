import Base from "#/components/Base";
import Image from "next/image";

export default function Home() {
  return (
    <Base>
      <div className="h-full flex flex-col justify-center space-y-5">
        <Image
          src="/img/rahul.jpg"
          width={128}
          height={128}
          alt="rahul gupta picture"
          className="w-32 rounded-full aspect-square bg-blue-300 mx-auto md:hidden"
        ></Image>
        <div>
          <h1 className="md:text-9xl text-5xl px-2 md:px-0">RAHUL GUPTA</h1>
          <p className="md:tracking-widest md:text-lg px-2">
            FULL STACK DEVELOPER & DATA ANALYST
          </p>
        </div>
        <p className="px-2 text-sm">
          Web Developer with 2 years of experience on working mid level
          projects. Designed and Developed more then 5+ websites including
          E-commerce websites. Exploring the world of data science and machine
          learning and transitioning form Development to Data Science.
        </p>
        <div className="flex gap-5 flex-wrap select-none pl-2">
          <a
            href="https://github.com/RAHUL1115"
            className="flex content-center items-center"
          >
            <Image
              className="bg-white rounded-full p-2 w-12 shadow-md"
              src="/img/icon/github.png"
              width={48}
              height={48}
              alt="github image"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul1115"
            className="flex content-center items-center"
          >
            <Image
              className="bg-white rounded-full p-2 w-12 shadow-md"
              src="/img/icon/linkedin.png"
              width={48}
              height={48}
              alt="linkedin image"
            />
          </a>
          <a
            href="https://twitter.com/Rahul_1115"
            className="flex content-center items-center"
          >
            <Image
              className="bg-white rounded-full p-2 w-12 shadow-md"
              src="/img/icon/twitter.png"
              width={48}
              height={48}
              alt="twitter image"
            />
          </a>
        </div>
      </div>
    </Base>
  );
}
