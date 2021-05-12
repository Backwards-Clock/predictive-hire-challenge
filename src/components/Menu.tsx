import { RouteProps } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/images/coconut-small.png";

interface MenuItem {
  title: string;
  url: string;
}

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Recipes", url: "/recipes" },
  { title: "Log In", url: "/login" },
];

const matchesPath = (url: string, path: RouteProps["path"]) => {
  if (path === undefined) {
    return false;
  } else if (typeof path === "string") {
    return url === path;
  } else {
    return path.indexOf(url) !== -1;
  }
};

const Menu = ({ path }: RouteProps) => {
  return (
    <Navbar color="white" light>
      <Container>
        <NavbarBrand to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        <Nav tabs>
          {menuItems.map((menuItem: MenuItem, idx) => (
            <NavItem key={idx}>
              {" "}
              <NavLink
                href={menuItem.url}
                active={matchesPath(menuItem.url, path)}
              >
                {menuItem.title.toUpperCase()}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
