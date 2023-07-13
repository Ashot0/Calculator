const inWork = document.querySelector('.in-work')
const sumbol = document.querySelector('.symbol')
const inProcess = document.querySelector('.in-process')
const pageBody = document.querySelector('.wrapper')

let numInProcess = 0;
let calculating = false;

function appendValue(numPress) {
	inProcess.innerHTML = inProcess.textContent + numPress
}

function allClear() {
	inProcess.innerHTML = '';
	inWork.innerHTML = '';
	sumbol.innerHTML = '';
}

function deleteLastSumbol() {
	inProcess.innerHTML = inProcess.textContent.substring(0, inProcess.textContent.length - 1);
}

function appendToken(tokenPress) {
	if (inProcess.textContent != '') {
		if (inWork.textContent == '') {
			sumbol.innerHTML = tokenPress;
			inWork.innerHTML = inProcess.textContent;
			inProcess.innerHTML = '';
		} else {
			sumbol.innerHTML = tokenPress;
			inWork.innerHTML = complete('up')
			sumbol.innerHTML = tokenPress;
		}
	}

}

function sqeert() {
	inProcess.innerHTML = Math.sqrt(inProcess.textContent)
}

function complete(param) {
	let one = parseFloat(inWork.textContent)
	let two = parseFloat(inProcess.textContent)
	let token = sumbol.textContent
	var final = eval(`${one} ${token} ${two}`);
	final = Math.floor(final * 100000000) / 100000000;
	if (param == 'down') {
		if (isNaN(final)) {
			alert("Error")
		} else {
			inProcess.innerHTML = final;
			inWork.innerHTML = '';
			sumbol.innerHTML = '';
		}
	} else {
		return final;
	}
}
let flashBool;
let flashBtn = document.querySelector('.button__on-off')
function flashBoolFunc() {
	if (flashBool == true) {
		flashBool = false;
	} else {
		flashBool = true;
	}
}




let clickFlashLight = document.querySelectorAll(".calculator__btns");
for (let i = 0; i < clickFlashLight.length; i++) {
	clickFlashLight[i].onclick = function () {
		if (flashBool == true) {
			document.body.classList.toggle('body__duo')
			flashLight()
		}
	}
}
async function flashLight() {

	pageBody.classList.add('body__flash-light')
	setTimeout(() => {
		pageBody.classList.remove('body__flash-light')
	}, 100);

}

