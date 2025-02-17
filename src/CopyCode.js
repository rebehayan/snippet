import { ClipBoard } from "./ClipBoard.js";

const text = {
  copy: "코드복사",
  copied: "코드가 복사 되었습니다",
};

export const CopyCode = () => {
  const buttonCopy = document.querySelector(".btn-copy");
  if (!buttonCopy) return;

  buttonCopy.addEventListener("click", () => {
    const code1 = document.getElementById("output-code1");
    const code2 = document.getElementById("output-code2");
    const code3 = document.getElementById("output-code3");
    const template = document.getElementById("template");

    template.append(code1.innerText);
    template.append(code2.value);
    template.append(code3.innerText);

    ClipBoard(template).then(() => {
      buttonCopy.textContent = text.copied;
      setTimeout(() => {
        buttonCopy.textContent = text.copy;
      }, 1500);
      template.innerText = "";
    });
  });
};
