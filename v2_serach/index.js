// window.addEventListener("load", () => {
//     //html elements
//     let filter = document.getElementById("the-filter"); //search box
//     let list = document.querySelectorAll("#the-list li");
    
//     // attach key up to search box
//     filter.onkeyup = () => {
//         //get current search term
//         let search = filter.value.toLowerCase();
        
//         // loop through list items - only show thoese that match search
//         for (let i of list) {
//             let item = i.innerHTML.toLocaleLowerCase();
//             if (item.indexOf(search) == -1) { i.classList.add("hide");}
//             else { i.classList.remove("hide")}
//         }
//     };
// });

window.addEventListener("load", () => {
    // (A) GET DATA FROM SERVER VIA AJAX FETCH
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(data => {
      // (B) GET HTML ELEMENTS
      let filter = document.getElementById("the-filter"), // search box
          list = document.getElementById("the-list"); // list item wrapper
   
      // (C) DRAW HTML LIST
      for (let i of data) {
        let li = document.createElement("li");
        li.innerHTML = i;
        list.appendChild(li);
      }
   
      // (D) SAME AS BEFORE
      list = document.querySelectorAll("#the-list li");
      filter.onkeyup = () => {
        // (D1) GET CURRENT SEARCH TERM
        let search = filter.value.toLowerCase();
   
        // (D2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
        for (let i of list) {
          let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) == -1) { i.classList.add("hide"); }
          else { i.classList.remove("hide"); }
        }
      };
    });
  });