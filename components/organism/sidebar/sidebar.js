import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import SideMenuLink from "../../atom/SideMenuLink";
import { useRouter } from "next/router";
import MenuBottom from "../../molecules/MenuBottom";
export default function sidebar() {
  const router = useRouter();
  return (
    <section className="sidebar  text-center">
      <div
        className="brand"
        onClick={() => {
          router.push("/");
        }}
      >
        <h1 className="text-3xl text-white font-semibold text-center">
          Learn Next JS
        </h1>
        <ArrowCircleRightIcon className="w-12 mx-auto text-white mt-3" />
      </div>

      <SideMenuLink destination="/">Home</SideMenuLink>
      <SideMenuLink destination="/test">Testing</SideMenuLink>
      <SideMenuLink destination="/gallery">Gallery</SideMenuLink>
      <SideMenuLink destination="/form">Form</SideMenuLink>

      {/* Bottom Thing */}
      <MenuBottom />
    </section>
  );
}
