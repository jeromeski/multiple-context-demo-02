import PropTypes from "prop-types";
import { useLogger } from "react-use";
import { LeftMenu } from "./menu/left-menu/LeftMenu";
import { authDispatch, authState } from "../../context/auth/auth.context";
import LogoImage from "../../assets/images/logo.svg";
import UserImage from "../../assets/images/user.jpg";
import HeaderWrapper from "./header.style";
import { RightMenu } from "./menu/right-menu/RightMenu";

export default function Header({ className }) {
  useLogger("Header -->");
  const { isAuthenticated } = authState();
  const dispatch = authDispatch();
  console.log(isAuthenticated);

  const handleJoin = () => {
    dispatch({
      type: "SIGNIN"
    });

    // openModal({
    //   show: true,
    //   overlayClassName: 'quick-view-overlay',
    //   closeOnClickOutside: true,
    //   component: AuthenticationForm,
    //   closeComponent: '',
    //   config: {
    //     enableResizing: false,
    //     disableDragging: true,
    //     className: 'quick-view-modal',
    //     width: 458,
    //     height: 'auto',
    //   },
    // });
  };
  return (
    <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={LogoImage} />
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        // onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  token: PropTypes.string
};
