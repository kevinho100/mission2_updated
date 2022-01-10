$("#btn").click(function () {
//define variables and get arguments from index
let assignments = $("#assignments").val();
let groupProjects = $("#group").val();
let quizzes = $("#quizzes").val();
let exams = $("#exams").val();
let intex = $("#intex").val();

//calculate grade and percentage
let finalgrade = (assignments * 0.55) + (groupProjects * 0.05) + (quizzes * 0.1) +
    (exams * 0.20) + (intex * 0.1);

let grade = '';

    //if statements to get the correct grade

    if (finalgrade >= 94) {
        grade = 'A'
    }
    if (finalgrade >= 90 && finalgrade < 94) {
        grade = 'A-'
    }
    if (finalgrade >= 87 && finalgrade  < 90) {
        grade = 'B+'
    }
    if (finalgrade >= 84 && finalgrade  < 87) {
        grade = 'B'
    }
    if (finalgrade >= 80 && finalgrade < 84) {
        grade = 'B-'
    }
    if (finalgrade >= 77 && finalgrade < 80) {
        grade = 'C+'
    }
    if (finalgrade >= 74 && finalgrade < 77) {
        grade = 'C'
    }
    if (finalgrade >= 70 && finalgrade < 74) {
        grade = 'C-'
    }
    if (finalgrade >= 67 && finalgrade < 70) {
        grade = 'D+'
    }
    if (finalgrade >= 64 && finalgrade < 67) {
        grade = 'D'
    }
    if (finalgrade >= 60 && finalgrade < 64) {
        grade = 'D-'
    }
    if (finalgrade < 60) {
        grade = 'E'
    }
//print out final percentage and grade 
alert("your percentage of the class is " + finalgrade + "% and your final grade is a(n) " + grade);

})


