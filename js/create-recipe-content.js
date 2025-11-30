function createContent(data, id){
    const listElement = document.getElementById(id)
    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}