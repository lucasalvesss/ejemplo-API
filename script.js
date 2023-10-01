document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("user-list");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = `ID: ${user.id}, Nombre: ${user.name}, Email: ${user.email}`;
                userList.appendChild(listItem);
            });
        })
        .catch((error) => console.error("Error al obtener datos:", error));
});