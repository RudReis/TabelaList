/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch }) => {
  return (
    <div>
      <div className="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required="required"
          id="inputField"
          placeholder="Pesquisar"
          type="text"
        />
        <label className="usernameLabel" htmlFor="inputField">
          Pesquisar
        </label>
      </div>

      {/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
      {/* <div className="search">
        <h2>Pesquisar</h2>
        <input type="text" placeholder="Digite para pesquisar..." />
      </div> */}
    </div>
  );
};

export default Search;
