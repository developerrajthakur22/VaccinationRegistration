let data = JSON.parse(localStorage.getItem("resData"))
console.log(data)

let tbody = document.querySelector("tbody")
data.forEach((element,index) => {
    
    let row = document.createElement("tr")
    
    let id = document.createElement("td")
    id.textContent = element.id

    let name = document.createElement("td")
    name.textContent = element.name;

    let age = document.createElement("td")
    age.textContent = element.age;

    let des = document.createElement("td")
    des.textContent = element.designation;

    let priority = document.createElement("td")
    priority.textContent = element.priority;

    let vaccine = document.createElement("td")
    vaccine.textContent = element.vaccine;

    let dlt = document.createElement("td")
    dlt.textContent = "Delete"
    dlt.style.color ="white"
    dlt.style.backgroundColor ="#ED0331"

    dlt.addEventListener("click", ()=>{
        data.splice(index,1)
        row.remove()
    })

    row.append(id,name,age,des,priority,vaccine,dlt)

    tbody.append(row)
});