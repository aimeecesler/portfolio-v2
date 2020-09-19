var formDiv = $("#form-div");
var formSubmitBtn = $("#form-submit");

formSubmitBtn.on("click", function(event){
    event.preventDefault();
    var name = $("#name").val();
    console.log(name);
    $("form").addClass("hidden");

    var row1Div = $("<div>").addClass("row");
    var row1Col = $("<div>").addClass("col-sm-12");
    var thankYouH1 = $("<h1>").text("Thank you " + name + "!");

    row1Col.append(thankYouH1);
    row1Div.append(row1Col);
    var row2Div = $("<div>").addClass("row");
    var row2Col = $("<div>").addClass("col-sm-12");
    var contactH2 = $("<h2>").text("Aimee will be in contact soon.");
    formDiv.addClass("text-center");
    row2Col.append(contactH2);
    row2Div.append(row2Col);
    formDiv.prepend(row1Div, row2Div);
})
