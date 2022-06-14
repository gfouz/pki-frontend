import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledHeader, HeaderProps } from "./Header.styles";
import Home from "../../icons/Home";
import SpyGlass from "../../icons/SpyGlass";
import Telegram from "../../icons/Telegram";
import Whatsapp from "../../icons/Whatsapp";
import Envelope from "../../icons/Envelope";
import GitAlt from "../../icons/GitAlt";

function Header(props: HeaderProps) {
  interface IRouterPath {
    link: string;
    icon: any;
  }

  const elements: IRouterPath[] = [
    {
      link: "/",
      icon: <Home />,
    },
    {
      link: "/registro",
      icon: <SpyGlass />,
    },
    {
      link: "/servicios",
      icon: <Telegram />,
    },
    {
      link: "/contactos",
      icon: <Whatsapp />,
    },
    {
      link: "/consultas",
      icon: <Envelope />,
    },
    {
      link: "/descargas",
      icon: <GitAlt />,
    },
  ];

  const router = useLocation();
  const { pathname } = router;
  //const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader {...props}>
        <div className="nav">
          {elements.map((item) => (
            <Link to={`${item.link}`}>
              <div className="nav__item">
                <div className="nav__icon"> {item.icon}</div>
                <div className="nav__link">
                  {" "}
                  {item.link === "/" ? "inicio" : item.link.slice(1)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
export default Header;
