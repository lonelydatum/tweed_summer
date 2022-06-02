const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power4.out"
});


CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")


const {w, h} = size


const looper = {duration:.3, yoyo:true, repeat:15, ease:Linear.easeNone, rotation:"+=20"}

function starter(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".bg", {duration:.4, opacity:0, ease:Power3.easeIn})
	return tl
}

function wiggle(list){
	var tl = new TimelineMax()
	list.map(a=>{
		tl.from(a, {duration:.4, scale:0, ease:"custom", onComplete:()=>{		
			TweenLite.to(a, looper)
		}})	
	})
	return tl
}



function ender(tl){
	tl.to(".t1", {duration:.2,  opacity:0, ease:Power3.easeOut}, 4.3)
	tl.from(".t2", {duration:.5, scale:1.5, opacity:0, ease:"custom"})
}

function init(list){
	const tl = starter()
	wiggle(list)
	tl.from([".fruit-main"], {duration:.4, scale:0, ease:"custom"})	
	ender(tl)
}




function mango(){
	const tl = starter()
	tl.add(wiggle([".wiggle"]))
	
	tl.from([".fruit-main"], {duration:.4, scale:0, ease:"custom"})
	ender(tl)
}


function tweed(wiggle){
	
	const tl = starter()
	wiggle.map(a=>{
		tl.from(a, {duration:.4, scale:0, ease:"custom", onComplete:()=>{		
			TweenLite.to(a, looper)
		}})	
	})
	ender(tl)
}



export {size, init, mango, tweed, looper}