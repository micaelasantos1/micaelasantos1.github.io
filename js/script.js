// VALIDATION TO FORM

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nomeValue = nome.value.trim();
	const emailValue = email.value.trim();
	
	if(nomeValue == '') {
		setErrorFor(nome, 'Este campo tem se ser preenchido');
	} else {
		setSuccessFor(nome);
	}
	
	if(emailValue == '') {
		setErrorFor(email, 'Este campo tem se ser preenchido');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Este email não é válido');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formGroup = input.parentElement;
	formGroup.className = 'form-group success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// ON SCROLL

window.onscroll = function () {
	onScroll();
};

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
