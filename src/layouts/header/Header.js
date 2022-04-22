import PropTypes from "prop-types";
import { useLogger } from "react-use";
import { LeftMenu } from "./menu/left-menu/LeftMenu";
import { authDispatch, authState } from "../../context/auth/auth.context";
import LogoImage from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user.jpg";
import HeaderWrapper from "./header.style";

export default function Header({ className }) {
  useLogger("Header -->");
  const { isAuthenticated } = authState();
  const dispatch = authDispatch();
  console.log(isAuthenticated);
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  token: PropTypes.string
};
