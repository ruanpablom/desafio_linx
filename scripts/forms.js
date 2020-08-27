const algForm = document.getElementById("alg-form");
const shareForm = document.getElementById("share-form");
const buttonSubmitAlg = document.getElementById('submit-alg');
const buttonSubmitShare = document.getElementById('submit-share');


/**
 * Event responsible for check validation of algForm inputs
 */
buttonSubmitAlg.addEventListener('click', () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const cpfError = document.getElementById('cpf-error');

  validate([name, email, cpf], [nameError, emailError, cpfError]);
});



/**
 * Function responsible for submit form data
 * @param  {Event} e
 */
const submitForm = (e) => {
  e.preventDefault();
  
  const form = e.srcElement;

  const data = {};

  [...form].forEach(element => {
    if(element.name){
      if(element.type === "radio"){
        if(element.checked){
          data[element.name] = element.value;
        }
      }else{
        data[element.name] = element.value;
      }
    }
  })
  

  console.log('form sended', data);
  form.reset();
}

/**
 * Event responsible for check validation of algForm inputs
 */
buttonSubmitShare.addEventListener('click', () => {
  const name = document.getElementById('friend-name');
  const email = document.getElementById('friend-email');
  const nameError = document.getElementById('friend-name-error');
  const emailError = document.getElementById('friend-email-error');
  
  validate([name, email], [nameError, emailError]);
});

/**
 * @param  {Array of elements} inputs
 * @param  {Array of elements} errorTags error tag must be in same order as your respective input
 */
const validate = (inputs, errorTags) => {
  errorTags.map(errorTag => errorTag.setAttribute("hidden", true));
  
  inputs.forEach((input, index) =>{
    if(!input.checkValidity()){
      errorTags[index].removeAttribute("hidden");
    }
  });
}

/**
 * Event responsible for submit algForm
 */
algForm.addEventListener("submit", submitForm);

/**
 * Event responsible for submit shareForm
 */
shareForm.addEventListener("submit", submitForm);


