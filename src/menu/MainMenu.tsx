import "./menu.css";

export function MainMenu() {
  let active: string = "home";
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#todos" className={active === "todos" ? "active" : ""}>
          To Do's
        </a>
      </li>
      <li>
        <a href="#teams" className={active === "teams" ? "active" : ""}>
          Teams
        </a>
      </li>
    </ul>
  );
}
