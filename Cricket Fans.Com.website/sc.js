let item = document.getElementById('li');


// function pp() {
// 	item[0].classList.add('active');
// }
for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

