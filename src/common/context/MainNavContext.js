import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
});

function NavState({ children }) {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  // Prevent context from taking non-stable values
  const value = useMemo(
    () => ({
      isMenuOpen,
      toggleMenuMode,
    }),
    [isMenuOpen]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavState;
