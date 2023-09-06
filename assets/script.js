// Swipper Slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    GrabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Gsap Animations
gsap.registerPlugin(ScrollTrigger);
// page 1 ---------------------------------------
    gsap.from("#page1 #a img",{
        y:150,
        duration:3, 
        ease:"power3",
        stagger:.4
    });

    gsap.from("#page1 #b img",{
        x:150,
        duration:3, 
        ease:"power3",
        stagger:.2,
    });
    gsap.from("#page1 #c img",{
        y:-150,
        duration:3, 
        ease:"power3",
        stagger:.2,
    });
    gsap.from("#page1 h1",{
        x:-150,
        duration:3, 
        ease:"power3",
        stagger:.2,
    });

// page 2 ---------------------------------------

gsap.from("#page2 h1, #page2 h3 ",{
    opacity:0,
    y:150,
    duration:1, 
    ease:"power3",
    stagger:.2,
    scrollTrigger:{
        trigger:'#page2',
        scroller: 'body',
        // markers: true,
        start: "top 85%",
        end: "bottom 34%",
        scrub:true
    }
});



    tl = gsap.timeline();
    
        tl.from("#page3 #pgright",{
                opacity:0,
                y:150,
                duration:3, 
                ease:"power3",
                stagger:.2,
                scrollTrigger:{
                    trigger:"#page3",
                    scroller:"body",
                    start:"top 70%",
                    end:"bottom 50%",
                    // markers:true,
                    scrub:true
                     }
        });

        tl.from("#page3 #pgleft img",{
            opacity:0,
            x:-150,
            duration:4, 
            ease:"power4",
            // stagger:.4,
            scrollTrigger:{
                trigger:'#page3',
                scroller:"body",
                // markers:true,
                start:"top 60%",
                end:"bottom 30%",
                scrub:true
                 }
    });

    toggle =document.querySelector("#menu-toggle:checked")
    logo = document.querySelector("#logo img")
    if( toggle == true){
        logo.style.display = "none"
    }
        

