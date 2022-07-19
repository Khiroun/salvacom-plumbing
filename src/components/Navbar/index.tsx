import Wrapper from "./Wrapper";
import DesktopLogo from "./DesktopLogo";
import MobileMenu from "./MobileMenu";
import MobileLogo from "./MobileLogo";
import DesktopMenu from "./DesktopMenu";

const menuItems = [
  {
    name: "Nos services",
    link: "/#services",
  },
  {
    name: "Nos sites",
    link: "/#locations",
  },
  {
    name: "Nous conatcter",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <Wrapper>
      <DesktopLogo />
      <MobileMenu menuItems={menuItems} />
      <MobileLogo />
      <DesktopMenu menuItems={menuItems} />
    </Wrapper>
  );
};

export default Navbar;
