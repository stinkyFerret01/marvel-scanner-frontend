import { useLocation } from "react-router-dom";

////////////////

const Comic = () => {
  const location = useLocation();
  const { comic } = location.state;
  return (
    <main className="comics-page">
      <section className="comic-display">
        <article className="comics-card">
          <img
            className="comic-card"
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt={comic.title}
          />
          <h3>{comic.title}</h3>
        </article>
        <div>
          <div className="story-line">
            <h3>DESCRIPTION</h3>
            <h4>{comic.description}</h4>
          </div>
          {/* <div className="apparition">
            <h3>APPARITION</h3>
            <div className="comic-list">
              {charcomics.comics.map((charComic, index) => {
                return charcomics.comics.length > 0 ? (
                  <article key={index} className="comic-card">
                    <p>{charComic.title}</p>
                    <img
                      src={
                        charComic.thumbnail.path +
                        "." +
                        char.char.thumbnail.extension
                      }
                      alt={char.char.name}
                    />
                  </article>
                ) : (
                  <p>INFORMATIONS NON RENSEIGNEES</p>
                );
              })}
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Comic;
