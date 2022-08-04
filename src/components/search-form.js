const Searchform = ({
  searchCharInput,
  setSearchCharInput,
  skip,
  setSkip,
  charsData,
}) => {
  return (
    <article className="search-form">
      <button
        onClick={() => {
          skip >= 100 && setSkip(skip - 100);
        }}
        className="page-skip"
      ></button>
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
        onClick={() => {
          skip < charsData.data.count - 100 && setSkip(skip + 100);
        }}
        className="page-skip"
      ></button>
    </article>
  );
};

export default Searchform;
