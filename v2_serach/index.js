
window.addEventListener("load", () => {

    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => {
    
      let filter = document.getElementById("the-filter"), 
          list = document.getElementById("the-list"); 
   
   
      for (let i of data) {
        let li = document.createElement("li");
        li.innerHTML = i;
        list.appendChild(li);
      } 
   
     
      list = document.querySelectorAll("#the-list li");
      filter.onkeyup = () => {
       
        let search = filter.value.toLowerCase();
   
        
        for (let i of list) {
          let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) == -1) { i.classList.add("hide"); }
          else { i.classList.remove("hide"); }
        }
      };
    });
  });