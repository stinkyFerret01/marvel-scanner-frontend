import { useLocation } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const { comic } = location.state;
  return (
    <article>
      <p>{comic.title}</p>
      <img
        classname="comic-card"
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
      />
    </article>
  );
};
export default Comic;
