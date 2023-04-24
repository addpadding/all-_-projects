
//*
var i = 0 ;

//*
var slideImg_22 = ["img/02.jpg", "img/03.jpeg", "img/04.jpg"]

//*
var slideshow_22 = function () { 
    //*

    //*
    document.slideshow.src = slideImg_22[i]

    //*
    if (i < slideImg_22.length -1) {
        //*

        //*
        i++

    } else {
        //*

        i = 0 ;
    }

    //*
    setTimeout( "slideshow_22()" , 2000);
}
slideshow_22()