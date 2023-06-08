let leftbox=document.getElementById("leftbox")
let rightbox=document.getElementById("rightbox")
let lists=document.getElementsByClassName("item")
let btn=document.getElementById("btn");

btn.addEventListener("click",function(e){
    Array.from(lists).forEach((Element)=>{ 
        let selected=Element;
        leftbox.appendChild(selected)
        selected.style.backgroundColor="blue";
    })
})

Array.from(lists).forEach((Element)=>{
    document.addEventListener("dragstart", function(e){
        let selected=e.target;
        
        rightbox.addEventListener("dragover",function(e){
                e.preventDefault();
        });
        rightbox.addEventListener("drop",function(e){
                rightbox.appendChild(selected)
                selected.style.backgroundColor="fuchsia";
                selected=null;  
        });
        leftbox.addEventListener("dragover",function(e){
                e.preventDefault();
        });
        leftbox.addEventListener("drop",function(e){
                leftbox.appendChild(selected)
                selected.style.backgroundColor="blue";
                selected=null;  
        });
       

    })
    // console.log(e.target.innerHTML)
});