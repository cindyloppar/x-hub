import React, { useState, useEffect } from "react";
import { DashContainer, BtmNav, Navigation, Input } from "./styled-components";
import { Dropdown } from "react-bootstrap";
import DisplayBookmarks from './bookmarks'

const Nav = () => {
  return (
    <React.Fragment>
      <Navigation>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i class="fas fa-bars bar" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Preferences</Dropdown.Item>
            <Dropdown.Item href="#/action-2">X-Capabilities</Dropdown.Item>

            <Dropdown.Item href="#/action-3">FAQ</Dropdown.Item>
            <Dropdown.Item href="http://localhost:41927/bookmarks">Bookmarks</Dropdown.Item>

            <Dropdown.Item href="">Bookmarks</Dropdown.Item>
            <Dropdown.Item href="#/action-3">FAQ</Dropdown.Ite
          </Dropdown.Menu>
        </Dropdown>
        <img src="https://github.com/moralss/x-hub/blob/master/client-side/src/components/X.png?raw=true" />
        <Input placeholder="search" />
      </Navigation>
    </React.Fragment>
  );
};
export default Nav;
