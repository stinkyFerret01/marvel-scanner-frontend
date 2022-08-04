const Searchform = ({ searchCharInput, setSearchCharInput }) => {
  return (
    <article className="search-form">
      <input
        type="text"
        placeholder="do do doo"
        value={searchCharInput}
        onChange={(event) => {
          setSearchCharInput(event.target.value);
        }}
      />
    </article>
  );
};

export default Searchform;
