let sample = [
    "According to all known laws of aviation,",
    "there is no way a bee should be able to fly.",
    "Its wings are too small to get",
    "its fat little body off the ground.",
    "The bee, of course, flies anyways",
    "because bees don't care.",
    "what humans think is impossible.",
    "Yellow, black. Yellow, black.",
    "Ooh, black and yellow!",
    "Let's shake it up a little.",
    "We know that you, as a bee,",
    "have worked your whole life",
    "to get to the point where you",
    "can work for your whole life.",
    "Honey begins when our valiant Pollen",
    "Jocks bring the nectar to the hive."
];

function addSpace(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] += " "
        console.log(arr[i])
    }
    sample = arr;
}


let LIMIT = 60;
let temp_quote = ""
let index = 0
let input_array = []
let charactersTyped = 0
let sum_error = 0
let elapsed_time = 0;

let timer_text = document.getElementById('timer_text')
let wpm_text = document.getElementById('wpm_text')
let error_text =  document.getElementById('error_text')
let reader =  document.getElementById('reader')
let input_box =  document.getElementById('input_box')
let card_reader = document.getElementById('card_reader')
let card_result = document.getElementById('card_result')
let accuracy_text = document.getElementById('accuracy_text')
let words_typed = document.getElementById('words_typed')
let space = 1000;


function nextText() {
    reader.textContent = null
    temp_quote = sample[index]

    temp_quote.split('').forEach(char => {
        let charSpan = document.createElement('span')
        charSpan.innerText = char
        reader.appendChild(charSpan)
    })

    if (index < sample.length -1) {
        index++
    } else {
        index = 0
    }
}

function currentText() {
    input_box.placeholder = ""
    let input = input_box.value;
    input_array = input.split('')

    charactersTyped++
    

    let error = 0
    let spanArray = reader.querySelectorAll('span')
    spanArray.forEach((char, idx) => {
        let typedChar = input_array[idx]

        if (typedChar == null) {
            char.classList.remove('text-primary')
            char.classList.remove('text-warning')
        } else if (typedChar === char.innerText) {
            char.classList.add('text-primary')
            char.classList.remove('text-warning')
        } else {
            char.classList.remove('text-primary')
            char.classList.add('text-warning')
            error++
        }
    })
    error_text.textContent = sum_error + error

    if (input_array.length == temp_quote.length) {
        sum_error += error
        input_box.value = "";
        nextText();
    }

    let correct = (charactersTyped - (sum_error + error))
    let accuracy = Math.round((correct/charactersTyped)*100)
    accuracy_text.innerHTML = "Accuracy: "+accuracy+"%"

}

function countDown() {
    if (LIMIT > 0){
        LIMIT--
        elapsed_time = 60 - LIMIT
        timer_text.innerHTML = LIMIT + "s"
        let wpm = Math.round(((charactersTyped/5)/elapsed_time)*60,2)
        wpm_text.innerHTML = wpm
        words_typed.innerHTML = "Words Typed: "+ (charactersTyped/5)
    }

    if (LIMIT <= 10) {
        timer_text.classList.add('text-danger')
        if (LIMIT <= 0) {
            input_box.classList.add("d-none")
            card_reader.classList.add("d-none")
            setTimeout(() => {
                card_result.classList.add("d-block")
            }, 500)
        }
    }

}

function startTimer() {
    // addSpace(sample)
    disableEnter()
    setInterval(countDown, 1000)
}

function resetAll() {
    location.reload()
}



function disableEnter() {
$("textarea").keydown(function(e){
    if (e.keyCode == 13 && !e.shiftKey)
    {
        e.preventDefault();
    }
    });
}