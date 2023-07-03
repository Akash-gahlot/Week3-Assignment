function callback(resp) {
  resp.json().then((data) => {
    console.log(data);
    const container = document.getElementById("container");
    data.forEach((element) => {
      const titleElement = document.createElement("h1");
      const descriptionElement = document.createElement("p");

      titleElement.innerHTML = element.title;
      descriptionElement.innerHTML = element.description;

      container.appendChild(titleElement);
      container.appendChild(descriptionElement);
    });
  });
}
function home() {
  fetch("http://localhost:3000/todo", {
    method: "GET",
  }).then(callback);
}

function callback2(resp) {
  if (resp.ok) {
    resp.text().then((data) => {
      console.log(data);
    });
  } else {
    console.log("Error : " + resp.status);
  }
}
document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const url = "http://localhost:3000/addtodo";
  const form = e.target;
  const formdata = new FormData(form);
  const data = Object.fromEntries(formdata.entries());
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(callback2);
});
//home();
