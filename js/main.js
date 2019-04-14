(() => {

	console.log("Linked up"); 

 	let anchorLink = document.querySelector("#topButton"),
		top = document.getElementById("mainHeader");

	anchorLink.addEventListener("load", function() {
		console.log("ready to go to the top");
		anchorLink.style.display = "block";
	});

	anchorLink.addEventListener("click", function(e) {
    	if (window.scrollTo) {
        e.preventDefault();
        console.log("to the TOP!");
        window.scrollTo({"behavior": "smooth", "top": top.offsetTop});
    	}
	});


	const 	logoAni = document.querySelector("#logoAni");

	if (sessionStorage.getItem("logoAnimated") === null) {
		logoAni.classList.add("logoAni");
		console.log("pre-load animation");
	} else {
		console.log("pre-load animation played");
		logoAni.classList.add("hidden");
	}
		setTimeout(function() {
			console.log("pre-load said bye");
			logoAni.classList.remove("logoAni");
			sessionStorage.setItem("logoAnimated", 1);
		}, 4000);


	let button = document.querySelector("#navButton"),
		burgerCon = document.querySelector("#burgerCon"),
		leaveMenu = document.querySelector("#leaveMenu"),
		burgerOverlay = document.querySelector("#bgOverlay");

	function hamburgerMenu(){
	console.log("menu button clicked");
	burgerCon.classList.add("slideToggle");
	button.classList.add("expanded");
	burgerOverlay.classList.remove("hidden");
	}

	button.addEventListener("click", hamburgerMenu);
	

	function exitMenu() {
		console.log("close menu clicked");
		burgerCon.classList.remove("slideToggle");
		button.classList.remove("expanded");
		burgerOverlay.classList.add("hidden");
	}
	
	leaveMenu.addEventListener("click", exitMenu);

	function closeMenu() {

		if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
		console.log("media query fired");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
		}
	}


	window.addEventListener("resize", closeMenu);

	let membershipBut = document.querySelectorAll(".membershipBut"),
		membershipPage = document.querySelector("#membership"),
		leaveMemB = document.querySelector("#leaveMem");

	

	function showMem() {
		console.log("show membership page");
		membershipPage.classList.add("showMem");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');


	}
	const	clickTo = document.querySelectorAll(".clickToB");

		clickTo.forEach(clickT => clickT.addEventListener("click", function(e) {
		console.log("payment method selected");
		e.currentTarget.classList.toggle("clickedBut");
	}));

	function leaveMem() {
		console.log("close membership page");
		membershipPage.classList.remove("showMem");
	}
	
	leaveMemB.addEventListener("click", leaveMem);
	membershipBut.forEach(membershipButton => membershipButton.addEventListener("click", showMem));


	
	

})();

