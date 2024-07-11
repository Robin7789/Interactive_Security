$(document).ready(function () {
  $(".faq-question").on("click", function () {
    $(this).next(".faq-answer").slideToggle();
    $(this).parent().siblings().find(".faq-answer").slideUp();
  });

  // Barre de recherche
  $("#faq-search").on("keyup", function () {
    var searchTerm = $(this).val().toLowerCase();
    $(".faq-item").each(function () {
      var questionText = $(this).find(".faq-question").text().toLowerCase();
      var answerText = $(this).find(".faq-answer").text().toLowerCase();
      if (
        questionText.includes(searchTerm) ||
        answerText.includes(searchTerm)
      ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
