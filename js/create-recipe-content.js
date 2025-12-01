$.get("/templates/recipe-template.html", function(data){
    document.getElementById("content").innerHTML = data.toString();
});

function createContent(map){
    const parser = new DOMParser();

    document.title = "Hexmex Baking - " + map.get("title");
    document.getElementById("title").innerHTML = map.get("title");
    const italics = document.createElement('i');
    italics.textContent = map.get("flavor_text");
    document.getElementById("flavor-text").appendChild(italics);
    document.getElementById("image").src = map.get("img");

    const doc = parser.parseFromString(map.get("overview"), 'text/html');
    document.getElementById("overview").replaceWith(doc.querySelector("p"));
    map.get("ingredients").forEach(item => {
        if(item.charAt(0) == "-"){
            const listItem = document.createElement("li");
            listItem.textContent = item.slice(1);
            document.getElementById("ingredients").appendChild(listItem);
        }
        else if(item == ""){
            const brItem = document.createElement("br");
            document.getElementById("ingredients").appendChild(brItem);
        }
        else{
            const pItem = document.createElement("p");
            const u = document.createElement("u");
            pItem.appendChild(u);
            u.textContent = item;
            document.getElementById("ingredients").appendChild(pItem);
        }
    });
    map.get("directions").forEach(item => {
        if(item.charAt(0) == "-"){
            const listItem = document.createElement("li");
            listItem.textContent = item.slice(1);
            document.getElementById("directions").appendChild(listItem);
        }
        else if(item == ""){
            const brItem = document.createElement("br");
            document.getElementById("directions").appendChild(brItem);
        }
        else{
            const pItem = document.createElement("p");
            const u = document.createElement("u");
            pItem.appendChild(u);
            u.textContent = item;
            document.getElementById("directions").appendChild(pItem);
        }
    });
    map.get("notes").forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        document.getElementById("notes").appendChild(listItem);
    });
}