document.addEventListener("click", () => {
  let url = "https://learnwebcode.github.io/json-example/animals-1.json";
  fetch(url)
    .then((response) => {
      console.log("response.headers: " + response.headers);
      console.log("response.status: " + response.status);
      console.log("response.statusText: " + response.statusText);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((e) => console.log("Oops, error"));
});

let btn = document.getElementById("fetch-button");
let demo = document.getElementById("demo");

btn.addEventListener("click", () => {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "get",
    "https://learnwebcode.github.io/json-example/animals-1.json"
  );

  ourRequest.onload = () => {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };

  ourRequest.send();
});

function renderHTML(data) {
  let htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }
  demo.insertAdjacentHTML("beforeend", htmlString);
}
