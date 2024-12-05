const ProfileCard: React.FC<{
  name: string;
  relation: string;
  imageUrl: string;
  link: string;
}> = ({ name, relation, imageUrl, link }) => {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="block max-w-sm mx-auto"
    >
      <article
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-[300px] sm:h-[400px] m-auto"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-rose-600/20 dark:from-rose-400/80"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white dark:text-black ml-4 mb-4">
          {/* Name and Age */}
          <h3 className="text-3xl font-bold mb-1">
            {name}
          </h3>

          {/* Details */}
          <div className="text-sm text-stone-300 dark:text-stone-800 leading-5">
            <p>{relation}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProfileCard;