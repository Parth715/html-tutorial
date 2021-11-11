//http://localhost:12345/user-detail.html?id=1
const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?"); // http....   split    id=1
    //console.log(parts);
    let kvpair = parts[1].split("=") //id      split    1
    //console.log(kvpair);
    //console.log(url);
    return +kvpair[1];
}
const displayBoolean = (aBoolean) => {
    return aBoolean ? "Y" : "N";
}