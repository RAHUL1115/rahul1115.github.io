import Image from "next/image";

export default function Home() {
  return (
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
          FULL STAKE DEVELOPER & DATA ANALYST
        </p>
      </div>

      <p className="px-2 text-sm">
        Web Developer with 2 years of experience on working mid level projects.
        Designed and Developed more then 5+ websites inclusding E-commerce
        webistes. Exploring the word of data sceince and machin learning and
        transitioning form Development to Data Science.
        {/* <div className="flex gap-5 flex-wrap select-none pl-2">
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="git image"
            src="/img/icon/git.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="html image"
            src="/img/icon/html-5.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="css image"
            src="/img/icon/css3.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="js image"
            src="/img/icon/javascript.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="node image"
            src="/img/icon/node-js.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="react image"
            src="/img/icon/react.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="python image"
            src="/img/icon/python.png"
          />
          <Image
            width={24}
            height={24}
            className="w-6"
            alt="jupyter image"
            src="/img/icon/jupyter.png"
          />
        </div> */}
      </p>

      <div className="flex gap-5 flex-wrap select-none pl-2">
        <a href="https://github.com/RAHUL1115">
          <Image
            width={48}
            height={48}
            className="bg-white rounded-full p-2 w-12 shadow-md"
            src="/img/icon/github.png"
            alt="github image"
          />
        </a>
        <a href="https://www.linkedin.com/in/rahul1115">
          <Image
            width={48}
            height={48}
            className="bg-white rounded-full p-2 w-12 shadow-md"
            src="/img/icon/linkedin.png"
            alt="linkedin image"
          />
        </a>
        <a href="https://twitter.com/Rahul_1115">
          <Image
            width={48}
            height={48}
            className="bg-white rounded-full p-2 w-12 shadow-md"
            src="/img/icon/twitter.png"
            alt="twitter image"
          />
        </a>
      </div>
    </div>
  );
}
