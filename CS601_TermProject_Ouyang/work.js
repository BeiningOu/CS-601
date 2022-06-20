function get(id) {
  return document.getElementById(id);
}

let menuLabel = get("menu-label");
let navBar = get("nav-bar");

navBar.style.display = "none";

menuLabel.onclick = function () {
  if (navBar.style.display == "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
};

let btn_work = get("work-button");
let btn_project = get("project-button");

btn_work.addEventListener("click", () => {
  fetch("work.json")
    .then((response) => {
      console.log("response.headers: " + response.headers);
      console.log("response.status: " + response.status); // print out status code
      console.log("response.statusText: " + response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return renderHTMLWork(data, get("work-experience"));
    })
    .then(() => (btn_work.style.display = "none"))
    .catch((e) => console.log("Oops, error"));
});




btn_project.addEventListener("click", () => {
    fetch("project.json")
      .then((response) => {
        console.log("response.headers: " + response.headers);
        console.log("response.status: " + response.status); // print out status code
        console.log("response.statusText: " + response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return renderHTMLProject(data, get("projects"));
      })
      .then(() => (btn_project.style.display = "none"))
      .catch((e) => console.log("Oops, error"));
  });


function renderHTMLWork(data, HTMLtag) {
  let htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += `<p> ${data[i].companyInfo} </p> <ul>`;
    for (j = 0; j < data[i].jobContent.length; j++) {
      htmlString += `<li> ${data[i].jobContent[j]}</li>`;
    }
    htmlString += `</ul> <br/> `;
  }
  HTMLtag.insertAdjacentHTML("beforeend", htmlString);
}


function renderHTMLProject(data, HTMLtag) {
    let htmlString = "";
    for (i = 0; i < data.length; i++) {
      htmlString += `<p> ${data[i].projectName} </p> <ul>`;
      for (j = 0; j < data[i].projectContent.length; j++) {
        htmlString += `<li> ${data[i].projectContent[j]}</li>`;
      }
      htmlString += `</ul> <br/> `;
    }
    HTMLtag.insertAdjacentHTML("beforeend", htmlString);
  }
  