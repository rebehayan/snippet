const before = document.querySelector(".before");
const after = document.querySelector(".after");
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

before.querySelector(".textarea").addEventListener("input", (e) => {
  const code = e.target.value.split("\n");
  const result = code
    .map((line) => {
      return `"${line}"<br />`;
    })
    .join("");
  console.log(code);

  after.querySelector(".textarea .codes").innerHTML = result;
});
