const heart = {
  init: function () {
    const heartElem = document.querySelector("p.footer_p > span");
    heartElem.addEventListener("click", heart.handleHeartElem);
  },

  handleHeartElem: function () {
    window.alert(
      "Peu importe les défis que vous rencontrez aujourd'hui, rappelez-vous toujours que vous êtes plus fort que vous ne le pensez et que vous avez le pouvoir de surmonter chaque obstacle. 🌟"
    );
  },
};

export default heart;
