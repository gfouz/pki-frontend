import * as React from "react";
import { useLocation, Link } from "react-router-dom";
import { StyledHeader, HeaderProps } from "./Header.styles";

function Header(props: HeaderProps) {
  const links = ["/registro", "/consultas", "/servicios", "/"];
  const router = useLocation();
  const { pathname } = router;
  const currentlinks = links.filter((link) => link !== pathname);

  return (
    <>
      <StyledHeader {...props}>
        <div className="nav">
          {currentlinks.map((link, index) => (
            <div key={link} className="nav__list">
              <Link className="nav__item" to={`${link}`}>
                 {link === "/" ? "inicio" : link.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
export default Header;
