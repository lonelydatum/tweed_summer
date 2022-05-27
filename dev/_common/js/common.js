const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power4.out"
});



const {w, h} = size




function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	

	tl.set(".frame1", {opacity:1})

	

	return tl
}




export {size, init}