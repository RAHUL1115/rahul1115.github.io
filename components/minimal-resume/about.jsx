export default function About({
  name,
  about,
  jobTitle,
  links,
  contact,
  email,
  location,
}) {
  return (
    <div className="space-y-1.5">
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
            <a className="underline text-blue-500" href={`mailto:${email}`}>
              {email}
            </a>{" "}
          </p>
          <p>
            mobile:{" "}
            <a className="underline text-blue-500" href={`tel:+91${contact}`}>
              +91 {contact}
            </a>{" "}
          </p>
          <p>{location}</p>
        </div>
      </div>
      <div>
        <p className="tracking-wide text-lg font-bold">Summary</p>
        <hr className="w-full mb-2" />
        <p className="px-2">{about}</p>
      </div>
    </div>
  );
}
