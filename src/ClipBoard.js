export const ClipBoard = async (selector) => {
  try {
    const element = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!element) {
      throw new Error("요소를 찾을 수 없습니다.");
    }

    await navigator.clipboard.writeText(selector.innerText);
  } catch (error) {
    console.log(error);
  }
};
