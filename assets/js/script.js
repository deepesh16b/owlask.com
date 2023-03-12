function toggle() {
  var blur = document.querySelectorAll(".blur");
  blur.forEach((e) => {
    e.classList.toggle("active");
  });

  var all_popups = document.querySelectorAll(".popup");
  all_popups.forEach((e) => {
    e.classList.remove("active");
  });

  var all_popups_recents = document.querySelectorAll(".popup-recents");
  all_popups_recents.forEach((e) => {
    e.classList.remove("active");
  });
}

var heading_a = document.querySelectorAll(".heading-a");
heading_a.forEach((e) => {
  e.addEventListener("click", (event) => {
    console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    var parent_div =
      event.target.parentElement.parentElement.parentElement.parentNode;
    parent_div.querySelector(".popup").classList.toggle("active");
  });
});

var recent_heading_a = document.querySelectorAll(".recent-heading-a");
recent_heading_a.forEach((e) => {
  e.addEventListener("click", (event) => {
    console.log(event.target.parentNode.parentNode);
    var parent_div =
      event.target.parentElement.parentElement;
    parent_div.querySelector(".popup-recents").classList.toggle("active");
  });
});
