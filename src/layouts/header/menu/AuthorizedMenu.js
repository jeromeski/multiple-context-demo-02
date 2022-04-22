import React from "react";
import { FormattedMessage } from "react-intl";
import NavLink from "../../../components/nav-link/NavLink";
import { AUTHORIZED_MENU_ITEMS } from "../../../site-settings/site-navigation";
import PropTypes from "prop-types";

export const AuthorizedMenu = ({ onLogout }) => {
  return (
    <>
      {AUTHORIZED_MENU_ITEMS.map((item, idx) => (
        <NavLink
          key={idx}
          className="menu-item"
          href={item.href}
          label={item.defaultMessage}
          intlId={item.id}
        />
      ))}
      <div className="menu-item" onClick={onLogout}>
        <a>
          <span>
            <FormattedMessage id="navlinkLogout" defaultMessage="Logout" />
          </span>
        </a>
      </div>
    </>
  );
};

AuthorizedMenu.propTypes = {
  onLogout: PropTypes.function
};
