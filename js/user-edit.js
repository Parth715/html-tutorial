let user = {
    Id:1,
    Username:"Parth715",
    Password:"Srjtzyi3",
    Firstname:"Parth",
    Lastname:"Patel",
    Phone:4437936449,
    Email:"parth2002715@gmail.com",
    IsReviewer:true ,
    IsAdmin:true
}
const loaded = () => {
        document.getElementById("xid").value = user.Id;
        document.getElementById("xusername").value = user.Username;
        document.getElementById("xpassword").value = user.Password;
        document.getElementById("xpassword2").value = user.Password;
        document.getElementById("xfirstname").value = user.Firstname;
        document.getElementById("xlastname").value = user.Lastname;
        document.getElementById("xphone").value = user.Phone;
        document.getElementById("xemail").value = user.Email;
        document.getElementById("xreviewer").checked = user.IsReviewer ? "Yes" : "No";
        document.getElementById("xadmin").checked = user.IsAdmin ? "Yes" : "No";
    }

const chkPassword = () =>{
    let password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(password !== password2){
        alert("Passwords dont match");
    }
}

const save = () => {
    let user = {};
    user.id = +document.getElementById("xid").value;
    user.username = document.getElementById("xusername").value;
    user.password = document.getElementById("xpassword").value;
    let password2 = document.getElementById("xpassword2").value;
    if(user.password != password2){
        return;
    }
    user.firstname = document.getElementById("xfirstname").value;
    user.lastname = document.getElementById("xlastname").value;
    user.phone = document.getElementById("xphone").value;
    user.email = document.getElementById("xemail").value;
    user.isReviewer = document.getElementById("xreviewer").checked;
    user.isAdmin = document.getElementById("xadmin").checked;
    console.log(user);

    window.location.href = "users.html";
}