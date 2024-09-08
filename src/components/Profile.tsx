const Profile = () => {
  return (
    <div className="flex h-screen items-center justify-center p-4 sm:h-[90vh]">
      <div className="h-full w-full rounded-2xl border-2 border-[#3c9484]">
        <img
          src={"/Photos/profile-pic.png"}
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Profile;
