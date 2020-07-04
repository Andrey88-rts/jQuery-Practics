// Код для клавиатурного пианино
// $(document).ready(function (event) {
//   $(this).keydown(function (e) {
//     let keyWhite = $(this).find(".white-key[data-key=" + e.which + "]");
//     let keyBlack = $(this).find(".black-key[data-key=" + e.which + "]");
//     let audio = $(this).find("audio[data-key=" + e.which + "]")[0];
//     keyWhite.toggle(".white-key:active");
//     keyBlack.toggle(".black-key:active");
//     audio.play();
//     audio.currentTime = 0;
//   });

//   $(this).keyup(function (e) {
//     let keyWhite = $(this).find(".white-key[data-key=" + e.which + "]");
//     let keyBlack = $(this).find(".black-key[data-key=" + e.which + "]");
//     keyWhite.toggle(".white-key:active");
//     keyBlack.toggle(".black-key:active");
//   });
// });
// Конец кода клавиатурного пианино

//Полноэкранное модальное окно
$(document).ready(function () {
  let modal = $(".popup"),
    overlay = $(".overlay"),
    link = $('button[data-popup="true"]'),
    close = $(".close-btn"),
    fruitName = $(".fruit-name");


  close.click(function () {
    modal.hide();
    overlay.hide();
  });

  link.on("click", function () {
    fruitName.text($(this).attr("data-fruit"));
    modal.show().animate({ left: "0" }, 1000);
    overlay.show();
  });
});
//Конец кода для модального окна