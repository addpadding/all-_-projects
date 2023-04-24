
/*
{بتاعي} {slider} {هي الصور الموجودة داخل} {slider item}}   {slider item} {اول حاجة هانجيب}
{Array.from} {اسمها} {ES6} {تقنية موجودة في اصدار} {ده هانستخدم فيها} {slider-container} {اسمه} {div} {الي عو عندنا}
{slider-container} {الي بداخل} {img} {العناصر ده الي هيا} {من} {Array} {هايجبلي}
*/
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))


/*
    {{{{{var slidesCount = sliderImages.length}}}}}

    {Array} {النقطة التانية اني عايز اجيب عدد العناصر الي بداخل}

    {Paginations Bullets} {عشان هانشئ قصداهم} {عشان هاعتمد على العناصر ده} {عندي كام عنصر}

    {6} {الى} {1} {صور فا هنشئ من} {6} {عندي} {على قدهم بالظبط} {Bullets} {عشان انشئ قدهم عدد} {هاشوف انا عندي كم صورة}

    {فا لازم نعرف العدد} {يجيب الصورة} {Bullets} {عشان الشخص يقدر يعمل تزامن بينهم يدوس على}

    {length} {الي فيها العناصر وسهل جدا عن طريق} {Array} {سهل جدا لان معانا ال} {slide} {موضوع}

    {ببساطة شديدة جبت العدد} {slidesCount} {هاسميها} {عشان نعرف هيا فيها كم عنصر}

    {5} {جابلك} {في الصفحة} {slid} {عشان يقولك انت عندكم كم} {console.log(slidesCount)} {وعشان تتاكد تجيب}

    {1} {ب} {index} {كبر من} {length} {هتلاقي} {دائما}

    {1} {وده هاتشوفة واحنا بنكتب الكود ان فيه حاجات بتضيف عليها رقم} 

    {وتمام} {slide} {جبنا عدد} {عشان تعرف تكمل الكود صح}
*/
var slidesCount = sliderImages.length


/*
    {var currentSlide = 1;}

    {slider} {وارد جدا وانت بتعمل} {الي انت هاتبدا منه كم} {index} {طبعا لما حبين نبدا ونقوله ال}

    {معين} {index} {من} {انه ممكن يبدا} {Option} {الشخص تديله }

    { ان الصورة الي عاوز يبدا منها تكون الي في النص مش اول واحدة ممكن تبقى الصورة الاخيرة زيما تحب} 

    {الي هانبدا منه} {index} {current}   {في كل الحالات لازم يكون عندنا}

    {بتاعنا = يعني عايز من البداية او النهاية} {slider} {هانبدا من فين ال} 

    {عشان تجيب اول صورة ننطلق منها} {اي اسم تحس انه يناسب فكرتك} {slide} {هاقوله عاوز اجيب اول}

    {currentSlide}   {الزرار بياخد} {next} {زرار} {عشان لما تدوس على} {طب ليه اول صورة}

    {1} {فا بيزود عليه} {++} {عليه بيقوله} {count} {بتاعك وبيعمل}

    {2} {ويجيبلك الصورة رقم} {2} {بيتحول الى} {next} {وتدوس} {1} {لما يكون} {index} {current} {فال}

    {وهكذا} {ويجيبلك الصورة الي قبلها} {1} {عشان ينقص منه} {(- -)ناقص ناقص} {بيعمل} {prev} {نفس القصة}

    {ده الي احنا هانبدا منه عشان ننطلق للي بعده} 
*/
var currentSlide = 1;

// {slide} {العنصر الي هانحط فيه رقم}

/*
    {هانبدا نعمل فاريبل للعناصر الي هانستخدمها}

    {slide} {المقصود منها  رقم} {string} {Number} {slide} {كتبت} {slide} {واولهم العنصر الي بيتحط فيه رقم} 

    {كده بقى عندي العنصر}  {slide # 1} {الي هانكتب جمبيه كلمة} {بتاعه} {string}  
*/
var slideNumberElement = document.getElementById("slider-number")


//{Next} {زرار}
var nextButton = document.getElementById("next")

//{Previous} {زرار}
var prevButton = document.getElementById("prev")

// {هايحصل ايه} {nextButton} {او} {prevButton} {لما ادوس على} {click} {لل} {Handle} {هاعمل}
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;



// {ul} {انشاء الازرار}
var paginationElement = document.createElement("ul")

// {جديد} {Attribute} {انشاء} == {ul}  {على عنصر} {id} {حط}
paginationElement.setAttribute("id", "pagination-ul")

