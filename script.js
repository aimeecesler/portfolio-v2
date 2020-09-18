var formDiv = $("#form-div");
var formSubmitBtn = $("#form-submit");

formSubmitBtn.on("click", function(event){
    event.preventDefault();
    formDiv.empty();
})
