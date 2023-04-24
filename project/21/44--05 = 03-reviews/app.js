// local reviews data
const reviews_Array_03 = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img_03 = document.getElementById("person-img");
const author_03 = document.getElementById("author");
const job_03 = document.getElementById("job");
const info_03 = document.getElementById("info");

const prev_Btn_03 = document.querySelector(".prev-btn");
const next_Btn_03 = document.querySelector(".next-btn");
const random_Btn_03 = document.querySelector(".random-btn");

let current_Item_03 = 0;

window.addEventListener("DOMContentLoaded", function () {
    show_person_03_fun();
});

function show_person_03_fun() {
    const item_03 = reviews_Array_03[current_Item_03];
    img_03.src = item_03.img;
    author_03.textContent = item_03.name;
    job_03.textContent = item_03.job;
    info_03.textContent = item_03.text;
}

next_Btn_03.addEventListener("click", function () {
    current_Item_03++;
    if (current_Item_03 > reviews_Array_03.length - 1) {
        current_Item_03 = 0;
    }
    show_person_03_fun();
});

prev_Btn_03.addEventListener("click", function () {
    current_Item_03--;
    if (current_Item_03 < 0) {
        current_Item_03 = reviews_Array_03.length -1    
    }
    show_person_03_fun();
});

random_Btn_03.addEventListener("click", function () {
    current_Item_03 = Math.floor(Math.random() * reviews_Array_03.length)
    show_person_03_fun()
});

