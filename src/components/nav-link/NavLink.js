import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLink = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic
}) => {
  const history = useHistory();
  const isCurrentPath = history.pathname === href;
  return (
    <div onClick={onClick} className={className ? className : ""}>
      {dynamic ? (
        <Link href={"/[type]"} as={href}>
          <a
            className={isCurrentPath ? " current-page" : ""}
            style={{ display: "flex", alignItems: "center" }}
          >
            {icon ? <Icon className={iconClass}>{icon}</Icon> : ""}

            <span className="label">
              {intlId ? (
                <FormattedMessage
                  id={intlId ? intlId : "defaultNavLinkId"}
                  defaultMessage={label}
                />
              ) : (
                label
              )}
            </span>
          </a>
        </Link>
      ) : (
        <Link to={href}>
          <a
            className={isCurrentPath ? " current-page" : ""}
            style={{ display: "flex", alignItems: "center" }}
          >
            {icon ? <Icon className={iconClass}>{icon}</Icon> : ""}

            <span className="label">
              {intlId ? (
                <FormattedMessage
                  id={intlId ? intlId : "defaultNavLinkId"}
                  defaultMessage={label}
                />
              ) : (
                label
              )}
            </span>
          </a>
        </Link>
      )}
    </div>
  );
};

export default NavLink;

NavLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  intlId: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  iconClass: PropTypes.string,
  onClick: PropTypes.func
};
