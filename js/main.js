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
})();

