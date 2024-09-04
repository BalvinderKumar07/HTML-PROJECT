
        function openNav() {
            var width = document.getElementById("mySidenav");
            var blur = document.querySelector('#main-sidebar');
            var m_width = document.getElementById("main-sidebar");
            if (window.innerWidth < 768) {
                width.style.width = '100%';
            } else {
                width.style.width = '450px';
                blur.style.backdropFilter = 'blur(30px)';
                m_width.style.display = "block";
            }
        }
        function closeNav() {
            var width = document.getElementById("mySidenav");
            var blur = document.querySelector('#main-sidebar');
            var m_width = document.getElementById("main-sidebar");
            width.style.width = "0";
            m_width.style.display = "none";
            blur.style.backdropFilter = 'blur(0px)';
        }

        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("nav_img").style.width = "150px";
                document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.7)";
                document.getElementById("navbar").style.zIndex = "9999";
                document.getElementById("navbar").style.padding = "5px 7%";
                if (screenTop == currentScrollPos) {
                    document.getElementById("navbar").style.top = "0px";
                    document.getElementById("navbar").style.background = "transparent";
                    document.getElementById("nav_img").style.width = "200px";
                }
            }
            else {
                document.getElementById("navbar").style.top = " -100px";
                document.getElementById("navbar").style.background = "transparent";
                document.getElementById("main_header").style.backdropFilter = "blur(0)";
            }
            prevScrollpos = currentScrollPos;
        }

        // Get a reference to the button that will trigger the addition of the div
        var addButton1 = document.getElementById('about');
        var addButton2 = document.getElementById('sub-link');

        // Set the maximum number of divs that can be added
        var divNo1 = document.getElementById('sub-link');

        // div no 1
        addButton1.addEventListener('mouseover', function (event) {
            divNo1.style.display = "block";
            divNo1.style.transform = "translateY(0)";
        });
        addButton1.addEventListener('mouseout', function (event) {
            divNo1.style.display = "block";
        });
        addButton2.addEventListener('mouseover', function (event) {
            divNo1.style.display = "block";
        });
        addButton2.addEventListener('mouseout', function (event) {
            divNo1.style.display = "none";
        });
