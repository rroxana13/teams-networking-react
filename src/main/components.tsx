import { TeamsTable } from "../teams/TeamsTable";

export function ContentWrapper() {
  return (
    <div id="main">
      <div className="tbar">
        <div>
          <button id="removeSelected">❌Remove selected</button>
        </div>
        <div>
          <input type="search" name="search" id="searchTeams" placeholder="Search" />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>
      <TeamsTable loading={true} />
      <br />
      <TeamsTable loading={false} />
    </div>
  );
}
