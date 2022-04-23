import Sidebar from "../organism/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full ml-64 bg-gray-100 px-5 pt-10">{children}</main>
    </div>
  );
};

export default Layout;
