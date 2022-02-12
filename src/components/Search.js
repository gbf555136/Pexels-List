import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = ({ setInput }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.children[0].value);
    e.target.children[0].value = "";
  };
  return (
    <div className="search">
      <form action="" onSubmit={searchHandler}>
        <input type="text" placeholder="keyword" required />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
