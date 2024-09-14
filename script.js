var _a;
(_a = document.getElementById("formGi")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var imageElement = document.getElementById("image");
    var firstnameElement = document.getElementById("firstname");
    var lastnameElement = document.getElementById("lastname");
    var emailElement = document.getElementById("email");
    var numberElement = document.getElementById("number");
    var loactionElement = document.getElementById("loaction");
    var EducationElement = document.getElementById("Education");
    var SkillsElement = document.getElementById("Skills");
    var ExperienceElement = document.getElementById("Experience");
    if (imageElement &&
        firstnameElement &&
        lastnameElement &&
        emailElement &&
        numberElement &&
        loactionElement &&
        EducationElement &&
        SkillsElement &&
        ExperienceElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var number = numberElement.value;
        var loaction = loactionElement.value;
        var Education = EducationElement.value;
        var Skills = SkillsElement.value;
        var Experience = ExperienceElement.value;
        var imageInput = document.getElementById("image");
        var imagefile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var image = imagefile ? URL.createObjectURL(imagefile) : "";
        var output = "\n    <br><br>\n    <h2>Congrats your First Generated!</h2><br><br>\n  ".concat(image
            ? "<img src=\"".concat(image, "\" alt=\"image\" width=\"150px\"  border: 2px solid black;\n    object-fit: cover; height=\"150px\" class=\"image\">")
            : "", "\n    <br><br>\n    <p><strong>Firstname:</strong> ").concat(firstname, " </p>\n    <br><br>\n    <p><strong>Lastname:</strong> ").concat(lastname, " </p>\n    <br><br>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <br><br>\n    <p><strong>Number:</strong> ").concat(number, " </p>\n    <br><br>\n    <p><strong>Loaction:</strong> ").concat(loaction, " </p>\n    \n    <br><br>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n<br><br>\n\n<h3>Skills</h3>\n<p>").concat(Skills, "</p><br><br>\n\n<h3>Experience</h3>\n<p>").concat(Experience, "</p><br><br>\n");
        var outputElement = document.getElementById("output");
        if (outputElement) {
            outputElement.innerHTML = output;
        }
        else {
            console.error("The output elements are missing");
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
