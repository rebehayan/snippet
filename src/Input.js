import { getCodes, getDescription, getShortCode } from "./Output.js";

export const Input = () => {
  const inputForms = document.querySelector(".snippet-input");
  if (!inputForms) return;

  const inputs = inputForms.querySelectorAll("input");
  const textarea = inputForms.querySelector(".textarea");

  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (e.target.name === "desc") {
        const value = e.target.value;
        getDescription(value);
      } else if (e.target.name === "shortcode") {
        const value = e.target.value;
        getShortCode(value);
      }
    });
  });

  textarea.addEventListener("input", (e) => {
    const code = e.target.value.split("\n");
    const rowLength = code.length;
    const result = code
      .map((line) => {
        return `"${line}", \n `;
      })
      .join("");

    getCodes(result, rowLength);
  });
};

// 단축키제공
// ctrl+1 누르면 커서가 잇는곳에서 순차적으로 생성함.
// before.querySelector(".textarea").addEventListener("keydown", (e) => {
//   const cursor = e.target.selectionStart;
//   const n = e.target.value.split("\n").length;

//   if (e.ctrlKey && e.key === "1") {
//     const asTxt = result.split(",").replace("\n", "");
//     console.log(asTxt);

//     result.replace(asTxt, `${asTxt}$1`);
//   }
// });
