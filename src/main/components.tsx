import { useState } from "react";
import { TeamsTableWrapper } from "../teams/TeamsTable";

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

export function ContentWrapper() {
  //let search = "react";

  return (
    <div id="main">
      <HomePage />
      <TodosPage />
      <TeamsPage />
    </div>
  );
}
