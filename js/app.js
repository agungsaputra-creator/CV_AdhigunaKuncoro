$(".menu-link").click(function (e) {
  e.preventDefault();
  var target = $($(this).attr("href"));
  if (target.length) {
    var scrollTo = target.offset().top;
    $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
  }
  console.log(scrollTo);
});

function toNav() {
  document.getElementById("mobile-view").style.marginLeft = "250px";
  document.getElementById("close").style.display = "block";
  document.getElementById("open").style.display = "none";
}

function closeNav() {
  document.getElementById("mobile-view").style.marginLeft = "0";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
}
