/**
 * Created by hasithagamage on 4/23/17.
 */
$(document).ready(function(){
    var main_category_id = localStorage.getItem('main_category_id');
    var smgdAPI = localStorage.getItem("smgdAPI");
    var smgdUI = localStorage.getItem("smgdUI");
    $("#logo-ref").attr("href",smgdUI);

    $.ajax({
        type: "GET",
        url: smgdAPI+"sub-categories-by-main-category/"+main_category_id,
        dataType: "json",
        success: function (responce) {
            console.log(responce)
            for (i = 0; i < responce.result.length; i++) {
                $("#main-category-shell").append("<div class=\"myClass col-sm-4 col-md-4 col-lg-4\" onclick=\"myTestFunc("+responce.result[i].subCategoryId+")\" id=\""+responce.result[i].subCategoryId+"\" >\n" +
                    "                <div class=\"thumbnail\">\n" +
                    "                    <img src=\"images/Shop/"+responce.result[i].subCategoryImageUrl+"\" alt=\"team 1\">\n" +
                    "                    <h3>"+responce.result[i].subCategoryName+"</h3>\n" +
                    "                    <div class=\"mask\" >\n" +
                    "                        <h2>"+responce.result[i].subCategoryName+"</h2>\n" +
                    "                        <p >"+responce.result[i].subCategoryDescription+"</p>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>");
            }
        },
        error: function (e) {
            console.log("Error in call to "+smgdAPI+"main-categories");
        }
    });


});

var myTestFunc = function (sub_category_id) {
    //save the encoded main_category_id to web storage
    localStorage.setItem('sub_category_id', sub_category_id);
    var smgdUI = localStorage.getItem("smgdUI");
    document.location.href = smgdUI+"product_selector.html";
}
