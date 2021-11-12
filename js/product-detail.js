let product = {}

const ready = () => {
    $("input").css("border-radius", "7px");
    $("#remove").on("click", () =>{
        console.log("Product has been removed")
        //remove
    });
    getProductByPk();
}

const getUrlId = () => {
    let url = window.location.href;
    let parts = url.split("?");
    let id = parts[1].split("=");
    return +id[1];

}
const getProductByPk = () => {
    prod = getUrlId();
    $.getJSON(`http://localhost:12345/api/products/${prod}`)
        .done(
            res => {display(res);
            })
        .fail(
            err => console.error(err)
        );
}

const display = (product) => {
    $("#xid").val(product.id);
    $("#xpartnbr").val(product.partNbr);
    $("#xname").val(product.name);
    $("#xprice").val(product.price);
    $("#xunit").val(product.unit);
    $("#xvendor").val(product.vendor.name);
}
