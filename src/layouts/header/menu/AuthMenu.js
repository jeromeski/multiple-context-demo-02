import React from "react";
import { Button } from "../../../components/button/Button";
import { FormattedMessage } from "react-intl";
import Popover from "../../../components/popover/Popover";
import { AuthorizedMenu } from "./AuthorizedMenu";
import PropTypes from "prop-types";

const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }) => {
  return !isAuthenticated ? (
    <Button variant="primary" onClick={onJoin}>
      <FormattedMessage id="joinButton" defaultMessage="join" />
    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={avatar} alt="user" />}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;

AuthMenu.propTypes = {
  isAuthenticated: PropTypes.any,
  onJoin: PropTypes.func,
  onLogout: PropTypes.func,
  avatar: PropTypes.string
};
