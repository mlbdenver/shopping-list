$(document).ready(function () {
    //place cursor in entry box
    $("#newitem").focus();
    //enter submitted item in input box
    function addnewitem() {
        var entry = $('#newitem').val();
        if(!entry ||!entry.trim()) {
            alert("You forgot to enter your item");
        }
        else {
            $("#grocerylist").append("<li class='item'>" + entry + "<button class='deletex'>X</button></li>");
        }
        $("#newitem").val(''); //clear new item entry box
    }
    //add submitted item to bottom of grocerylist when button is pushed
    $("#button").click(addnewitem);
    
    //make enter submit button
    $("#newitem").keyup(function(event) {
        if(event.keyCode == 13){
            $("#button").click();
        }
    });
    //show delete button when item is hovered over
    $("#grocerylist").on("mouseenter",".item", function(){
        $(this).find(".deletex").show();
    });
    $("#grocerylist").on("mouseleave",".item", function(){
        $(this).find(".deletex").hide();
    });

    //delete item when delete button is clicked
    $("#grocerylist").on("click",".deletex", function() {
        $(this).closest("li").remove();
    });

    //cross out or dim item when item is clicked
    $("#grocerylist").on("click", ".item", function() {
        $(this).toggleClass("dimmed");
    });

    });