let user = {}

const remove = () => {
    console.log("delete row")
}

const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:12345/api/users/${id}`, true);
    xhr.onload = () => {
        user = xhr.response;
        loaded();
    }
    xhr.send();
}

const loaded = () => {
    var url = getUrlId();
    document.getElementById("xid").value = user.id;
    document.getElementById("xusername").value = user.username;
    document.getElementById("xfirstname").value = user.firstname;
    document.getElementById("xlastname").value = user.lastname;
    document.getElementById("xphone").value = user.phone;
    document.getElementById("xemail").value = user.email;
    document.getElementById("xreviewer").value = user.isReviewer ? "Yes" : "No";
    document.getElementById("xadmin").value = user.isAdmin ? "Yes" : "No";
}