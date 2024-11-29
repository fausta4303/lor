let angelaImg = document.querySelector("#Angela")
let wheelchairImg = document.querySelector("#wheelChairAngela")
let isClicked = false;
angelaImg.addEventListener("click", () => {
	if(isClicked == false){
		isClicked = true;
		
		//fade out
		var initialOP = 1;
		var timer = setInterval(function() {
			if(initialOP <= 0){
				console.log("YOE");
				angelaImg.style.display = 'none';
				clearInterval(timer);
			}
			angelaImg.style.opacity = initialOP;
			initialOP -= 0.01;
		});


		//fade the meme in :D
		setTimeout(function(){
			var wheelChairOP = 0;
			wheelchairImg.style.display = 'block';
			var timer2 = setInterval(function() {
				if(wheelChairOP >= 1){
					console.log("DONE");
					clearInterval(timer2);
				}
				wheelchairImg.style.opacity = wheelChairOP;
				wheelChairOP += 0.01;
			});
		}, 1000);
		//angelaImg
		
		
		console.log("bruh");
	}
});
