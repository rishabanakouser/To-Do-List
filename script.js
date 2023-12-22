const textBox=document.getElementById("text-box");
const listContainer =document.getElementById("list-container");


function addTask(){
   if(textBox.value.length == 0){
      alert("Please enter something!");
   } 
   else{
      let li = document.createElement("li");
      li.innerHTML=textBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML="<img src='https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png'>";
      li.appendChild(span);
      saveData();
   }
   textBox.value="";
}
listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();

   }
   else if(e.target.tagName === "IMG"){
      e.target.closest("span").parentElement.remove();
      saveData();

   }
   
},false);

function saveData(){
   localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
   listContainer.innerHTML=localStorage.getItem("data");
}
showTask();