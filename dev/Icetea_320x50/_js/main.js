import {tweed} from '../../_common/js/common.js'

gsap.defaults({
  ease: "power4.out"
});


CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")


// const {w, h} = size






function init(){
	tweed([".wiggle"])
}



init()