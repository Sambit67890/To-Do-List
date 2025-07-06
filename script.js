document.getElementById("add-btn").addEventListener("click", function() {
	let f_new=document.createElement("li");
  document.getElementById("task-list").appendChild(f_new);
  f_new.textContent=document.getElementById("task-input").value;
  document.getElementById("task-input").value="";
  deleteTask(f_new);
});

function deleteTask(f_new){
  let f_btn=document.createElement("button");
  f_btn.textContent="delete";
  f_new.appendChild(f_btn);
  f_btn.onclick=function(){
    f_new.remove();
  }
}
