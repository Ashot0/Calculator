const inWork = document.querySelector('.in-work')
const sumbol = document.querySelector('.symbol')
const inProcess = document.querySelector('.in-process')

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
