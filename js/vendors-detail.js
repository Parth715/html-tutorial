let vendor = [
]
const remove = () => {
    console.log("Data was removed");
}

const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    //console.log(parts);
    let kvpair = parts[1].split("=")
    //console.log(kvpair);
    //console.log(url);
    return +kvpair[1];
}

const getUserByPk = () => {
    let id = getUrlId();
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `http://localhost:12345/api/vendors/${id}`, true);
    xhr.onload = () => {
        vendor = xhr.response;
        loaded();
    }
    xhr.send();
}

let loaded = () => {
    document.getElementById("xid").value = vendor.id;
    document.getElementById("xcode").value = vendor.code;
    document.getElementById("xname").value = vendor.name;
    document.getElementById("xaddress").value = vendor.address;
    document.getElementById("xcity").value = vendor.city;
    document.getElementById("xstate").value = vendor.state;
    document.getElementById("xzip").value = vendor.zip;
    document.getElementById("xphone").value = vendor.phone;
    document.getElementById("xemail").value = vendor.email;
}