function toggle() {
  var blur = document.querySelectorAll(".blur");
  blur.forEach((e) => {
    e.classList.toggle("active");
  });
  var all_popups = document.querySelectorAll(".popup");
  all_popups.forEach((e) => {
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

// var close_a = document.querySelectorAll(".close-a");
// close_a.forEach( e => {
//     e.addEventListener("click", (event) => {
//         console.log(event.target.parentNode.parentNode.parentNode.parentNode);
//         var parent_div = event.target.parentElement.parentElement.parentElement.parentNode;
//         parent_div.querySelector(".popup").classList.toggle("active");
//     });
// });
