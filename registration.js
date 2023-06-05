let regData = JSON.parse(localStorage.getItem("resData")) || [];

let id = document.getElementById("uniqueID")
let name = document.getElementById("name")
let age = document.getElementById("age")
let desEmp = document.getElementById("emp")
let desStu = document.getElementById("student")
let priority = document.getElementById("priority")
let vaccine = document.getElementById("vaccine")

let form = document.querySelector("form")

form.addEventListener("submit", (ev)=>{
    ev.preventDefault()

    let obj = {
        id:id.value,
        name:name.value,
        age:age.value, 
        priority:priority.value,
        vaccine:vaccine.value
    }

     if(desEmp.checked && (desEmp.getAttribute("value")=="Employee")){
         obj["designation"] = "employee";
     }else if(desEmp.checked && (desEmp.getAttribute("value")=="student")){
         obj["designation"] = "Student";
    }else{
        obj["designation"] = "";
     }

    regData.push(obj)
    let ls = localStorage.setItem("resData", JSON.stringify(regData))
    console.log(ls)
})
