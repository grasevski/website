import React, { useContext } from 'react';
import { Location } from '@gatsbyjs/reach-router';

import SideNavMenu from '../SideNav/SideNavMenu';
import SideNavMenuItem from '../SideNav/SideNavMenuItem';
import SideNavLink from '../SideNav/SideNavLink';

import { MenuContext } from '../../common/context/MainNavContext';

function LeftNavItem({ menuItems, title, path }) {
  const { toggleMenuMode } = useContext(MenuContext);

  const handleClick = () => {
    toggleMenuMode();
  };

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location;

        // If there is single item
        if (!menuItems) {
          return (
            <SideNavLink onClick={handleClick} to={path}>
              {title}
            </SideNavLink>
          );
        }

        const isActive = menuItems.some(
          (item) => item.path.split('/')[1] === pathname.split('/')[1]
        );

        return (
          <SideNavMenu isActive={isActive} defaultExpanded={isActive} title={title}>
            <SubNavItems onClick={handleClick} items={menuItems} />
          </SideNavMenu>
        );
      }}
    </Location>
  );
}

const SubNavItems = ({ items, onClick }) =>
  items.map((item) => {
    const to = item.path;
    return (
      <SideNavMenuItem to={to} onClick={onClick} key={items.indexOf(item)}>
        {item.title}
      </SideNavMenuItem>
    );
  });

export default LeftNavItem;
