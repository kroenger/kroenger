import { useState } from "react";
import "../assets/css/mobileMenuBars.css";

export const MobileMenu = () => {
  const [menuState, setMenuState] = useState(false);
  const showMenu = () => {
    setMenuState(!menuState);
  };

  const MenuItems = () => {
    return (
      <>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" onClick={showMenu}>
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313" />
        </svg>
        <br />
        <a href="about" aria-label="about">
          <li>About</li>
        </a>
        <a href="eco-friendly-tips" aria-label="eco-friendly-tips">
          <li>Eco-friendly Tips</li>
        </a>
        <a href="calendar" aria-label="calendar">
          <li>Calendar</li>
        </a>
        <a href="wildlife-biology-careers-and-oppurtunities" aria-label="wildlife">
          <li>Wildlife Biology</li>
        </a>
        <a href="https://www.typinks.com/categories/kroenger.html" aria-label="blog">
          <li>Blog</li>
        </a>
      </>
    );
  };

  return (
    <>
      <div id="mobileMenuBars" onClick={showMenu}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 384.97 384.97"
        >
          <g>
            <g id="Menu">
              <path
                d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
              ></path>
              <path
                d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
              ></path>
              <path
                d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
              ></path>
            </g>
            <g> </g>
            <g> </g>
            <g> </g>
            <g> </g>
            <g> </g>
            <g> </g>
          </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
          <g> </g>
        </svg>
      </div>
      {menuState && (
        <div id="mobileMenuModel">
          <MenuItems />
        </div>
      )}
    </>
  );
};
