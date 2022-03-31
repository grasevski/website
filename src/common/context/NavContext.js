import React, { useReducer, useMemo } from 'react';

const NavContext = React.createContext({
  sideNavIsOpen: false,
  switcherIsOpen: false,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { ...state, [action.nav]: true };
    case 'close':
      return { ...state, [action.nav]: false };
    default:
      return { ...state, [action.nav]: !state[action.nav] };
  }
};
export function NavContextProvider({ children }) {
  const [{ sideNavIsOpen, switcherIsOpen }, dispatch] = useReducer(reducer, {
    sideNavIsOpen: false,
    switcherIsOpen: false,
  });

  const toggleNavState = (nav, type) => {
    dispatch({ nav, type });
  };

  // Prevent context from taking non-stable values
  const value = useMemo(
    () => ({
      sideNavIsOpen,
      switcherIsOpen,
      toggleNavState,
    }),
    [sideNavIsOpen, switcherIsOpen]
  );

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavContext;
