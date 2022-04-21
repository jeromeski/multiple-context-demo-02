import React from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { CATEGORY_MENU_ITEMS } from "../../../../site-settings/site-navigation";
import PropTypes from "prop-types";
import * as categoryMenuIcons from "../../../../assets/icons/category-menu-icons";
import {
  MainMenu,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox
} from "./left-menu.style";
import Logo from "../../../logo/Logo";
import Popover from "../../../../components/popover/Popover";
import { MenuDown } from "../../../../assets/icons/MenuDown";

const CategoryIcon = ({ name }) => {
  const TagName = categoryMenuIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};

const CategoryMenu = (props) => {
  const history = useHistory();
  const handleOnClick = (item) => {
    if (item) {
      history.push("/[type]", `${item.href}`);
      props.onClick(item);
      return;
    }
    history.push(`${item.href}`);
    props.onClick(item);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {CATEGORY_MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
          <CategoryIcon name={item.icon} />
          <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
        </MenuItem>
      ))}
    </div>
  );
};

export const LeftMenu = ({ logo }) => {
  const history = useHistory();
  const initialMenu = CATEGORY_MENU_ITEMS.find(
    (item) => item.href === history.location.pathname
  );
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? CATEGORY_MENU_ITEMS[0]
  );

  return (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={"Shop Logo"}
        onClick={() => setActiveMenu(CATEGORY_MENU_ITEMS[0])}
      />

      <MainMenu>
        <Popover
          className="right"
          handler={
            <SelectedItem>
              <span>
                <Icon>
                  <CategoryIcon name={activeMenu?.icon} />
                </Icon>
                <span></span>
              </span>
              <Arrow>
                <MenuDown />
              </Arrow>
            </SelectedItem>
          }
          content={<CategoryMenu onClick={setActiveMenu} />}
        />
      </MainMenu>
    </LeftMenuBox>
  );
};

LeftMenu.propTypes = {
  logo: PropTypes.object
};
