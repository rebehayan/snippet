export const Initial = () => {
  const init = () => {
    footerYear();
    blank();
  };

  // 푸터 날짜
  const footerYear = () => {
    const footer = document.querySelector(".footer .thisyear");
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.append(year);
  };

  // 링크 새창
  const blank = () => {
    const links = document.querySelectorAll("a");

    if (links.length == 0) return;

    links.forEach((link) => {
      if (link.getAttribute("target")) {
        link.classList.add("new");
      }
    });
  };

  init();
};
