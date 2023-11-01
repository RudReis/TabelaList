/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética</p>
          <button onClick={() => setSort("Desc")}>Asc</button>
          <button onClick={() => setSort("Asc")}>Desc</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
