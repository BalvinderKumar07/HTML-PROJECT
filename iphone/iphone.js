
        const modeBtn = document.getElementById('mode');
        modeBtn.onchange = (e) => {
            if (modeBtn.checked === true) {
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                window.localStorage.setItem('mode', 'dark');
            } else {
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                window.localStorage.setItem('mode', 'light');
            }
        }
        const mode = window.localStorage.getItem('mode');
        if (mode == 'dark') {
            modeBtn.checked = true;
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        }

        if (mode == 'light') {
            modeBtn.checked = false;
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }

        // const modeBtn = document.getElementById('mode');
        modeBtn.onchange = (e) => {
            if (modeBtn.checked === true) {
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                window.localStorage.setItem('mode', 'dark');
            } else {
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                window.localStorage.setItem('mode', 'light');
            }
        }

        const mode1 = window.localStorage.getItem('mode');
        if (mode1 == 'dark') {
            modeBtn.checked = true;
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        }

        if (mode1 == 'light') {
            modeBtn.checked = false;
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
        // ====================================================================

        // Get a reference to the HTML element you want to add divs to
        var container = document.getElementById('myContainer');

        // Get a reference to the button that will trigger the addition of the div
        var addButton1 = document.getElementById('team_thumb1');
        var addButton2 = document.getElementById('team_thumb2');
        var addButton3 = document.getElementById('team_thumb3');
        var addButton4 = document.getElementById('team_thumb4');
        var addButton5 = document.getElementById('team_thumb5');

        // Set the maximum number of divs that can be added
        var divNo1 = document.getElementById('div1');
        var divNo2 = document.getElementById('div2');
        var divNo3 = document.getElementById('div3');
        var divNo4 = document.getElementById('div4');
        var divNo5 = document.getElementById('div5');

        // div no 1
        addButton1.addEventListener('click', function (event) {
            divNo1.style.display = "block";
            divNo2.style.display = "none";
            divNo3.style.display = "none";
            divNo4.style.display = "none";
            divNo5.style.display = "none";
        });
        addButton1.addEventListener('click', function (event) {
            divNo1.style.display = "none";
            divNo1.style.display = "block";
        });
        // div no 2
        addButton2.addEventListener('click', function (event) {
            divNo2.style.display = "block";
            divNo1.style.display = "none";
            divNo3.style.display = "none";
            divNo4.style.display = "none";
            divNo5.style.display = "none";
        })
        addButton2.addEventListener('click', function (event) {
            divNo2.style.display = "none";
            divNo2.style.display = "block";
        });
        // div no 3
        addButton3.addEventListener('click', function (event) {
            divNo3.style.display = "block";
            divNo2.style.display = "none";
            divNo2.style.display = "none";
            divNo4.style.display = "none";
            divNo5.style.display = "none";
        });
        addButton3.addEventListener('click', function (event) {
            divNo3.style.display = "none";
            divNo3.style.display = "block";
            divNo2.style.display = "none";
        });
        // div no 4
        addButton4.addEventListener('click', function (event) {
            divNo4.style.display = "block";
            divNo3.style.display = "none";
            divNo2.style.display = "none";
            divNo3.style.display = "none";
            divNo5.style.display = "none";
        });
        addButton4.addEventListener('click', function (event) {
            divNo4.style.display = "none";
            divNo4.style.display = "block";
            divNo3.style.display = "none";
        });
        // div no 5
        addButton5.addEventListener('click', function (event) {
            divNo5.style.display = "block";
            divNo4.style.display = "none";
            divNo2.style.display = "none";
            divNo3.style.display = "none";
            divNo4.style.display = "none";
        });
        addButton5.addEventListener('click', function (event) {
            divNo5.style.display = "none";
            divNo5.style.display = "block";
            divNo4.style.display = "none";
        });


