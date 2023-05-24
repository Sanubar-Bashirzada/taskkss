const cardsjs=document.getElementById("cardsjs");

function ratings() {
    const stars = document.createElement('div');
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('img');
      star.src = './assets/imgs/teststar.png';
  
      // stars.style.position = "absolute"
      // stars.style.top = "200px"
      stars.appendChild(star);
    }
  
    return stars;
  }
fetch("https://restcountries.com/v3.1/all")
.then((resp)=>resp.json())
.then((data)=> {
    for (let i = 0; i < 3; i++) {
        let card1= document.createElement('div');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img =  document.createElement('img');
        let icondiv=document.createElement('div');
        img.src="https://flagcdn.com/w320/ch.png";

        img.classList.add(`jsimg`);
        icondiv.classList.add(`icondivjs`);

        p1.classList.add(`writejs`);
        card1.style.cssText=`
        position:relative;`
   
        card1.appendChild(p1);
        card1.appendChild(p2);
        card1.appendChild(img);
        card1.appendChild(icondiv);
        icondiv.appendChild(p2);
        icondiv.appendChild(ratings());
        
        cardsjs.appendChild(card1);

        p1.innerHTML =data[i].name.common;
        p2.innerHTML = data[i].capital;
        
    }
//     data.forEach((element) => {

//         let card1= document.createElement('div');
//         let p1 = document.createElement('p');
//         let p2 = document.createElement('p');
//         let img =  document.createElement('img');
//         img.src="https://flagcdn.com/w320/ch.png";
   

      
//         card1.appendChild(p1);
//         card1.appendChild(p2);
//         card1.appendChild(img);
//         cardsjs.appendChild(card1);



//         p1.innerHTML =element.name.common;
//         p2.innerHTML = element.capital;
// })
})

// const reviews=document.getElementById("reviews");
// const cardImg=document.getElementById("cardImg");

// fetch("https://restcountries.com/v3.1/all")
// .then((resp)=>resp.json())
// .then((data)=> {
//     data.forEach((element) => {

//         wines.innerHTML =element.name.common;
//         reviews.innerHTML = element.capital;
// })
// })

const barId=document.getElementById("barId");

barId.addEventListener("click" , function(){
  
})