/*
01 = {ul} {الموجودة بداخل} {li} {اعمل عدد}
02 = {Loop} {التكرار الي هو} {واكثر من حاجة هانعمل تكرار} {Li} {عشان اعمل} 
03 = {li} {يعمل 10} {مثلا 10 صور} {li} {هايعمل على قد عدد الصور} {الي هو عدد الصور } {slider} { هياخذ عدد العناصر الي بداخل} {loop}  
04 =  {paginationElement} {هاروح حاططهم في العنصر  الي انا انشئته} {li} {وبعد مااعمل ال 10}
05 = {اروح حطه في المكان الي انا محتاجه} {وبعد ماخذ العنصر بالعناصر االي فيه}
*/

for (var i = 1; i <= slidesCount; i++) {

    // {ul} {الي بداخل} {li} = {الاطفال} {انشاء}
    var paginationItem = document.createElement("li")

    // {عشان لما اضغط على الازرار} {data-index} {اسمه} {Attribute} {انشاء}
    paginationItem.setAttribute("data-index", i)

    // {ونحط الارقام} {li} {الي بداخل} {text} {انشاء}
    paginationItem.appendChild(document.createTextNode(i))

    //  {ul} {نوديهم الى ابوهم} {ناخذ الاطفال}
    paginationElement.appendChild(paginationItem)
}

// {ونحطة في الصفحة} {ul} {ناخذ الاب}
document.getElementById("indicators").appendChild(paginationElement)

// {عشان نتعامل معاه} {ul} {احضار العنصر الي عملناه}
var paginationCreatedUl = document.getElementById("pagination-ul")

// {PaginationsBullets} {اسمه} {جبتها في متغير} {pagination-ul} {الموجودة بداخل} {li} {كاملة فيها  جميع} {Array} {كدا انا جيت}
var PaginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"))

/*
    {كلها} {Bullets} {الي هيا ال} {Pagination} {على جميع العناصر الخاصة بال} {loop} {عايزين نعمل }

    {onclick}   {event} {ده هايكون في} {loop}  

    {هاعمل حاجة معينة} {click} {يعني عايز اقوله كل زرار من دول لما تدوس عليه}

    {ليه} {0} {هاتبدا من} {i}   {for} {هانشوف هاعمل ايه في}

    {هاتبدا من الصفر} {i} {فا بالتالي هاقوله ان} {0} {بيبدا من} {PaginationsBullets} {بتاع} {index}   {عشان }

    {مش اصغر يساوي} {ليه قلتله اصغر من} {PaginationsBullets} {اصغر من} {i} {و}

    {بيجيب العدد الي جوا} {length} {لكن} {يبدا من صفر} {index} {عشان}
*/
for (var i = 0; i < PaginationsBullets.length; i++) {

    /*
    {i} {الي هايكون هنا} {بتاعي} {index} {بعدين} {PaginationsBullets} {هاعمل ايه في العناصر بتاعتي هاقوله}

    {وهكذا} {2} {ثم} {1} {وبعدين} {0} {الي هوا هايبدا من} 

    {معينة} {function} {هايحصل} {هايحصل ايه} {click} {لما اعمل عليه} 
*/
    PaginationsBullets[i].onclick = function () {

        /*
            {مطلوب منك تعمل ايه} {3} {انت دوست هنا رقم} {تخيل انا مطلوب مني اعمل ايه هنا} 
    
            {ازاي الكلام ده} {هو الرقم ده} {currentSlide} {تخلي} {3} {كل المطلوب منك ان رقم} 
    
            {بتاع العنصر الي انا بدوس عليه} {data-index} {هو} {currentSlide} {وخلي} {هاعتمد عليه} {data-index} {هنا اسمه} {Attribute} {عندي} 
    
            {number} {مش} {string} {الي انت هاترجعه بالشكل ده هايرجع} {Attribute} {لكن } 
    
            {رقم} {عشان يرجعهولك} {parseInt} {اسمها} {function} {هانستخدم} {number} {عشان نخليه} 

            {الرقم بتاع العنصر الي انا بدوس عليه} {يساوي} {currentSlide} {اني خليت} {كل الي انا عملته هنا} 
        */
        currentSlide = parseInt(this.getAttribute("data-index"));

        /*
            {يدخل} {theChecker} {function} {فاضل} {طيب فاضل ايه} 
        
            {تشتغل} {theChecker} {بعد لما اعمل الكلام ده} 
        
            {كل حاجة تمشي معاك بالمسطرة} {وزي مانت شايف} 
        */
        theChecker()
    }
}



theChecker()

