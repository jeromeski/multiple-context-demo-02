import { useHistory } from "react-router-dom";
import Sticky from "react-stickynode";
import Header from "../layouts/header/Header";
import PropTypes from "prop-types";
import { uiState } from "../context/ui/ui.context";
import { LayoutWrapper } from "./app-layout.style";
import { isCategoryPage } from "./is-home-page";

export default function Layout({ classname, children }) {
  const { isSticky } = uiState();
  console.log("Layout --> isSticky :", isSticky);
  const { location } = useHistory();
  let type =
    location.pathname === "/restaurant" ? "restaurant" : location.pathname;
  type = type.split("").splice(1, type.length).join("");
  const isHomePage = isCategoryPage(type);
  return (
    <LayoutWrapper>
      <Sticky enabled={isSticky} innerZ={1001}>
        <Header
          className={`${isSticky && isHomePage ? "sticky" : "unSticky"} ${
            isHomePage ? "home" : ""
          }`}
        />
      </Sticky>
      {children}
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  className: PropTypes.string,
  token: PropTypes.string
};
