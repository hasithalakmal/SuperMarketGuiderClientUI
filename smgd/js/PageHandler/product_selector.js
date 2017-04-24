/**
 * Created by hasithagamage on 4/23/17.
 */

$(document).ready(function(){
    var sub_category_id = localStorage.getItem('sub_category_id');
    var smgdAPI = localStorage.getItem("smgdAPI");
    var smgdUI = localStorage.getItem("smgdUI");

    $("#logo-ref").attr("href",smgdUI);

    $.ajax({
        type: "GET",
        url: smgdAPI+"product-by-sub-category/"+sub_category_id,
        dataType: "json",
        success: function (responce) {
            console.log(responce);
            // load initial product descripter
            $("#product-details").append("<div class=\"span4 price-column\">\n" +
                "                    <h3>"+responce.result[0].productName+"</h3>\n" +
                "                    <ul class=\"list\">\n" +
                "                        <li class=\"price\">Rs."+responce.result[0].productPrice+"</li>\n" +
                "                        <li>"+responce.result[0].productDescription+"</li>\n" +
                "                        <li><strong>Product Availability : </strong>"+responce.result[0].productAvailability+"</li>\n" +
                "                        <li>"+responce.result[0].productLocation+"</li>\n" +
                "                    </ul>\n" +
                "                </div>");


            $("#product-location-map").append("<img src=\"images/Map/"+responce.result[0].productMapId.mapUrl+"\" alt=\"client logo 1\">");

            for (i = 0; i < responce.result.length; i++) {
                // $("#clint-slider").append(" <li>\n" +
                //     "                            <img src=\"images/Products/"+responce.result[i].productImageUrl+"\" alt=\"Sorry, Product image is not in the system.\">\n" +
                //     "                    </li>");

                $("#clint-slider").append("<li style=\"float: left; list-style: none; position: relative; width: 210px; margin-right: 25px;\">\n" +
                    "                               <img src=\"images/Products/"+responce.result[i].productImageUrl+"\" alt=\"client logo 1\" onclick=\"myTestFunc("+responce.result[i].productId+")\">\n" +
                    "                           </li>");
            }
        },
        error: function (e) {
            console.log("Error in call to "+smgdAPI+"/main-categories");
        }
    });



});

var myTestFunc = function (product_id) {
    var smgdAPI = localStorage.getItem("smgdAPI");
    $.ajax({
        type: "GET",
        url: smgdAPI+"products/"+product_id,
        dataType: "json",
        success: function (responce) {
            console.log(responce);
            // load initial product descripter
            $("#product-details").html("<div class=\"span4 price-column\">\n" +
                "                    <h3>"+responce.productName+"</h3>\n" +
                "                    <ul class=\"list\">\n" +
                "                        <li class=\"price\">Rs."+responce.productPrice+"</li>\n" +
                "                        <li>"+responce.productDescription+"</li>\n" +
                "                        <li><strong>Product Availability : </strong>"+responce.productAvailability+"</li>\n" +
                "                        <li>"+responce.productLocation+"</li>\n" +
                "                    </ul>\n" +
                "                </div>");
            $("#product-location-map").html("<img src=\"images/Map/"+responce.productMapId.mapUrl+"\" alt=\"client logo 1\">");
        },
        error: function (e) {
            console.log("Error in call to "+smgdAPI+"main-categories");
        }
    });


}
