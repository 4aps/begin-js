
const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

changeBtn.addEventListener("click", () => {
    title.innerText = "Text Changed!";
    title.style.color = "red";
    title.style.fontSize = "30px";
});

addBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerText = "This is a new paragraph.";
    p.style.color = "blue";
    container.appendChild(p);
});
