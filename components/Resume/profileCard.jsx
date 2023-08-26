import Image from "next/image";
import RahulImage from "#/assets/img/rahul.jpg";

const ProfileCard = ({ jobTitle, ...restProps }) => {

  jobTitle = jobTitle || "Full Stack-Developer and Data Analyst";

  return (
    <div
      style={{
        clipPath: "polygon(50% 100%, 0% 87%, 0% 0%, 100% 0%, 100% 87%)",
      }}
      className="bg-indigo-500 text-white p-4 text-sm space-y-4 pt-6 pb-12"
    >
      <div>
        <Image
          className="w-16 rounded-full aspect-square bg-white"
          src={RahulImage}
          width={64}
          alt="Rahul Image"
        />
      </div>
      <div className="space-y-0">
        <p className="text-3xl">Rahul Gupta</p>
        <p>{jobTitle}</p>
      </div>
      <div className="space-y-1">
        <p className="flex items-center gap-x-1">
          <i className="fa-regular fa-location-dot"></i>
          <span>Mumbai, Maharashtra</span>
        </p>
        <p className="flex items-center gap-x-1">
          <i className="fa-regular fa-mobile"></i>
          <span>7021091055</span>
        </p>
        <p className="flex items-center gap-x-1">
          <i className="fa-regular fa-envelope"></i>
          <a className="underline" href="mailto:rahulgupta893433@gmail.com">
            rahulgupta893433@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-x-1">
          <i className="fa-brands fa-github"></i>
          <a className="underline" href="https://github.com/RAHUL1115">
            RAHUL1115
          </a>
        </p>
        <p className="flex items-center gap-x-1">
          <i className="fa-brands fa-linkedin"></i>
          <a
            className="underline"
            href="https://www.linkedin.com/in/rahul1115/"
          >
            rahul1115
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
