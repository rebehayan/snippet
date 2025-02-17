export const setBaseUrl = (getURL, getPath) => {
  const config = {
    isURL: getURL,
    path: getPath,
  };

  const baseElement = document.querySelector("base") || document.createElement("base");
  let baseUrl = "";

  if (window.location.hostname === config.isURL) {
    baseUrl = config.getPath;
  } else {
    baseUrl = "/";
  }

  baseElement.href = baseUrl;

  if (!document.head.contains(baseElement)) {
    document.head.prepend(baseElement);
  }

  window.baseUrl = baseUrl; // window전역객체에 저장
};
