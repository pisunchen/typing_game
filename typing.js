let sample = [
    "Push yourself, because no one else is going to do it for you.",
    "Failure is the condiment that gives success its flavor.",
    "Wake up with determination. Go to bed with satisfaction.",
    "It's going to be hard, but hard does not mean impossible.",
    "Learning never exhausts the mind.",
    "The only way to do great work is to love what you do."
];

// let sample = "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello?"

let LIMIT = 60;
let temp_quote = ""
let index = 0
let input_array = []
let charactersTyped = 0

let timer_text = document.getElementById('timer_text')
let wpm_text = document.getElementById('wpm_text')
let error_text =  document.getElementById('error_text')
let reader =  document.getElementById('reader')
let input_box =  document.getElementById('input_box')

// function nextText() {
//     reader.textContent = null;
//     temp_quote = quotes_array[index]

//     temp_quote.split('').forEach(char => {
//         const charSpan = document.createElement('span')
//         charSpan.innerText = char
//         reader.appendChild(charSpan)
//     })

//     if (index < quotes_array.length -1) {
//         index++
//     } else {
//         index = 0
//     }
// }

let space = 1000;

function nextText() {
    reader.innerHTML = ""
    let words_array = sample.split(' ');
    
    if (index + 8 < words_array.length) {
        for (let i = index; i < index + 8; i++) {
            const wordSpan = document.createElement('span');
            wordSpan.innerText = words_array[i] + " "
            reader.appendChild(wordSpan)
        }
    }
    
    if (index < words_array.length-1) {
        index += 8;
    } else {
        index = 0
    }
}

let correct = 0;

function currentText() {
    let input = input_box.value ;
    input_array = input.split(' ')

    charactersTyped = input.value.length;

    if (charactersTyped == 9) {
        charactersTyped = 0;
        input_array = [];
        input_box.value = ""
        nextText();
    }

    console.log(input_array.length)

}

function checkCorrect(arr1, arr2) {
        if (arr1.length !== arr2.length) return 0;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return 0;
        }
        return 1;
    }

currentText()
