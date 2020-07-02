$(document).ready(function(){
    $("#FormCaller").click(function(){
        $("#FormModal").modal("toggle");
    });

    $("#FormClose").click(function(){
        $("#FormModal").modal("hide");
    });

    $("#FormCancel").click(function(){
        $("#FormModal").modal("hide");
    });

    $("#loginCaller").click(function(){
        $("#loginModal").modal("toggle");
    });

    $("#loginClose").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#loginCancel").click(function(){
        $("#loginModal").modal("hide");
    });

    $("#indexcarousel").carousel({interval:2000});

    $("#CarouselButton").click(function(){
        if($("#CarouselButton").children("span").hasClass("fa-pause")){
            $("#indexcarousel").carousel("pause"); 
            $("#CarouselButton").children("span").removeClass("fa-pause");
            $("#CarouselButton").children("span").addClass("fa-play");
        }else if($("#CarouselButton").children("span").hasClass("fa-play")){
            $("#indexcarousel").carousel("cycle"); 
            $("#CarouselButton").children("span").removeClass("fa-play");
            $("#CarouselButton").children("span").addClass("fa-pause");
        }
    })
    
});