const Searchform = ({
  searchCharInput,
  setSearchCharInput,
  skip,
  setSkip,
  charsData,
  limit,
}) => {
  return (
    <article className="search-form">
      <button
        className="page-skip"
        onClick={() => {
          skip >= 100 && setSkip(skip - 100);
        }}
      >
        <h2>-</h2>
      </button>
      <input
        className="search-input"
        type="text"
        placeholder="recherche"
        value={searchCharInput}
        onChange={(event) => {
          setSearchCharInput(event.target.value);
        }}
      />
      <button
        className="page-skip"
        onClick={() => {
          skip < charsData.data.count - skip && setSkip(skip + 100);
        }}
      >
        <h2>+</h2>
      </button>
    </article>
  );
};

export default Searchform;
