function get(id) {
  return document.getElementById(id);
}

// get the JSON file from local using "fetch"
let btn_local = get("click-here");
btn_local.addEventListener("click", () => {
  fetch("academic.json")
    .then((response) => {
      console.log("response.headers: " + response.headers); 
      console.log("response.status: " + response.status); // print out status code
      console.log("response.statusText: " + response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return renderHTMLlocal(data, get("fetch-locally"));
    })
    .then(() => (get("click-here").style.display = "none"))
    .catch((e) => console.log("Oops, error"));
});

// get the JSON file externally using AJAX
let btn = get("fetch-button");
btn.addEventListener("click", () => {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "get",
    "https://learnwebcode.github.io/json-example/animals-1.json"
  );
  ourRequest.onload = () => {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    renderHTMLext(ourData, get("fetch-externally"));
  };
  ourRequest.send();
  btn.style.display = "none";
});

function renderHTMLlocal(data, HTMLtag) {
  let htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += `<p> School name: ${data[i].schoolName} </p>
    <p> Program/Major: ${data[i].programMajor} </p>
    <p> Degree type: ${data[i].degreeType} </p>
    <p> Year conferred: ${data[i].yearConferred} </p>
    <br />`;
  }
  HTMLtag.insertAdjacentHTML("beforeend", htmlString);
}

function renderHTMLext(data, HTMLtag) {
  let htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += `<p> ${data[i].name} is a ${data[i].species} </p>`;
  }
  HTMLtag.insertAdjacentHTML("beforeend", htmlString);
}
