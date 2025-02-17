export const setBaseUrl = (baseURL) => {
  const baseElement = document.querySelector("base") || document.createElement("base");
  let baseUrl = "";

  if (window.location.hostname === baseURL) {
    baseUrl = "/snippet/";
  } else {
    baseUrl = "/";
  }

  baseElement.href = baseUrl;

  if (!document.head.contains(baseElement)) {
    document.head.prepend(baseElement);
  }

  window.baseUrl = baseUrl; // window전역객체에 저장
};
