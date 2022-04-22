import React from "react";

import NavLink from "../../../../components/nav-link/NavLink";
import {
  OFFER_MENU_ITEM,
  HELP_MENU_ITEM
} from "../../../../site-settings/site-navigation";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { HelpIcon } from "../../../../assets/icons/HelpIcon";
import { RightMenuBox } from "./right-menu.style";
import PropTypes from "prop-types";

import AuthMenu from "../AuthMenu";

export const RightMenu = ({ onLogout, avatar, isAuthenticated, onJoin }) => {
  return (
    <RightMenuBox>
      <NavLink
        className="menu-item"
        href={OFFER_MENU_ITEM.href}
        label={OFFER_MENU_ITEM.defaultMessage}
        intlId={OFFER_MENU_ITEM.id}
      />
      <NavLink
        className="menu-item"
        href={HELP_MENU_ITEM.href}
        label={HELP_MENU_ITEM.defaultMessage}
        intlId={HELP_MENU_ITEM.id}
        iconClass="menu-icon"
        icon={<HelpIcon />}
      />
      <LanguageSwitcher />

      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
      />
    </RightMenuBox>
  );
};

RightMenu.propTypess = {
  onLogout: PropTypes.function,
  onJoin: PropTypes.function,
  avatar: PropTypes.string,
  isAuthenticated: PropTypes.boolean
};
