function showAlert(){
    alert(" Click Me Button clicked using HTML Events");
}

document.getElementById("clickButton").
addEventListener("click", showAlert2);

function showAlert2(){
    alert(" Click Me Button clicked using JS Events");
}


document.getElementById("box").addEventListener("click", () =>{
    document.getElementById("box").innerText = "The Box Was Clicked"
});

document.getElementById("mouseover").addEventListener("mouseover", () =>{
    document.getElementById("mouseover").innerText = " Mickey Mouse" 
});

document.getElementById("mouseup").addEventListener("mouseup", () =>{
    document.getElementById("mouseup").innerText = "Mouse destroy the city... " 
});

document.getElementById("mousedown").addEventListener("mousedown", () =>{
    document.getElementById("mousedown").innerText = "Mouse get killed... " 
});

document.getElementById("nameSubmit").addEventListener("click", () =>{
   console.log( document.getElementById("mousedown").value.trim() );
});

document.getElementById("fullNmae").addEventListener("keydown",(e) => {
    ( e.key === "Enter" &&)
})