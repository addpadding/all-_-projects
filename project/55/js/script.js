console.log("---script--- 71");

$(function () {
    // header
    $("header li a").on("click", function () {
        $(this) // a Home
            .addClass("active")
            .parent() // li
            .siblings() // li li li
            .find("a") // a a a
            .removeClass("active");
    });

    // window App
    var homeOffset = $(".home").offset().top;
    $(window).scroll(function () {
        var windowsSroll = $(this).scrollTop();

        if (windowsSroll >= homeOffset) {
            $(".home").css({
                backgroundColor: "#a73f19",
            });
        } else {
            $(".home").css({
                backgroundColor: "coral",
            });
        }

        if (windowsSroll > 200) {
            $("header").addClass("changeHeader");
        } else {
            $("header").removeClass("changeHeader");
        }
    });

    // Dynamic Taps
    // $("header a").click(function () {
    //     var myId = $(this).attr("id");
    //     $("body section").hide()
    //     $("." + myId).fadeIn()
    // })

    // Filter images == mixitup jquery plugin
    $(".tabs button").click(function () {
        var myClass = $(this).attr("class");

        if (myClass == "all") {
            $(".imagea img").fadeIn();
        } else {
            $(".imagea img").hide();
            $(".imagea ." + myClass).fadeIn();
        }
    });

    // smoth Scroll
    var headerHeight = $("header").height()
    $("header li a").click(function () {
        var id = $(this).attr("id");
        $("body,html").animate({
            scrollTop: $("." + id).offset().top - headerHeight
        });
    });


    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scrollTop").show()
        } else {
            $(".scrollTop").hide()
        }
    })

    $(".scrollTop").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    })

    // calculate
    $("textarea").keyup(function (e) {
        console.log(e.target.value.length)

        if (e.target.value.length >= 100) {
            e.target.value = e.target.value.substr(0, 100)
        }
    })

});
