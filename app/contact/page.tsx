import Base from "#/components/Base";

export default function Home() {
  return (
    <Base>
      <div className="container mx-auto space-y-5 mt-10 px-6 md:px-3 flex-1">
        <div>
          <p className="text-3xl text-center">Contact</p>
          <p className="text-center text-xs text-blue-500">Connect with me</p>
        </div>
      </div>
      <div className="p-4">
        <p>this page is still in development</p>
      </div>
    </Base>
  );
}
