document.body.style.width = "100%";
document.body.style.marginLeft ="50px";

const formTitle=document.createElement("p");
formTitle.innerHTML="Form";
document.getElementById("parentContianer").appendChild(formTitle);
formTitle.style.fontsize = "60px";
formTitle.style.fontWeight = "bold";



const firstName=document.createElement("p");
firstName.innerHTML="First Name";
document.getElementById("parentContianer").appendChild(firstName);
firstName.style.fontsize = "30px";

const firstInput=document.createElement("input");
document.getElementById("parentContianer").appendChild(firstInput);

const lastName=document.createElement("p");
lastName.innerHTML="Last Name";
document.getElementById("parentContianer").appendChild(lastName);
lastName.style.fontsize = "30px";

const lastInput=document.createElement("input");
document.getElementById("parentContianer").appendChild(lastInput);
//end davhar div uusgeh
const ageContainer = document.createElement("div");
ageContainer.id="age_Container"
document.getElementById("parentContianer").appendChild(ageContainer);

const age = document.createElement("p");
age.innerHTML="Age";
document.getElementById("age_Container").appendChild(age);
lastName.style.fontsize = "30px";

const ageInput = document.createElement("input");
document.getElementById("age_Container").appendChild(ageInput)

//end bas uusgeh
const genderContainer = document.createElement("div");
genderContainer.id="gender_Container"
document.getElementById("parentContianer").appendChild(genderContainer);

const genderTitle = document.createElement("p");
genderTitle.innerHTML = "Gender";
document.getElementById("gender_Container").appendChild(genderTitle);
genderTitle.style.fontsize  = "30px";

const genderInput=document.createElement("input");
document.getElementById("gender_Container").appendChild(genderInput);

//end bas

const relationshipContainer = document.createElement("div");
relationshipContainer.id="relationship_Container"
document.getElementById("parentContianer").appendChild(relationshipContainer);

const relationshipStatus = document.createElement("p");
relationshipStatus.innerHTML = "Relationship status";
document.getElementById("relationship_Container").appendChild(relationshipStatus);
relationshipStatus.style.fontsize  = "30px";

const relationshipStatusInput=document.createElement("input");
document.getElementById("relationship_Container").appendChild(relationshipStatusInput);

//end bas

const userNameContainer = document.createElement("div");
userNameContainer.id="userName_Container"
document.getElementById("parentContianer").appendChild(userNameContainer);

const userName = document.createElement("p");
userName.innerHTML = "User Name";
document.getElementById("userName_Container").appendChild(userName);
userName.style.fontsize  = "30px";

const userNameInput=document.createElement("input");
document.getElementById("userName_Container").appendChild(userNameInput);

//end bas

const passwordContainer = document.createElement("div");
passwordContainer.id="password_Container"
document.getElementById("parentContianer").appendChild(passwordContainer);

const passwordTitle = document.createElement("p");
passwordTitle.innerHTML = "Password";
document.getElementById("password_Container").appendChild(passwordTitle);
passwordTitle.style.fontsize  = "30px";

const passwordInput=document.createElement("input");
document.getElementById("password_Container").appendChild(passwordInput);

const button = document.createElement("p");
button.innerHTML = "submit";
button.style.background = "yellow";
button.style.padding = "10px";
button.style.width = "50px";
button.style.marginLeft = "50px";
button.style.marginTop = "10px";
button.style.borderRadius="5px"
document.getElementById("parentContianer").appendChild(button);
button.addEventListener("click", () => {
  // Текст орсон эсэхийг шалгах
  if (
    lastInput.value.trim() !== "" &&
    firstInput.value.trim() !== "" &&
    !isNaN(Number(ageInput.value)) &&
    ["female", "male"].includes(genderInput.value) &&
    ["single", "in a relationship", "married", "divorced", "widowed"].includes(relationshipStatusInput.value) &&
    userNameInput.value.includes("@gmail.com") &&
    passwordInput.value.length >= 8
  ) {
    alert("Бүх өгөгдөл зөв байна!");
  }

  // Насaa шалгах
  if (!isNaN(Number(ageInput.value))) {
    console.log("=========================");
    console.log(true);
    console.log("=========================");
  } else {
    const warningAge = document.createElement("p");
    warningAge.innerHTML = "Please enter correct age.";
    warningAge.style.color = "red";
    document.getElementById("age_Container").appendChild(warningAge);
  }

  // huis
  if (["female", "male"].includes(genderInput.value)) {
    console.log("=========================");
    console.log(true);
    console.log("=========================");
  } else {
    const warningGender = document.createElement("p");
    warningGender.innerHTML = "Please choose female or male).";
    warningGender.style.color = "red";
    document.getElementById("gender_Container").appendChild(warningGender);
  }

  // relation статусыг шалгах
  if (
    ["single", "in a relationship", "married", "divorced", "widowed"].includes(
      relationshipStatusInput.value
    )
  ) {
    console.log("=========================");
    console.log(true);
    console.log("=========================");
  } else {
    const warningRelationship = document.createElement("p");
    warningRelationship.innerHTML =
      " Please choose single, in a relationship, married, divorced and widowed!";
    warningRelationship.style.color = "red";
    document
      .getElementById("relationship_Container")
      .appendChild(warningRelationship);
  }

  //  user name шалгах
  if (userNameInput.value.includes("@gmail.com")) {
    console.log("=========================");
    console.log(true);
    console.log("=========================");
  } else {
    const warningUserName = document.createElement("p");
    warningUserName.innerHTML = "Please enter gmail!";
    warningUserName.style.color = "red";
    document.getElementById("userName_Container").appendChild(warningUserName);
  }

  // Нууц үгийн уртыг шалгах
  if (passwordInput.value.length >= 8 ){
    console.log("=========================");
    console.log(true);
    console.log("=========================");
  } else {
    const warningPassword = document.createElement("p");
    warningPassword.innerHTML = "Password must be at least 8 characters";
    warningPassword.style.color = "red";
    document.getElementById("password_Container").appendChild(warningPassword);
  }
});