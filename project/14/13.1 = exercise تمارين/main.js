const title = document.getElementsByTagName("h1")[0];

const courses = [ "HTML", "CSS", "JavaScript" ]

courses[2] = "Python"

courses[0] += 5
courses[1] += 3

console.table(courses);