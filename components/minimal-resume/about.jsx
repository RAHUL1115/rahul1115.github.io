export default function About({
  name = "Rahul Gupta",
  about = "Hello",
  links,
  jobTitle,
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl tracking-wide font-bold">{name}</h1>
          <p className="text-sm tracking-wide">{jobTitle}</p>
          <dev className="flex space-x-2 text-sm">
            {links.map((link) => (
              <a
                key={link.url}
                className="underline text-blue-500"
                href={link.url}
              >
                {link.name}
              </a>
            ))}
          </dev>
        </div>
        <div class="text-sm text-right">
          <p>
            email:{" "}
            <a
              className="underline text-blue-500"
              href="mailto:rahulgupta89343@gmail.com"
            >
              rahulgupta89343@gmail.com
            </a>{" "}
          </p>
          <p>
            mobile:{" "}
            <a className="underline text-blue-500" href="tel:+917021091055">
              +91 7021091055
            </a>{" "}
          </p>
          <p>Mumbai, India</p>
        </div>
      </div>
      <p className="px-2 text-sm">{about}</p>
    </div>
  );
}
