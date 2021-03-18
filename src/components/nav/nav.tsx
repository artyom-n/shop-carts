import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; &nbsp;
      <NavLink to="/products">Products</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/about">About</NavLink>
      &nbsp;  &nbsp;
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
