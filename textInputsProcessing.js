document.addEventListener("DOMContentLoaded", function() {
    
    const textInput = document.getElementById("textInput");
    const hintText1 = document.getElementById("hintText1");

    const textAreaInput = document.getElementById("textAreaInput");
    const hintText2 = document.getElementById("hintText2");
    const wordCount = document.getElementById("wordCount");
    const lineCount = document.getElementById("lineCount");

    const checkInput = document.getElementById("checkInput");
    const hintText3 = document.getElementById("hintText3");

    const checkTextAreaInput = document.getElementById("checkTextAreaInput");
    const hintText4 = document.getElementById("hintText4");

    const MAX_CHARACTERS = 10; 

    function countCharacters(text) {
        return text.length;
    }

    function updateInputCounts() {
        const text = textInput.value;
        hintText1.textContent = "Количество символов: " + countCharacters(text);
    }

    function updateTextAreaCounts() {
        const text = textAreaInput.value;
        hintText2.textContent = "Количество символов: " + countCharacters(text);

        const words = text.match(/\w+/g);
        const numWords = words ? words.length : 0;
        wordCount.textContent = "Количество слов: " + numWords;

        const lines = text.split(/\r*\n/).filter(line => line.trim() !== '');
        const numLines = lines.length;
        lineCount.textContent = "Количество строк: " + numLines;
    }

    function checkInputCounts() {
        const text = checkInput.value;
        const remaining = MAX_CHARACTERS - text.length;

        if (remaining >= 0) {
            hintText3.textContent = "Осталось символов: " + remaining;
            hintText3.style.color = "black"; 
        } else {
            hintText3.innerHTML = "&#10005 Превышено символов: " + Math.abs(remaining);
            hintText3.style.color = "red"; 
        }
    }

    function checkTextAreaInputCounts() {
        const text = checkTextAreaInput.value;
        const remaining = MAX_CHARACTERS - text.length;

        if (restrictInput.checked && remaining < 0) {
            checkTextAreaInput.value = text.slice(0, MAX_CHARACTERS); // Отсекаем лишние символы
            hintText4.textContent = "Осталось символов: 0";
        } else if (remaining >= 0) {
            hintText4.textContent = "Осталось символов: " + remaining;
            hintText4.style.color = "black"; 
        } else {
            hintText4.innerHTML = "&#10005 Превышено символов: " + Math.abs(remaining);
            hintText4.style.color = "red"; 
        }
    }
    
    textAreaInput.addEventListener("input", updateTextAreaCounts);
    textInput.addEventListener("input", updateInputCounts);
    checkInput.addEventListener("input", checkInputCounts);
    checkTextAreaInput.addEventListener("input", checkTextAreaInputCounts);

    updateInputCounts();
    updateTextAreaCounts();
    checkInputCounts();
    checkTextAreaInputCounts();
});
