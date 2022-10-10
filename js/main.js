let minus_1 = document.querySelector('.minus-1');
let plus_1 = document.querySelector('.plus-1');
let val_1 = document.querySelector('.val-1');

let scoreSpan = document.querySelector('.scoreSpan');

let counter = 0;
function plus1(){
	counter+=1;
	val_1.innerHTML = counter;
	scoreFunc();
	return counter;
}

function minus1(){
	counter-=1;
	if(counter<0){
		counter = 0;
	}
	val_1.innerHTML = counter;
	scoreFunc();
	return counter;
}

let minus_2 = document.querySelector('.minus-2');
let plus_2 = document.querySelector('.plus-2');
let val_2 = document.querySelector('.val-2');

let count = 0;
function plus2(){
	count+=1;
	val_2.innerHTML = count;
	scoreFunc();
	return count;
}

function minus2(){
	count-=1;
	scoreFunc();
	if(count<0){
		count = 0;
	}
	val_2.innerHTML = count;
	return count;

}


function scoreFunc(){
	let score_1 = counter * 18;
	let score_2 = count * 65;
	let score = score_1 + score_2;
	if(score<score_1){
		score = score_1;
	}else if(score<0){
		score = 0;
	}
	scoreSpan.innerHTML = score;
}

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const body = document.body;
const menu = document.querySelector('#nav').cloneNode(1);
hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
	e.preventDefault;
	popup.classList.toggle('open');
	hamb.classList.toggle('active');
	body.classList.toggle('noscroll');
	renderPopup();
}

function renderPopup() {
	popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
	link.addEventListener('click', closeOnClick)
});

function closeOnClick() {
	popup.classList.toggle('open');
	hamb.classList.toggle('active');
	body.classList.toggle('noscroll');
	// popup.style.display = 'none';
}