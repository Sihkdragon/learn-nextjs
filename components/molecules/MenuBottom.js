import { LogoutIcon } from "@heroicons/react/outline";
import { CogIcon } from "@heroicons/react/solid";
import SideMenuBottom from "../atom/SideMenuBottom";

const MenuBottom = () => {
  return (
    <div className="MenuBottom">
      <SideMenuBottom icon={<CogIcon className="w-8 text-white mr-1" />}>
        Settings
      </SideMenuBottom>
      <SideMenuBottom icon={<LogoutIcon className="w-8 text-white mr-1" />}>
        Logout
      </SideMenuBottom>
    </div>
  );
};

export default MenuBottom;
