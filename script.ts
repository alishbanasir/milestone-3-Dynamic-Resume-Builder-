document.getElementById("formGi")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const imageElement = document.getElementById("image") as HTMLInputElement;
  const firstnameElement = document.getElementById(
    "firstname"
  ) as HTMLInputElement;
  const lastnameElement = document.getElementById(
    "lastname"
  ) as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const numberElement = document.getElementById("number") as HTMLInputElement;
  const loactionElement = document.getElementById(
    "loaction"
  ) as HTMLInputElement;

  const EducationElement = document.getElementById(
    "Education"
  ) as HTMLInputElement;
  const SkillsElement = document.getElementById("Skills") as HTMLInputElement;
  const ExperienceElement = document.getElementById(
    "Experience"
  ) as HTMLInputElement;

  if (
    imageElement &&
    firstnameElement &&
    lastnameElement &&
    emailElement &&
    numberElement &&
    loactionElement &&
    EducationElement &&
    SkillsElement &&
    ExperienceElement
  ) {
    const firstname = firstnameElement.value;
    const lastname = lastnameElement.value;
    const email = emailElement.value;
    const number = numberElement.value;
    const loaction = loactionElement.value;
    const Education = EducationElement.value;
    const Skills = SkillsElement.value;
    const Experience = ExperienceElement.value;

    const imageInput = document.getElementById("image") as HTMLInputElement;
    const imagefile = imageInput.files?.[0];
    const image = imagefile ? URL.createObjectURL(imagefile) : "";

    const output = `
    <br><br>
    <h2>Congrats your First Generated!</h2><br><br>
  ${
    image
      ? `<img src="${image}" alt="image" width="150px"  border: 2px solid black;
    object-fit: cover; height="150px" class="image">`
      : ""
  }
    <br><br>
    <p><strong>Firstname:</strong> ${firstname} </p>
    <br><br>
    <p><strong>Lastname:</strong> ${lastname} </p>
    <br><br>
    <p><strong>Email:</strong> ${email} </p>
    <br><br>
    <p><strong>Number:</strong> ${number} </p>
    <br><br>
    <p><strong>Loaction:</strong> ${loaction} </p>
    
    <br><br>

<h3>Education</h3>
<p>${Education}</p>
<br><br>

<h3>Skills</h3>
<p>${Skills}</p><br><br>

<h3>Experience</h3>
<p>${Experience}</p><br><br>
`;

    const outputElement = document.getElementById("output");
    if (outputElement) {
      outputElement.innerHTML = output;
    } else {
      console.error("The output elements are missing");
    }
  } else {
    console.error("one or more output element are missing");
  }
});
