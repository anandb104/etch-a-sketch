const container=document.querySelector("#container");
let div=[];
for(i=0;i<256;i++){
div[i]=document.createElement("div");
container.appendChild(div[i]);
}
for(let i=0;i<256;i++){
div[i].addEventListener("mouseover",()=>{div[i].classList.add("new");})
}

