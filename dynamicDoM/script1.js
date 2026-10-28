const ar = ["Goku",
    "luffy",
    "Asta",
    "Ash",
    "Naruto",
"Rias"];

const List = document.createElement("ol");

ar.forEach((item) => {
    const L = document.createElement("li");
    L.textContent = item;
    List.appendChild(l);


});
document.getElementById("myList").appendChild(List);

