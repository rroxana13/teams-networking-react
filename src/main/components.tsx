import { useState } from "react";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { Page } from "./models";

export function TeamsPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="tbar">
        <div>
          <button id="removeSelected">❌Remove selected</button>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search..."
            onChange={e => {
              console.info("search", e.target.value);
              // search = e.target.value;

              setSearch(e.target.value);
            }}
          />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>
      <TeamsTableWrapper search={search} />
    </>
  );
}

export function HomePage() {
  return <div>Home...</div>;
}

export function TodosPage() {
  return <div>Todos...</div>;
}

type Props = {
  activePage: Page;
};
export function ContentWrapper(props: Props) {
  //let search = "react";

  // const activePage: Page = "teams" as Page;

  const page = getActivePage(props.activePage);

  return <div id="main">{page}</div>;
}

function getActivePage(activePage: Page) {
  switch (activePage) {
    case "home":
      return <HomePage />;
    case "todos":
      return <TodosPage />;
    case "teams":
      return <TeamsPage />;
    default: {
      return <HomePage />;
    }
  }
}
