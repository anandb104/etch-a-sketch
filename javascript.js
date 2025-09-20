const container=document.querySelector("#container");
let div=[];
for(i=0;i<256;i++){
div[i]=document.createElement("div");
div[i].style.width="60px";
div[i].style.height="60px";
container.appendChild(div[i]);

}
const btn1=document.querySelector("#row-setter");
const btn2=document.querySelector("#rgb-setter");
const btn3=document.querySelector("#black-setter");
// const btn4=document.querySelectorAll(".rgb-color");
const btn6=document.querySelector("#random-setter");
// const colorPicker=document.getElementById("myColorPicker");

for(let i=0;i<256;i++){
div[i].onmouseover = () => div[i].classList.add("black-color");
}


btn1.addEventListener("click",()=>{
    let input=prompt("Enter the number of rows",64)
    // for(i=0;i<256;i++){
    //     container.removeChild(div[i]);
    //     }
    let divi=[];
    divi=container.querySelectorAll("div");
    const length=divi.length;
    for(i=0;i<length;i++){
    container.removeChild(div[i]);
    }
    for(let i=0;i<((Number(input))*(Number(input)));i++){
        div[i]=document.createElement("div");
        div[i].style.width=`${960/Number(input)}px`;
        div[i].style.height=`${960/Number(input)}px`;
        container.appendChild(div[i]);
    }
    for(let i=0;i<length;i++){
            div[i].onmouseover=(()=>{div[i].classList.add("black-color");})
        }
    });
//     btn2.addEventListener("click",()=>{
//         let divis=[];
//         divis=container.querySelectorAll("div");
//         const length=divis.length;
//         for(let i=0;i<length;i++){
//         div[i].classList.remove("black-color");
//     }
//     divis.forEach(d => {
//         d.onmouseover = () => d.classList.add("rgb-color"); // replaces old handler
//       });
//     });
//     // btn3.addEventListener("click",()=>{
//     //     let divis=[];
//     //     divis=container.querySelectorAll("div");
//     //     const length=divis.length;
//     //     for(let i=0;i<length;i++){
//     //     div[i].classList.remove("rgb-color");
//     // }
//     // for(let i=0;i<length;i++){
//     //     div[i].addEventListener("mouseover",()=>{div[i].classList.add("black-color");})
//     // }
//     // });
    
// });
// btn2.addEventListener("click",()=>{
//         let divis=[];
//         divis=container.querySelectorAll("div");
//         const length=divis.length;
//         for(let i=0;i<length;i++){
//         div[i].classList.remove("black-color");
//     }
//     divis.forEach(d => {
//         d.onmouseover = () => d.classList.add("black-color"); // replaces old handler
//       });
//     });

let mode = null;
let j=1;
let k=1;
let p=1;
let chosenColor = "#64007f"; // default purple
const colorPicker = document.getElementById("myColorPicker");
colorPicker.addEventListener("change", function () {
  chosenColor = colorPicker.value; // update variable when user picks a new color
});
container.addEventListener("mouseover", (e) => {

  if (e.target.tagName === "DIV") {
    if (mode === "rgb") {
      
        e.target.classList.remove("black-color");
        e.target.style.backgroundColor = chosenColor;
      e.target.style.opacity=`${k/10}`; 
      k++;
      if(k==11)k=1;
    } else if (mode === "black") {

        e.target.classList.remove("rgb-color");
      e.target.classList.add("black-color");
      e.target.style.opacity=`${p/10}`; 
      p++;
      if(p==11)p=1; 
    }
    else if (mode === "random") {
        let x=Math.random();
        let y=Math.random();
        let z=Math.random();
            e.target.style.backgroundColor=`rgb(${x*100},${y*100},${z*100})`;
            e.target.classList.remove("black-color");
            e.target.classList.remove("rgb-color");
            e.target.style.opacity=`${j/10}`; 
            j++;
            if(j==11)j=1;
        }
}
});


btn2.addEventListener("click", () => mode = "rgb");
btn3.addEventListener("click", () => mode = "black");
btn6.addEventListener("click", () => mode = "random");



// colorPicker.addEventListener("change", function () {
//   var chosenColor = this.value;

//   // select ALL rgb-color squares at the moment of change
//   const rgbSquares = document.querySelectorAll(".rgb-color");

//   rgbSquares.forEach(square => {
//     square.style.backgroundColor = chosenColor;
//   });
// });
