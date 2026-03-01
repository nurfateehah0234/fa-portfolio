import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <div className="relative aspect-square w-[450px] xl:w-[500px] rounded-full overflow-hidden border-8 border-accent/30 shadow-2xl">
        <Image
          src="/avatar.png"
          alt="avatar"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 15%' }}
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;
