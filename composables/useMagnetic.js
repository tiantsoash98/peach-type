import gsap from "gsap";

export default () => {
    // https://codepen.io/tdesero/pen/RmoxQg
    const strength = 75;

    const magnetize = () => {
        var magnets = document.querySelectorAll('.magnetic')

        magnets.forEach( (magnet) => {
            magnet.addEventListener('mousemove', moveMagnet );
            magnet.addEventListener('mouseout', function(event) {
                gsap.to( event.currentTarget, {x: 0, y: 0, ease: "power4.easeOut", duration: 1})
            } );
        });
    }

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()
      
        gsap.to( magnetButton, {
            x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
            y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
            ease: "power4.easeOut",
            duration: 1
        })
    }

    const resetMagnetize = () => {
        var magnets = document.querySelectorAll('.magnetic')

        magnets.forEach( (magnet) => {
            magnet.removeEventListener('mousemove');
        });
    }
    
    return { 
        magnetize,
        resetMagnetize
    }
}