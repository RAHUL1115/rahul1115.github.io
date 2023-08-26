import Base from "#/components/Base";

export default function Home() {
  return (
    <Base>
      <div className="container mx-auto space-y-5 mt-10 px-6 md:px-3 flex-1">
        <div>
          <p className="text-3xl text-center">Articles</p>
          <p className="text-center text-xs text-blue-500">
            Articles i have written
          </p>
        </div>
        <div>
          <p>no article is published</p>
        </div>
      </div>
    </Base>
  );
}
