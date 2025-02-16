export const ClipBoard = async (selector) => {
  try {
    await navigator.clipboard.writeText(selector.innerText);
  } catch (error) {
    console.log(error);
  }
};
