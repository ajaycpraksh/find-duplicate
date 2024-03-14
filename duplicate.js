function duplicate() {
    let input = document.getElementById('nums').value;
    let num = input.split(',');
    let output = [];

    for (let i = 0; i < num.length; i++) {
        for (var j = i + 1; j < num.length; j++) {
            if (num[i] === num[j] && !output.includes(num[i])) {
                output.push(num[i]);
            }
        }
    }

    document.getElementById('result').innerText = output.join(',');
}




function minmax() {
    var input = document.getElementById('value').value;
    var numbers = input.split(',').map(Number); 
    var min = numbers[0];
    var max = numbers[0];

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    document.getElementById('res').innerText = 'Minimum: ' + min + ', Maximum: ' + max;
}