
$().ready(() =>{
    console.log("jQuery is ready!");
    $("input, select").css("border-radius", "7px");
    $("#save").on("click", () => {
        save();
    });
    getvendors();
});

const getvendors = () => {
    $.getJSON("http://localhost:12345/api/vendors")
    .done(res => {
        console.log(res);
        loadVendors(res);
    })
    .fail(err => {
        console.erros(err);
    });
}

const loadVendors = (vendors) => {
    let select = $("#xvendor");
    select.empty();
    for(let v of vendors){
        select.append($(`<option value="${v.id}">${v.name}</option>`));
    }
}



const save = () => {
    let product = {
        id: 0,
        partNbr: $("#xpartNbr").val(),
        name: $("#xname").val(),
        price: +$("#xprice").val(),
        unit: $("#xunit").val(),
        photopath: $("#xphotopath").val(),
        vendorId: +$("select").val(),
    }
    console.log("Product: ", product)
    create(product);
}

const create = (product) => {
    $.ajax({
        method: "POST",
        url: "http://localhost:12345/api/products",
        data: JSON.stringify(product),
        contentType: "application/json"
    })
        .done(res => {
            console.log("Created", res);
            //window.location.href="product-list.html";
        })
        .fail(err => {
            console.error(err);
        });
}