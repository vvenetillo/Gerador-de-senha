//Seleção de Elementos
const generatePasswordButton =  document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

//Funções
const getLetterLowerCase =() => {
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
};

const getLetterUpperCase =() => {
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
};

const getNumber = () => {
    return Math.floor(Math.random() *10).toString();
};

const getSymbol = () =>{
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbol = [Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for(i=0; i < passwordLength; i = i + 4){
        generators.forEach(() =>{
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatePasswordElement.style.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
};
//Eventos
generatePasswordButton.addEventListener("click" ,(e) =>{
    e.preventDefault();
        generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
        );
});
//Send Alert
form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const nameid = document.getElementById('#name').value;
    const emailid = document.getElementById('#email').value;
    const passwordid = document.getElementById('#password').value;
  
    if (nameid === '' || emailid === '' || passwordid === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
})

// Backend
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const data = {
    name,
    email
  };

  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      // Faça algo com a resposta do servidor
      console.log(result);
    })
    .catch(error => {
      // Trate o erro
      console.error('Ocorreu um erro:', error);
    });
});


