// #05 == 22
const button = document.querySelector("button")

// #02
const container = document.getElementById("container")

// #05 == 11
const input = document.querySelector("input")

// #05
const form = document.querySelector("form")






/*
=====================
submit =
بنعمل ارسال لل
form بتاعنا
submit لذلك يفضل ان نستخدم 
form لما نستدعي  
*/
form.addEventListener("submit", (eo) => {

    // امنع الافتراضي بتاعك = انه يعمل ريفرش
    eo.preventDefault()

/*
=====================
    نخزن الاكواد في
    html
    بداخل فاربيل الي هو
    task

*/
    const task = `

    <div class="task">

        <span class="icon-star icon"> </span>

        <!-- عبارة عن حاوية = ياخذ القيمة الي هيا الفاليو =  ويطبعها داخل البرغراف -->
        <p class="task__text"> ${input.value} </p>

        <div>
            <span class="icon-trash icon"> </span>
            <span class="icon-angry2 icon"> </span>
        </div>
    </div>

    `

    // عاوز الكونتير = احط بداخله = علي حسن
    // container.innerText += "علي"

    // عشان تعرف هاتحط الكلام ده فين بالظبط في = اتش تي ام ال
    // container.append (task)

/*
    =====================
    ضافه على انه برغراف
    container بداخل  
    task هاتحط  
    */
    container.innerHTML += task

    /*
    =====================
    input = عايزين نفضي الكلام الي فيه
    submit بعد لما اعمل 
    " " = يعني استبدال بالمساحة الفاضية
    */
    input.value = " "
})


