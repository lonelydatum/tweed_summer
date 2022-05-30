


import {init} from '../../_common/js/common.js'








function start(){
	
	const tl = new TimelineMax({onComplete:()=>{
		
	}})

	

	tl.set(".frame1", {opacity:1})

	
	tl.from(".t1", {duration:.65, scale:1.5, opacity:0, ease:Back.easeIn})


	tl.from(".bg", {duration:.4, opacity:0, ease:Power3.easeIn})
	tl.from(".hand", {duration:.3, x:"+=130", ease:Power3.easeOut})
	tl.from(["._swirl", "._lime-bottom", "._lime-top"], {duration:.4, scale:0, ease:"custom", onComplete:()=>{
		console.log('lkj');
		TweenLite.to(["._swirl", "._lime-bottom", "._lime-top"], {duration:.3, yoyo:true, repeat:8, ease:Linear.easeNone, rotation:"+=11"})

	}})
	tl.from(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], {duration:.4, scale:0, ease:"custom", onComplete:()=>{
		TweenLite.to(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], {duration:.3, yoyo:true, repeat:8, ease:Linear.easeNone, rotation:"+=11"})

	}})
	tl.from(["._lemon-main"], {duration:.4, scale:0, ease:"custom"})



	
	tl.to(".t1", {duration:.2,  opacity:0, ease:Power3.easeOut}, 4.3)
	tl.from(".t2", {duration:.65, scale:1.5, opacity:0, ease:"custom"})
	
	tl.from(".cta", {duration:.3, opacity:0, ease:Power3.easeOut}, "+=.3")


	tl.from([".logo", ".legal"], {duration:.3, opacity:0, ease:Power3.easeOut}, "+=.5")



}


start()



module.exports = {};

