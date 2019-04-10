(() => {

	console.log("Linked up");

 	let anchorLink = document.querySelector("#topButton"),
		top = document.getElementById("mainHeader");

	anchorLink.addEventListener("load", function() {
		anchorLink.style.display = "block";
	});

	anchorLink.addEventListener("click", function(e) {
    	if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": top.offsetTop});
    	}
	});


	const 	logoAni = document.querySelector("#logoAni");

	if (sessionStorage.getItem("logoAnimated") === null) {
		logoAni.classList.add("logoAni");
	} else {
		return;
	}
		setTimeout(function() {
			logoAni.classList.remove("logoAni");
			sessionStorage.setItem("logoAnimated", 1);
		}, 4000);


	let button = document.querySelector("#navButton"),
		burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function closeMenu() {

		if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
		console.log("media query fired");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
		}

	}

	button.addEventListener("click", hamburgerMenu, false);

	window.addEventListener("resize", closeMenu);

})();

