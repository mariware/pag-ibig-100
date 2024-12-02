const ProfileCard: React.FC<{
  firstName: string;
  lastName: string;
  age: number | string | null;
  nationality: string;
  location: string;
  imageUrl: string;
  link: string;
}> = ({ firstName, lastName, age, nationality, location, imageUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm mx-auto"
    >
      <article
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl"
        style={{ height: "400px", aspectRatio: "3/4" }}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={`${firstName}'s profile`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-500/40"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white ml-4 mb-4">
          {/* Name and Age */}
          <h3 className="text-3xl font-bold">
            {firstName}
          </h3>

          {/* Details */}
          <div className="text-sm text-slate-50/80 leading-6">
            <p>{nationality}</p>
            <p>{location}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProfileCard;