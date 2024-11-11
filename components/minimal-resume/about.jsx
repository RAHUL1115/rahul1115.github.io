export default function About({
  name,
  jobTitle,
  links,
  contact,
  email,
  location,
}) {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl tracking-wide font-black">{name}</h1>
        <p className="text-sm tracking-wide">{jobTitle}</p>
        <dev className="flex space-x-2 text-sm">
          {links.map((link) => (
            <a
              key={link.url}
              className="underline text-blue-800"
              href={link.url}
            >
              {link.name}
            </a>
          ))}
        </dev>
      </div>
      <div class="text-sm text-right">
        <p>
          Email:{" "}
          <a className="underline text-blue-800" href={`mailto:${email}`}>
            {email}
          </a>{" "}
        </p>
        <p>
          Mobile:{" "}
          <a className="underline text-blue-800" href={`tel:+91${contact}`}>
            +91 {contact}
          </a>{" "}
        </p>
        <p>{location}</p>
      </div>
    </div>
  );
}
