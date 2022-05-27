


import {init} from '../../_common/js/common.js'








function start(){
	
	const tl = init()	

	
	


	tl.from(".bg", {duration:.4, opacity:0, ease:Power3.easeIn})
	tl.from(".hand", {duration:.3, x:"+=130", ease:Power3.easeOut})
	tl.from(["._swirl", "._lime-bottom", "._lime-top"], {duration:.4, scale:0, ease:Back.easeOut})
	tl.from(["._lemon-top", "._lemon-ring", "._lemon-right", "._lemon-left"], {duration:.4, scale:0, ease:Back.easeOut})
	tl.from(["._lemon-main"], {duration:.4, scale:0, ease:Back.easeOut})

	tl.from(".t1", {duration:.65, scale:1, opacity:0, ease:Back.easeIn})
	tl.from(".cta", {duration:.3, opacity:0, ease:Power3.easeOut}, "+=.3")


	tl.from([".logo", ".legal"], {duration:.3, opacity:0, ease:Power3.easeOut}, "+=.5")

}


start()



module.exports = {};

