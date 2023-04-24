const title = document.querySelector("h1");

const data1 = "ali";
const data2 = 26;

// الطريقة القديمة
const ana1 = " iam " + data1 + ", iam " + data2;

const ana2 = ` i am ${data1}, i am ${data2} `

title.innerText = ana1;
title.innerText = ana2;
