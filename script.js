// 2. Pobierz w JS paragrafy, przyciski oraz DIV-a square.

const par1 = document.querySelector(".p1");
const par2 = document.querySelector(".p2.show");
const btn1 = document.querySelector(".btn.btn1");
const btn2 = document.querySelector(".btn.btn2");
const square = document.querySelector(".square");

console.log(square);

// 3. Stwórz funkcje:

// #1: wyloguj w konsoli napisz "cześć",

const hej = () => {
	console.log("Cześć");
};

// #2: zmień kolor .square na czerwony

const changeRed = () => {
	square.style.backgroundColor = "red";
};

// #3: zmień kolor square na niebieski ,

const changeBlue = () => {
	square.style.backgroundColor = "blue";
};

// #4: najpierw dodaj klasę .show do "Paragrafu 1" i usuń klasę .show z "Paragrafu 2", potem zrób na odwrót // (przełącznik do światła).

// const changeClassPar1 = () => {
// 	par1.classList.add("show");
// 	par2.classList.remove("show");
// };
const toggleClassPar2 = () => {
	par1.classList.toggle("show");
	par2.classList.toggle("show");
};

btn1.addEventListener("dblclick", hej);
btn2.addEventListener("click", toggleClassPar2);
square.addEventListener("mouseover", changeRed);
square.addEventListener("mouseout", changeBlue);

// changeClassPar1();

// 4. Funkcje mają być odpalane za pomocą:
// #1 podwójnego kliknięcia przycisku z burgerem,
// #2 wjechania myszą na DIV.square,
// #3 zjechania myszą z DIV.square,
// #4 kliknięcia w przycisk z pizzą.
