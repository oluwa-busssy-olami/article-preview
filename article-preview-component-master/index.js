const socials_icon = document.querySelector(".shared");
const share_button = document.querySelector(".shareIcon");
share_button.addEventListener("click", (e) => {
  socials_icon.classList.add("clicked");
  console.log("clicked");
});
