function calculateResult() {
    var num1 = parseFloat(document.getElementById('number1').value) || 0;
    var num2 = parseFloat(document.getElementById('number2').value) || 0;
    var num3 = parseFloat(document.getElementById('number3').value) || 0;
    var num4 = parseFloat(document.getElementById('number4').value) || 0;
    var num5 = parseFloat(document.getElementById('number5').value) || 0;
    var num6 = parseFloat(document.getElementById('number6').value) || 0;
    var num7 = parseFloat(document.getElementById('number7').value) || 0;
    var num8 = parseFloat(document.getElementById('number8').value) || 0;
    var num9 = parseFloat(document.getElementById('number9').value) || 0;
    var num10 = parseFloat(document.getElementById('number10').value) || 0;

    var A = num1 - num2;
    var B = num3;
    var C = num5 - num4;
    var D = num6;
    var E = num8 - num7;
    var F = num10 - num9;

    var result = D + F + A - B - C - E;

    document.getElementById('result').innerText = 'Result: ' + result;
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    calculateResult();
                }
		// Scroll the container so the next input is visible
                container.scrollTop = input.offsetTop - container.offsetTop;
            }
        });
    });
	
// Scroll container to bottom when result is visible
const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.target.style.display !== 'none' && mutation.target.textContent !== '') {
			const container = document.querySelector('.container');
			container.scrollTop = container.scrollHeight;
		}
	});
});

observer.observe(result, { attributes: true, childList: true, subtree: true });
	
});
