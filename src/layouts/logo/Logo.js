import React from "react";
import PropTypes from "prop-types";

import { LogoBox, LogoImage } from "./logo.style";
import { useHistory } from "react-router-dom";

const Logo = ({ imageUrl, alt, onClick }) => {
  const history = useHistory();
  function onLogoClick() {
    history.push("/");
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default Logo;

Logo.propTypes = {
  imageUrl: PropTypes.object,
  alt: PropTypes.string
  // onClick: PropTypes.function
};
