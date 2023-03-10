const mail = document.querySelector(".mail");
const error = document.querySelector(".error");
const img = document.querySelector(".error-img");
const button = document.querySelector(".btn");

let mailRegex =
  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

function testmail(input, error) {
  if (input.value.match(mailRegex)) {
    console.log("true");
    error.classList.remove("visible");
    error - img.classList.remove("visible");
  } else {
    error.classList.add("visible");
    error - img.classList.add("visible");
    console.log("false");
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  testmail(mail, error);
  console.log("clicked");
});
