(() => {

	console.log("Linked up"); 


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


	const button = document.querySelector("#navButton"),
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

	const membershipBut = document.querySelectorAll(".membershipBut"),
		membershipPage = document.querySelector("#membership"),
		leaveMemB = document.querySelector("#leaveMem");

	

	function showMem() {
		console.log("show membership page");
		membershipPage.classList.add("showMem");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
	}

	const	clickTo = document.querySelectorAll(".clickToB");

		clickTo.forEach(clickT => clickT.addEventListener("click", function(b) {
		console.log("payment method selected");
		b.currentTarget.classList.toggle("clickedBut");
	}));


	function leaveMem() {
		console.log("close membership page");
		membershipPage.classList.remove("showMem");
	}
	
	leaveMemB.addEventListener("click", leaveMem);
	membershipBut.forEach(membershipButton => membershipButton.addEventListener("click", showMem));

	const fundBut = document.querySelector("#fundBut"),
		fundPage = document.querySelector("#fundPage"),
		exitFund = document.querySelector("#exitFund");
	
	function showFund() {
		console.log("show fundraising page");
		fundPage.classList.add("showFund");
	}

	function fundVB() {
		console.log("new video.");
		let fundVideo = document.querySelector("#videoS");
		if (window.matchMedia("(min-width: 650px)").matches) {
			fundVideo.src = "../video/fund_video_desktop.mp4";
		}
	}

	function fundVS() {
		console.log("new video.");
		let fundVideo = document.querySelector("#videoS");
		if (window.matchMedia("(min-width: 450px)").matches) {
			fundVideo.src = "../video/fund_video_mobile.mp4";
		}
	}
	
	window.addEventListener("resize", fundVS);
	window.addEventListener("resize", fundVB);

	function closeFund() {
		console.log("close fundraising page");
		fundPage.classList.remove("showFund");
	}

	fundBut.addEventListener("click", showFund);
	exitFund.addEventListener("click", closeFund);

	const 	toLeft = document.querySelector("#toLeft"),
			toRight = document.querySelector("#toRight"),
			banners = document.querySelectorAll(".events");
			

	function moveRight() {
		let lastOne = document.querySelector(".events:last-child"),
			whereLast = lastOne.getBoundingClientRect();
		// console.log(whereLast.right);

		if (whereLast.right > 512.5) {
			TweenMax.to(banners, 0.8, {x: "-=260"});
			console.log("next thing.");
		} else {
			TweenMax.killTweensOf(banners);
		}
	}

	function moveLeft() {
		let	firstOne = document.querySelector(".events:first-child"),
			whereFirst = firstOne.getBoundingClientRect();
		// console.log(whereFirst.left);

		if (whereFirst.left < 53.5) {
			TweenMax.to(banners, 0.8, {x: "+=260"});
			console.log("back to last one.");
		} else {
			TweenMax.killTweensOf(banners);
		}
	}

	toLeft.addEventListener("click", moveLeft);
	toRight.addEventListener("click", moveRight);

	const toTop = document.querySelector("#topButton"),
		top = document.querySelector("#mainHeader");

	toTop.addEventListener("load", function() {
		console.log("ready to go to the top");
		toTop.style.display = "block";
	});

	function totheTop(e) {
		e.preventDefault();
		console.log("to the TOP!");
		
        window.scrollTo({"behavior": "smooth", "top": top.offsetTop});

    }

	toTop.addEventListener("click", totheTop);

})();

