const ele = document.getElementById("del")
const body = document.getElementById("body")

ele.remove()

const title = document.createElement("h2")

body.append(title)

title.classList.add("prince")
title.innerText = "تمام"


title.setAttribute("id", "myid");
