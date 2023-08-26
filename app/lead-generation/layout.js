import "../globals.css";
import "../../assets/font-awsome/css/all.css";

export const metadata = {
  title: "Rahul Resume",
  description: "Rahul Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col text-base w-full mx-auto justify-center items-center">
        {children}
      </body>
    </html>
  );
}

