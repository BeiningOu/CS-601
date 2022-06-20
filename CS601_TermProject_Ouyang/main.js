function get(id) {
  return document.getElementById(id);
}

let backToTop = get("back-top");

backToTop.onclick = function () {
  console.log("back");
  let timer = setInterval(function () {
    if (document.documentElement.scrollTop != 0) {
      document.documentElement.scrollTop -= 50;
    } else {
      clearInterval(timer); // stop the setInterval..
    }
  }, 10);
};

let menuLabel = get("menu-label");
let navBar = get("nav-bar");
let readMore = get("read-more-main");
let readMoreHide = get("read-more-hide");

navBar.style.display = "none";
readMoreHide.style.display = "none";

menuLabel.onclick = function () {
  if (navBar.style.display == "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};

readMore.onclick = function () {
  readMoreHide.style.display = "block";
};
