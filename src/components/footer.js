const Footer = () => {
  return (
    <footer>
      <article className="siteFooter"></article>
      <nav id="promo">
        Projet créé dans le cadre d'une formation au
        <a
          target="_blank"
          href="https://www.lereacteur.io"
          rel="noreferrer"
          id="promo-reacteur"
        >
          <img src="./logo-reacteur.jpeg" alt="logo du réacteur" />
          Réacteur
        </a>{" "}
        <br />
        par{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/christophe-lafon-549788243"
          rel="noreferrer"
          id="promo-perso"
        >
          <img src="./logo-linkedin.png" alt="logo de linkedin" />
          Christophe Lafon
        </a>
        <a
          target="_blank"
          href="https://github.com/stinkyFerret01"
          rel="noreferrer"
          id="promo-github"
        >
          <img src="./github.png" alt="logo de github" />
          StinkyFerret01
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
