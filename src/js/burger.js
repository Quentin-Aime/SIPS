var elBurger = document.querySelector('.header-Burger');
var elHeaderMenu = document.querySelector('.header-ListContainer');
var elHeaderMenuList = document.querySelectorAll('.header-ListContainer-ListItems');


elBurger.addEventListener('click', function() {
	if (elHeaderMenu.style.marginTop === "") {
		for (let i = 0; i < elHeaderMenuList.length; i++){
			elHeaderMenuList[i].style.display = "block";
		}
		elHeaderMenu.style.marginTop = "0";
	}
	else {
		elHeaderMenu.style.marginTop = "";
		id = window.setTimeout(function disappearList() {
			for (let i = 0; i < elHeaderMenuList.length; i++){
				elHeaderMenuList[i].style.display = "";
			}
		}, 1000);
		clearTimeout(id);
	}
});

