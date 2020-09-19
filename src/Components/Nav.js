import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

const menus = ["Home", "Game", "Rank", "List"];

class Nav extends React.Component {
  state = {
    color: "white",
    currentMenu: "Home",
    backgroundColor: "OrangeBack",
  };

  render() {
    const { currentMenu, color, backgroundColor } = this.state;

    const _clickHandle = (event) => {
      event.preventDefault();
      const menu = event.target.innerText;
      let color = "white";
      let backgroundColor = "OrangeBack";

      if (menu == "List") {
        color = "black";
        backgroundColor = "WhiteBack";
      }

      this.setState({
        color: color,
        currentMenu: menu,
        backgroundColor: backgroundColor,
      });
    };

    return (
      <div id="Container" className={backgroundColor}>
        <ul className="NavList">
          {menus.map((menu, index) => {
            let colorStyle;
            if (menu == currentMenu) {
              colorStyle = {
                color: color,
                borderColor: color,
              };
            } else {
              colorStyle = {
                color: color,
              };
            }

            // Link to not working
            return (
              <li key={index}>
                <Link to={`/${menu}`} style={colorStyle} onClick={_clickHandle}>
                  {menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
