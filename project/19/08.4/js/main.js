
//* button
document.getElementById("submit_btn").addEventListener("click", function () {
    //*

    //* input
    var myStr = document.getElementById("input").value
    console.log(myStr);

    //*
    var Upper = myStr.toUpperCase();
    // console.log(Upper);
    
    //*
    var replace  = Upper.replace("O" , "YYYYYYYY");
    // console.log(replace);
    
    //*
    var reverse  = myStr.split("").reverse().join("")
    // console.log(reverse);
    
    //*
    document.getElementById("result").innerHTML = ` ${Upper} === ${replace} === ${reverse}=== `

})

