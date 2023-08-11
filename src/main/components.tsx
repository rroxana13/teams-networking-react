import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  return (
    <div id="main">
      <div className="tbar">
        <div>
          <button id="removeSelected">❌Remove selected</button>
        </div>
        <div>
          <input
            type="search"
            name="search"
            id="searchTeams"
            placeholder="Search..."
            onChange={e => {
              console.info("search", e.target.value);
            }}
          />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>
      <TeamsTableWrapper search={"js"} />
    </div>
  );
}
