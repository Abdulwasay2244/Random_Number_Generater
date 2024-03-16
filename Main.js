const Number = document.getElementById("Number");
const Generatorbtn = document.getElementById("Generatorbtn");

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random()* 100 + 1);
    Number.textContent = randomNumber;
}; 

Generatorbtn.addEventListener('click', randomNumberGenerator);

randomNumberGenerator();