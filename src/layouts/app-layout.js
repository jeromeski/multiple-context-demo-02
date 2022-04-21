import { useHistory } from "react-router-dom";
import Sticky from "react-stickynode";
import Header from "../components/header/Header";
import { uiState } from "../context/ui/ui.context";
import { LayoutWrapper } from "./app-layout.style";
import { isCategoryPage } from "./is-home-page";

export default function Layout({ classname, children }) {
  const { isSticky } = uiState();
  console.log("Layout --> isSticky :", isSticky);
  const { location: pathname, search } = useHistory();
  const type = pathname === "/restaurant" ? "restaurant" : search;
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
