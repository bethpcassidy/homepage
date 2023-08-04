import "./Header.css";
import React from "react";
import Dropdown from "react";

import icon from "./assets/menu icon.png";
export function Header() {
  return (
    <div class="dropdown">
      <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <img class="menu" src={icon} alt="loading"></img>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">
            Linkedin
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="mailto: bethcassdy@gmail.com">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
