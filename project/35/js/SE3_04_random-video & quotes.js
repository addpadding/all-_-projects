
// lesson-44 video 01
// ======================================

const id_random_video_44_01 = document.getElementById("random_video")

const id_container_iframe_44_01 = document.getElementById("container_iframe")

let i = 0

id_random_video_44_01.addEventListener("click", (eo) => {
    //-
    const videoArr_44_01 = [
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Wt45wp7vMxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/sfzzKW42VCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/DxWi4-g1ztI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/LLqwyjMuczk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Wt45wp7vMxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/sfzzKW42VCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/DxWi4-g1ztI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        `<iframe id="myiframe" id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/LLqwyjMuczk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,]
        //-
    //-
    // id_container_iframe_44_01.innerHTML = videoArr_44_01[Math.floor(Math.random() * videoArr_44_01.length)]
    id_container_iframe_44_01.innerHTML = videoArr_44_01[i]
    //-
    i++
    //-
    if (i == videoArr_44_01.length) {
        //-
        i = 0
    }
    /*
    استدعاء فانشن
    SE3_05_harts 
     */
    Fun_Random_Hart_55_02()
})

// lesson-44 video 02
// ======================================

const id_button_quote_44_02 = document.getElementById("button_quote")
const id_parent_quote_44_02 = document.getElementById("parent_quote")

let index = 0

id_button_quote_44_02.addEventListener("click", (eo) => {
    //-
    const Arr_quote_44_02 = 
    //-
        [
    ` <blockquote lang="ar" dir="rtl" class="sidekick">
    لا تبرر اخطائك
    بل اجلطهم بالمزيد
    <br>
    <cite> خالد فارس </cite>
    </blockquote>
    `,
    
    ` <blockquote lang="ar" dir="rtl" class="sidekick">
    لا تيأس من الحياة 
    اجعلها تيأس منك
    <br>
    <cite> علي حسن </cite>
    </blockquote>
    `,
        ] 
    //-
    id_parent_quote_44_02.innerHTML = Arr_quote_44_02[index]
    //-
    index++
    //-
    if (index == Arr_quote_44_02.length) {
        index = 0
    }
    //*
    /*
    استدعاء فانشن
    SE3_05_harts 
     */
    Fun_Random_Hart_55_02()
})