//  {وبس وانتهى الموضوع} {4} {الى} {3} {يعني بيخلي} {انكريميمنت} {يعني بيعمل} {4} {رقم} {Slide} {يعمل ايه بيخليني اروح لل} {next} {لما ادوس} {3} {يساوي} {currentSlide}   {3} {رقم} {Slide} {انا داوقتي في} {ايه السيناريو بتاعها ايه المفروض يتم} {function} {next}  
function nextSlide() {

    /*
    {هايكمل فا لازم حاجة توقفة} {disabled} {ثم جيت على كلاس} {next} {لو فضلت تضغط على} {هنقابل مشكلة}
    {ماتعكلش حاجة} {يبقى ستوب} {disabled} {لو فيه كلاس} {ان احنا نقوله ان انت تشيك على الزرار ده} {ابه الحاجة الي هاتوقفه}
    */
    if (nextButton.classList.contains("disabled")) {

        /*
        {false} {return} {او تقوله} {اما تسيبها فاضية} {ماتعملش حاجة}
        {تدوس مش هايحصل اي حاجة} {5} {وصلت عند} {next} {تمام الان تدوس على} 
        */
        return false

    } else {
        currentSlide++;
        theChecker()
    }
}

function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--;
        theChecker()
    }
}


function theChecker() {

    // {slider-number} {في} {الي انا فيه} {slide} {محتاج اكتب رقم}
    slideNumberElement.textContent = "slide #" + (currentSlide) + " of " + (slidesCount);

    // {المناسب} {currentSlide} {وبعدين يحطها على} {bullets} {ومن جميع} {من جميع الصور} {active} {بيروح يحذف} {مكانه هنا}
    removeAllActive()

    // {active} {وتحط عليه كلاس} {الي احنا فيه} {currentSlide} {تشيك على} {theChecker} {محتاجين من}
    sliderImages[currentSlide - 1].classList.add("active")

    // {ul} {على اول عنصر في} {active} {اخلي}
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")


    // {فا لازم التزامن ده يحصل} {عشان يمكن هوا موجود} {هايشيل منه الكلاس} {First} {ولو مش هوا} {prev} {على زرار} {disabled} {هايروح يحط} {First} {هايحصل ايه لو هو} {First} {او لا طب لو هو } {First} {الي انا فيه هو} {currentSlide} {عايز اشيك ال}
    // {هايحصل ايه} {1} {لو انت رقم} {1} {وتقوله هل انت رقم} {فا لازم تشيك تاني} {3} {ممكن يصير} {1} {لكن ممكن كمان شوية مايساوي } {1} {انا عارف ان هوا بيساوي} {هانعمل القصة الي قلناها} {ببساطة شديدة} {1} {يساوي} {currentSlide} {لو}
    if (currentSlide == 1) {

        // {prevButton} {على} {disabled} {نضيف كلاس}
        prevButton.classList.add("disabled")
    } else {
        //{prevButton} {من} {disabled} {يحذف كلاس} {1} {لو هوا مش رقم}
        prevButton.classList.remove("disabled")
    }

    //  {Slide} {لان انت في اخر} {next} {يبقى احنا مش محتاجين زرار} {5} {الي هوا} {Slide} {بيساوي عدد} {5} {currentSlide} {فا لو} {5} {بتاعتي الي هما اصلا} {slides   {الي عيا عدد} {slidesCount} {يساوي} {currentSlide} {هاشيك هل} {مختلف} {Last}   = {Last} {if} {Check} {اقوله هنا  } {المره ده هاشيك عليه لو كان اخر واحد}
    if (currentSlide == slidesCount) {

        // {5} {عشان مافيش بعد ال} {عشان ماحدش يدوس عليه} {disabled} {كلاس} {nextButton} {محتاج احط على} {Slide} {لو انا في اخر}
        nextButton.classList.add("disabled")
    } else {

        // {disabled} {تحذف من كلاس} {5} {لو انا مش على اخر واحد الي هوا}
        nextButton.classList.remove("disabled")
    }

}

// {currentSlide} {المناسب على حسب} {active} {عشان بعدها احط } {bullets} {ومن جميع } {من جميع الصور} {active} {احذف كلاس}
function removeAllActive() {

    // {هيا الصور} {active} {اول حاجة اشيل منها} {الي انت تطلبه بالظبط} {وتعمل فيها} {Array} {بتمشي على عنصر عنصر من عناصر} {Array} {بتاخذ منك} {loop} {بتعمل} {forEach}
    sliderImages.forEach(function (img) {

        // {active} {ويحذف منها} {Array} {بمشي على صورة صورة الموجودين في} {loop} {بيعمل عليها} {Array} {بياخذ} {الي بيحصل دلوقتي}
        img.classList.remove("active")
    })

    // {active} {احذف}
    PaginationsBullets.forEach(function (bullet) {
        bullet.classList.remove("active")
    })
}




