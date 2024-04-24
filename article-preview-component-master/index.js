//

const socials_icon = document.querySelector(".shared");
const share_button = document.querySelector(".shareIcon");
const share_social_icon = document.querySelector(".share-social-icon");
share_button.addEventListener("click", (e) => {
  socials_icon.classList.toggle("clicked");
  console.log("clicked");
});
share_social_icon.addEventListener("click", (e) => {
  socials_icon.classList.remove("clicked");
});
