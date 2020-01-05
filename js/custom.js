//Vanila SlideShow Initialize
vanillaSlideshow.init({
        slideshow: false,
        delay: 5000,
        arrows: false,
        indicators: true,
        random: false,
        animationSpeed: '1s'
      });

      $(document).ready(function(){
      	//Customize Vanila JS
        $( "#vanilla-indicators .vanilla-indicators:nth-child(1)" ).append("<a href='#'>Tactical Communication</a>");
        $( "#vanilla-indicators .vanilla-indicators:nth-child(2)" ).append("<a href='#'>Secure Communication & Connectivity</a>");
        $( "#vanilla-indicators .vanilla-indicators:nth-child(3)" ).append("<a href='#'>Robotics</a>");
        $( "#vanilla-indicators .vanilla-indicators:nth-child(4)" ).append("<a href='#'>Aerial Survey & Reconnaissance</a>");
        $( "#vanilla-indicators .vanilla-indicators:nth-child(5)" ).append("<a href='#'>Export-Import</a>");
        $( "#vanilla-indicators .vanilla-indicators:nth-child(6)" ).append("<a href='#'>Research & Development</a>");

      });