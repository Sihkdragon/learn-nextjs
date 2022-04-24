import Sidebar from "../organism/sidebar/sidebar";
import { Html, Head } from "next/document";
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full min-h-screen ml-64 bg-gray-100 px-5 pt-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
