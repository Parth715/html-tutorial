class Person{
    name;
    color;   //properties
    number;

    constructor(name, color, number){
        this.name = name;
        this.color = color;
        this.number = number;
    }

    toTableRow(){   //method
        let tr = "<tr>";
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.color}</td>`;
        tr += `<td>${this.number}</td>`;
        tr += "</tr>";
        return tr;
    }
}

let dbDataClass = [
    new Person("Alice", "Blue", 7),
    new Person("Fred", "Green", 8),
    new Person("Chance", "Red", 9)
]

/*let dbData = [
    {name: "Abe", color: "Black", number: 13},
    {name: "Betty", color: "Red", number: 8},
    {name: "Chris", color: "Orange", number: 42},
    {name: "Parth", color: "Purple", number: 2}
]*/

const loaded = () => {
    let tbody = document.getElementById("tbody");
    for(let row of dbDataClass){ //row = instance of person
        let tr = row.toTableRow();  //method on the person to create the row and populate the table
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda + operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerHTML = "<b>Addition</b>";
    document.getElementById("lbl").style.color = "black";
    document.getElementById("ans").style.color = "black";
}
const sub = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda - operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerHTML = "<b>Subtraction</b>";
    document.getElementById("lbl").style.color = "red";
    document.getElementById("ans").style.color = "red";
}
const multiply = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda * operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerHTML = "<b>Multiplication</b>";
    document.getElementById("lbl").style.color = "green";
    document.getElementById("ans").style.color = "green";
}
const divide = () => {
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda / operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerHTML = "<b>Division</b>";
    document.getElementById("lbl").style.color = "blue";
    document.getElementById("ans").style.color = "blue";
}