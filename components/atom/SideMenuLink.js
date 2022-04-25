import Link from "next/link";
const SideMenuLink = ({ destination, children }) => {
  return (
    <Link href={destination}>
      <a className="text-white flex justify-center  border-r-2 border-slate-300 items-center text-lg hover:text-slate-200 w-64 h-14 hover:border-rose-400 hover:bg-indigo-600">
        {children}
      </a>
    </Link>
  );
};

export default SideMenuLink;
