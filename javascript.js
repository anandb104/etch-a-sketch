const container=document.querySelector("#container");
let div=[];
for(i=0;i<256;i++){
div[i]=document.createElement("div");
div[i].style.width="60px";
div[i].style.height="60px";
container.appendChild(div[i]);
}
for(let i=0;i<256;i++){
div[i].addEventListener("mouseover",()=>{div[i].classList.add("new");})
}
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
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
    for(let i=0;i<((Number(input))*(Number(input)));i++){
        div[i].addEventListener("mouseover",()=>{div[i].classList.add("new");})
        }
});


