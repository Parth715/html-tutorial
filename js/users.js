
let userdata = []

const getAllUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "http://localhost:12345/api/users", true);
    xhr.onload = (res) => {
        userdata = xhr.response;
        loaded(userdata);
    }
    xhr.send();
}

    const loaded = (userdata) => {
    let tbody = document.getElementById("properties");
    for(let i of userdata){
        let tr = "<tr>";
        tr += `<td>${i.id}</td>`;
        tr += `<td>${i.username}</td>`;
        tr += `<td>${i.firstname} ${i.lastname}</td>`;
        tr += `<td>${i.phone}</td>`;
        tr += `<td>${i.email}</td>`;
        tr += `<td>${displayBoolean(i.isReviewer)}</td>`;
        tr += `<td>${displayBoolean(i.isAdmin)}</td>`;
        tr += `<td><a href="user-detail.html?id=${i.id}"> Details</a> | <a href="user-edit.html?id=${i.id}"> Edit</a></td>`
        tbody.innerHTML += tr;
    }
}