$(document).ready(function() {
	///Slider Start/////////////////////////////////
	var mybg = document.querySelector(".afternav");
            //mybg.style.backgroundImage = "url(img/rightimg.png)";
            mybg.style.cssText="transition-duration: 2s; -o-transition-duration: 2s; -moz-transition-duration: 2s; -webkit-transition-duration: 2s";
            var bg = ["url(img/rightimg2.png)", "url(img/rightimg4.png)" ];
            var nextbg = 0;
            setInterval(function () {
               
            mybg.style.backgroundImage = bg[nextbg++ % bg.length];
            
        }, 3000);

            ////////////slider finish//////////////////
		   });