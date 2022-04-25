import Link from "next/link";

const SideMenuBottom = ({ icon, children, href }) => {
  return (
    <Link href={href}>
      <div className="SidebarFooter">
        {icon}
        {children}
      </div>
    </Link>
  );
};

export default SideMenuBottom;
