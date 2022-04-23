import Link from "next/link";

const SideMenuBottom = ({ icon, children }) => {
  return (
    <Link href={"/logout"}>
      <div className="SidebarFooter">
        {/* <LogoutIcon className="w-8 text-white mr-1" /> */}
        {icon}
        {children}
      </div>
    </Link>
  );
};

export default SideMenuBottom;
