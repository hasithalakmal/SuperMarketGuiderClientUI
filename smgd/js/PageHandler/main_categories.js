/**
 * Created by hasithagamage on 4/23/17.
 */
$(document).ready(function(){

    // only need to change 192.168.8.100 part only
    localStorage.setItem('smgdAPI', "http://192.168.8.100:8084/SMG/");
    localStorage.setItem('smgdUI', "http://192.168.8.100/smgd/");
    var smgdAPI = localStorage.getItem("smgdAPI");
    var smgdUI = localStorage.getItem("smgdUI");
    $("#logo-ref").attr("href",smgdUI);

    $.ajax({
        type: "GET",
        url: smgdAPI+"main-categories",
        dataType: "json",
        success: function (responce) {
            console.log(responce)
            for (i = 0; i < responce.result.length; i++) {
                $("#main-category-shell").append("<div class=\"myClass col-sm-4 col-md-4 col-lg-4\" onclick=\"myTestFunc("+responce.result[i].mainCategoryId+")\" id=\""+responce.result[i].mainCategoryId+"\" >\n" +
                    "                <div class=\"thumbnail\">\n" +
                    "                    <img src=\"images/Shop/"+responce.result[i].mainCategoryImageUrl+"\" alt=\"team 1\">\n" +
                    "                    <h3>"+responce.result[i].mainCategoryName+"</h3>\n" +
                    "                    <div class=\"mask\" >\n" +
                    "                        <h2>"+responce.result[i].mainCategoryName+"</h2>\n" +
                    "                        <p >"+responce.result[i].mainCategoryDescription+"</p>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>");
            }
        },
        error: function (e) {
            console.log("Error in call to "+smgdAPI+"/main-categories");
           // sweetAlert("Oops...", "Something went wrong!" + e, "error");
        }
    });


});

var myTestFunc = function (main_category_id) {
    //save the encoded main_category_id to web storage
    localStorage.setItem('main_category_id', main_category_id);
    console.log(main_category_id);
    var smgdUI = localStorage.getItem("smgdUI");
    document.location.href = smgdUI+"sub_categories.html";
}
