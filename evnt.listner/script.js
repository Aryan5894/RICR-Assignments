const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAssignmentNotification");
const stopAssBtn = document.getElementById("showAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attara = document.getElementById("AttendenceNotification");

function ShowAssignment(){
    assPara.textContent = "your assignment deadline is approaching!";
}

showAssBtn.addEventListener("click", ShowAssignment);

showAssBtn.addEventListener("click",() =>{
    attPara.textContent = "please check your attendance status!";
});
   
stopAssBtn.addEventListener("click",() =>{
     show
})




