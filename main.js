// Get the current time
    function getCurrentTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add leading zeros if needed
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        // Format the time
        let currentTimeString = hours + ":" + minutes + ":" + seconds;

        return currentTimeString;
    }

    // Update the HTML with the current time
    function updateTime() {
        let currentTimeElement = document.getElementById("currentTime");
        currentTimeElement.textContent = getCurrentTime();
    }

    // Update the time every second
    //setInterval(updateTime, 1000);

    // Initial call to display the time immediately
    updateTime();
