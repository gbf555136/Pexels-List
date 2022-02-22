import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = ({ input, setInput, setCurrentInput }) => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    setCurrentInput(input);
    setInput("");
  };
  const HandleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <form action="" onSubmit={HandleSubmit} acceptCharset="UTF-8">
        <input
          type="text"
          placeholder="keyword"
          required
          onChange={HandleChange}
          value={input}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
