import "./menu.css";

export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#" data-page="home">
          Home
        </a>
      </li>
      <li>
        <a href="#" data-page="skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#" data-page="languages">
          Languages
        </a>
      </li>
      <li>
        <a href="#" data-page="projects">
          Projects
        </a>
      </li>
    </ul>
  );
}
