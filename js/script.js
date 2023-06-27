
const inWork = document.querySelector('.in-work')
const sumbol = document.querySelector('.symbol')
const inProcess = document.querySelector('.in-process')

const calculate = false;

function appendValue(valu) {
	if (calculate == false) {
		inProcess.value = toString(valu);
		calculate = true;
	} else {
		inWork.text = toString(valu);
		calculate = false;
	}

}