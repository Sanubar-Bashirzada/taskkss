const box = document.getElementById("box")
function addbox(textContent, linkContent) {
    const card1 = document.createElement("div");
    const write = document.createElement("div");
    const link = document.createElement("a");

    write.innerHTML = textContent;
    link.href = "id.html#" + linkContent;
    link.innerHTML = "a" + linkContent;

    card1.style.cssText=`
    width:300px;
    height:100px;
    border:1px solid blue;
    color: red;
    font-size:24px;
    `

    // write.innerHTML=element.name;
    // link.innerHTML=element.id

    card1.append(write, link);
    box.append(card1);
}

fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((card1) => {
            addbox(card1.name, card1.id)
        });
    })