/*
=====================
click كل الكلام ده بيحصل لما اعمل 
container في المنطقة الي اسمها 
↘↘↘↘ */
container.addEventListener("click", (eo) => {
/*
    =====================
    icon-trash عاوز لما اضغط على 
    task يحذف كل هذا 
    */
    if (eo.target.className == "icon-trash icon") {
    /*
        =====================
        هذا الكلام معناه = العنصر الذي يتم عليه الحدث
        بتاعه parentElement هاتروح لل
        div الي هو عنصر الاب الي هو
        taskالي هو parentElement هاقوله كمان  
        ↘↘↘↘ */
        eo.target.parentElement.parentElement.remove()
    
    /*
    =====================
    angry2 ايه الي هايحصل لو انا ضغطت على
    انه يختفي
    ↘↘↘↘ */
    } else if (eo.target.className == "icon-angry2 icon") {
    /*
        =====================
        اضافة عنصر
        display: none
        ↘↘↘↘ */
        eo.target.classList.add("dn")

        const hart = `<span class="icon-heart">   </span>`

        /*
        =====================
        eo.target العنصر الذي يتم عليه الحدث
        parentElement هاتروح للعنصر الاب بتاعة 
        parentElement.parentElement هاتروح للعصر الاب الاب بتاعة 
        task الي هو ده
        getElementsByClassName وبعدين هاتجيب العنصر عن طريق  
        ("task__text")[0] الي اسمه كذا
        classList.add("finish") ثم هاتضيف له كلاس اسمه  
        ↘↘↘↘ */
        eo.target.parentElement.parentElement
        .getElementsByClassName("task__text")[0]
        .classList.add("finish")

    /*
        =====================
        هاتروح للعنصر الاب
        htmlوتحط بداخله كود
        لكن عدل الاكواد في الاخر خالص
        ↘↘↘↘ */
        eo.target.parentElement.innerHTML += hart

    /*
    =====================
    العنصر الذي سينم عليه الحدث
    heart الي الكلاس نيم بتاعه هو  
    ↘↘↘↘ */
    } else if (eo.target.className == "icon-heart") {

    /*
        =====================
        ## ملاحظة ###
        ## الكود ده طويل ##
        finish يحذف
        ↘↘↘↘ */
        eo.target.parentElement.parentElement
        .getElementsByClassName("task__text")[0]
        .classList.remove("finish")

    /*
        =====================
        لما اضغط على القلب للمره الثانية
        يتم حذفة
        dn هاتضيف له اسمه 
        display: none الي هوا 
        ↘↘↘↘ */
        eo.target.classList.add("dn")

    /*
        =====================
        تم التخزين 
        addAngry بداخل الفاربيل الي اسمه
        ↘↘↘↘ */
        const addAngry = ` <span class="icon-angry2 icon"> </span> `

    /*
        =====================
        العنصر الذي يتم عليه الحدث
        Div روح للبيرنت المنت بتاعه الي هو 
        innerHTML ثم هاحطلة هذا الكود
        addAngry الي هوا 
        ↘↘↘↘ */
        eo.target.parentElement.innerHTML += addAngry

    /*
        =====================
        في حالة اني هاضغط على هذا العنصر يعمل مجموعة من الاكواد
        وعند تحقيق هذا الشرط يتم تنفيذ مجموعة من الاكواد

        icon-star الشرط في حالة اني ضغطت  على الكلاس نيم بتاعة 
        ↘↘↘↘ */
    } else if (eo.target.className == "icon-star icon") {

    /*
        =====================
        add("orange") لما اضغط على 
        color: orange يخلي 
        ↘↘↘↘ */
        eo.target.classList.add("orange")

    /*
        =====================
        container هانحط في اول
        prepend = العنصر الي هايكون في البداية
        eo.target = العنصر الذي يتم عليه الحدث
        parentElement = هاتروح للاب بتاعة 
        ↘↘↘↘ */
        container.prepend(eo.target.parentElement)

    /*
        =====================
        icon-star icon orange" =  في حالة ان الكلاس نيم ده
        orange = انه خلاص ضاف الكلاس 
        remove("orange") = يحذف الكلاس الي اسمه
        append =  لما تشيل النجمة يرجع الى الاسفل
        ↘↘↘↘ */
    } else if (eo.target.className == "icon-star icon orange") {

        eo.target.classList.remove("orange")

        container.append(eo.target.parentElement)

    }


    /* 
    =====================
    ## ملاحظة ##
    كثير  else if لو انت بتستخدم 
    switch' case = فايفضل انك تستبدلها بال سويتش كيس = من ناحية الاداء والسرعة
    #=====#
    switch (eo.target = لو العنصر الذي يتم عليه الحدث
    className = الكلاس نيم اسمه
    "icon-trash icon" = الي هو ده = هاينفذ مجموعة من الاكواد
    case = الحالة الاولى
    ↘↘↘↘ */
//     switch (eo.target.className) {
// // ========================================================
//         // ========== 111
//         case "icon-trash icon":
//             eo.target.parentElement.parentElement.remove()
//             break;

// // ========================================================

//         // ========== 222
//         case "icon-angry2 icon":
//             eo.target.classList.add("dn");
//             const heart = `<span class="icon-heart">   </span>`;

//             eo.target.parentElement.parentElement
//                 .getElementsByClassName("task-text")[0]
//                 .classList.add("finish");

//             eo.target.parentElement.innerHTML += heart;
//             break;

// // ========================================================

//         // ========== 333
//         case "icon-heart":
//             eo.target.parentElement.parentElement
//                 .getElementsByClassName("task-text")[0]
//                 .classList.remove("finish");

//             eo.target.classList.add("dn");

//             const addAngry = `
//             <span class="icon-angry2 icon"> </span>
//             `;

//             eo.target.parentElement.innerHTML += addAngry;
//             break;

// // ========================================================

//         // ========== 444
//         case "icon-star icon":
//             eo.target.classList.add("orange");

//             container.prepend(eo.target.parentElement);
//             break;

// // ========================================================

//         // ========== 555
//         case "icon-star icon orange":
//             eo.target.classList.remove("orange");
//             break;

//         default:
//             break;

// // ========================================================
//     }

})

/*
=====================

↘↘↘↘ */