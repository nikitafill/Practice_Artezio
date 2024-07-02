document.addEventListener("DOMContentLoaded", function() {
    const innerRectangle = document.getElementById("innerRectangle");
    let width = 100;
    let height = 100;
    let currentColorIndex = 0; 

    function updateInnerRectangle() {
        innerRectangle.style.width = `${width}px`;
        innerRectangle.style.height = `${height}px`;
        innerRectangle.style.backgroundColor = getColorByIndex(currentColorIndex);
    }

    function getColorByIndex(index) {
        switch (index) {
            case 0: return "#ffffff";
            case 1: return "#e74949";
            case 2: return "#0cb45";
            case 3: return "#e19743";
            case 4: return "#eb8277";
            case 5: return "#f2f844";
            case 6: return "#6c6af2";
            case 7: return "#ffb5e5";
            case 8: return "#cbffb5";
            case 9: return "#83f4c9";
            default: return "#ffffff"; 
        }
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case "ArrowLeft":
                if (width > 50) width -= 10;
                break;
            case "ArrowRight":
                if (width < 320) width += 10;
                break;
            case "ArrowUp":
                if (height > 50) height -= 10;
                break;
            case "ArrowDown":
                if (height < 180) height += 10;
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                currentColorIndex = parseInt(event.key);
                break;
        }

        updateInnerRectangle();
    }

    innerRectangle.addEventListener("keydown", handleKeyPress);

    updateInnerRectangle(); 
});
