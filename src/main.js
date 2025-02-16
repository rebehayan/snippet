const before = document.querySelector(".snippet-input");
const after = document.querySelector(".snippet-output");
const inputs = before.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (e.target.name === "desc") {
      const value = e.target.value;
      after.querySelectorAll(".desc").forEach((item) => {
        item.textContent = value;
      });
    } else if (e.target.name === "shortcode") {
      const value = e.target.value;
      after.querySelector(".shortcode").textContent = value;
    }
  });
});

let result;
before.querySelector(".textarea").addEventListener("input", (e) => {
  const code = e.target.value.split("\n");

  result = code
    .map((line) => {
      return `"${line}", \n `;
    })
    .join("");

  after.querySelector(".textarea .codes").innerHTML = result;
});

const buttonCopy = document.querySelector(".btn-copy");
const copyText = after.querySelector(".textarea");

const selectAll = (element) => {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);

  copy(element);
};

const copy = async (selector) => {
  try {
    await navigator.clipboard.writeText(selector.innerText);
  } catch (error) {
    console.log(error);
  }
};

buttonCopy.addEventListener("click", () => {
  // selectAll(copyText);
  const a = document.querySelector(".a");
  const b = document.querySelector(".b");
  const code = document.querySelector(".codes");

  const template = document.querySelector(".target");
  template.append(a.innerText);
  template.append(code.value);
  template.append(b.innerText);

  copy(template).then(() => {
    template.innerText = "";
  });
});

before.querySelector(".textarea").addEventListener("keydown", (e) => {
  const n = e.target.value.split("\n").length;
  const code = document.querySelector(".codes");
  code.setAttribute("rows", n);
});

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
