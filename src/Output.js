const output = document.querySelector(".snippet-output");
const description = output.querySelectorAll(".desc");
const shortcode = output.querySelector(".shortcode");
const code = output.querySelector(".codes");

export const Output = () => {
  if (!output) return;

  const copyText = output.querySelector(".textarea");
};

// 제목 및 설명적용
export const getDescription = (value) => {
  description.forEach((item) => {
    item.textContent = value;
  });
};

// 단축키 적용
export const getShortCode = (value) => {
  shortcode.textContent = value;
};

// 코드블럭 적용
export const getCodes = (value, length) => {
  code.innerHTML = value;
  code.setAttribute("rows", length);
};
