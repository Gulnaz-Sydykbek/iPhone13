const scrollFunc = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const linkCharacteristics = document.querySelector(
    ".card-details__link-characteristics"
  );

  const newLinks = [...links, linkCharacteristics];

  seamless.polyfill();

  newLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const linkId = link.getAttribute("href").substring(1);
      const LinkSection = document.getElementById(linkId);

      if (LinkSection) {
        seamless.elementScrollIntoView(LinkSection, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

scrollFunc();
