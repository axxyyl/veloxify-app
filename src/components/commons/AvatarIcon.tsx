const AvatarIcon = ({ name }: { name: string | null | undefined }) => {
  return (
    <p className="bg-black w-full h-full object-cover rounded-full text-white flex items-center justify-center text-md">
      {name ? name[0] : ""}
    </p>
  );
};

export default AvatarIcon;
