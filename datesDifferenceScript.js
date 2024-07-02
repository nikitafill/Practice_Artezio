document.addEventListener("DOMContentLoaded", function() {
    const currentDateElement = document.getElementById("currentDate");
    const daySelect = document.getElementById("daySelect");
    const monthSelect = document.getElementById("monthSelect");
    const yearSelect = document.getElementById("yearSelect");
    const dateDifferenceElement = document.getElementById("dateDifference");

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    currentDateElement.innerHTML = `<strong>Сегодня:</strong> ${currentDay} ${months[currentMonth]} ${currentYear} года`;

    function populateDays(month, year) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        daySelect.innerHTML = "";
        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    function populateMonths() {
        months.forEach((month, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = month;
            monthSelect.appendChild(option);
        });
    }

    function populateYears() {
        for (let i = currentYear; i >= 1900; i--) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }
    }

    function updateDateDifference() {
        const selectedDay = parseInt(daySelect.value);
        const selectedMonth = parseInt(monthSelect.value);
        const selectedYear = parseInt(yearSelect.value);

        const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
        const timeDifference = currentDate - selectedDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            dateDifferenceElement.textContent = "Событие произошло сегодня.";
        } else if (daysDifference > 0) {
            const years = Math.floor(daysDifference / 365);
            const months = Math.floor((daysDifference % 365) / 30);
            const days = daysDifference % 30;
            let message = "Событие произошло ";
            if (years > 0) message += `<strong>${years} лет</strong> `;
            if (months > 0) message += `<strong>${months} месяцев</strong> `;
            if (days > 0) message += `<strong>${days} дней</strong> `;
            message += "назад.";
            dateDifferenceElement.innerHTML = message;
        } else {
            dateDifferenceElement.textContent = "Событие еще не произошло.";
        }
    }

    populateMonths();
    populateYears();
    populateDays(currentMonth, currentYear);

    daySelect.value = currentDay;
    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;

    daySelect.addEventListener("change", updateDateDifference);
    monthSelect.addEventListener("change", function() {
        populateDays(parseInt(monthSelect.value), parseInt(yearSelect.value));
        updateDateDifference();
    });
    yearSelect.addEventListener("change", function() {
        populateDays(parseInt(monthSelect.value), parseInt(yearSelect.value));
        updateDateDifference();
    });

    updateDateDifference();
});