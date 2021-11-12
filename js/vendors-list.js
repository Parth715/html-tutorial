let vendors = [
    {id:1,code:"MICRO",name:"Micro Center",address:"123 Main Street",city:"Milford",state:"OH",zip:"45150",phone:null,email:null},
    {id:2,code:"AAPL",name:"Apple",address:"987 Main Street",city:"Loveland",state:"OH",zip:"45140",phone:null,email:null},
    {id:3,code:"DEPOT",name:"Home Depot",address:"456 Main Street",city:"Kenwood",state:"OH",zip:"21236",phone:null,email:null}]

    const loaded = () => {
    let tbody = document.getElementById("data");
    for(let i of vendors){
        let tr = "<tr>";
        tr += `<td>${i.id}</td>`;
        tr += `<td>${i.code}</td>`;
        tr += `<td>${i.name}</td>`;
        tr += `<td>${i.address}</td>`;
        tr += `<td>${i.city}</td>`;
        tr += `<td>${i.state}</td>`;
        tr += `<td>${i.zip}</td>`;
        tr += `<td>${i.phone}</td>`;
        tr += `<td>${i.email}</td>`;
        tr += `<td><a href = "vendors-detail.html?id=${i.id}">Details</a> | <a href = "vendors-edit.html?id=${i.id}">Edit</a></td>`
        tr +="</tr>"
        tbody.innerHTML +=tr;
        
    }
}