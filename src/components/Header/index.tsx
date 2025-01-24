import ProfileCardForHeader from "./ProfileCardForHeader";

const Header = () => {
  return (
    <header className=" bg-[#F2F6FA] sticky top-0  flex flex-row items-center justify-between w-full px-5 py-[7px] ">
      <p className="text-[#383838] text-[18px] font-urbanist-regular_400">
        Dashboard
      </p>
      <ProfileCardForHeader />
    </header>
  );
};

export default Header;
