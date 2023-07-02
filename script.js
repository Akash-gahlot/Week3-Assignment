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

home();
