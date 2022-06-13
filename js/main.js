

$(window).on("load",function()
{    
  //preloader
  $(".preloader").fadeOut(1000);
  
  //home section slideshow
     let SlideIndex = $(".slide.active").index();
     const slideLen=$(".slide").length;
     
     function slideShow()
     {
       $(".slide").removeClass("active").eq(SlideIndex).addClass("active");
       if(SlideIndex == slideLen-1){
         SlideIndex = 0;
        
       }
       else{
         SlideIndex++;
       }
       setTimeout(slideShow,5000);
     }
     slideShow();
})

$(document).ready(function(){
  //nav toggle
  $(".hamburger-btn").click(function(){
    $(".header .nav").slideToggle();
  })
  $(".header .nav a").click(function(){
      $(".header .nav").slideToggle();
  })

  //fixed header
  $(window).scroll(function(){
    if($(this).scrollTop() > 100)
    {
       $(".header").addClass("fixed");
    }
    else{
      $("header").removeClass("fixed");
    }

  })
   
   //scrollIt
   $.scrollIt({
    topOffset: -50
   });

  //people filter
  peopleFilter($(".filter-btn.active").attr("data-target"))
  
  $(".filter-btn").click(function(){
    if(!$(this).hasClass("active"))
    {
    peopleFilter($(this).attr("data-target"))
    }
  })

  function peopleFilter(target){
    console.log(target) 
    $(".filter-btn").removeClass("active");
    $(".filter-btn[data-target='"+target+"']").addClass("active");
    $(".people-items").hide();
    $(".people-items[data-category='"+target+"']").fadeIn();

  }

  //gallery topup
  const wHeight = $(window).height();
  $(".gallery-popup .gp-img").css("max-height",wHeight + "px");

  let itemIndex = 0;
  const totalGalleryItems= $(".gallery-item").length;

  $(".gallery-item").click(function(){
    itemIndex = $(this).index();
    $(".gallery-popup").addClass("open");
    $(".gallery-popup .gp-img").hide();
    gpSlideShow();
  })
     
  $(".gp-controls .next").click(function(){
    if(itemIndex == totalGalleryItems-1)
    {
      itemIndex = 0;
    }
    else
    {
      itemIndex++;
    }
    $(".gallery-popup .gp-img").fadeOut(function(){
       gpSlideShow();
    })
  })

  $(".gp-controls .prev").click(function(){
    if(itemIndex == 0)
    {
      itemIndex = totalGalleryItems-1;
    }
    else
    {
      itemIndex--;
    }
    $(".gallery-popup .gp-img").fadeOut(function(){
       gpSlideShow();
    })
    console.log(itemIndex)
  })


  function gpSlideShow()
  {
    const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-target");
    $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
    $(".gp-counter").text((itemIndex+1)+"/"+totalGalleryItems);
  }

  //close gallery popup

  $(".gp-close").click(function(){
    $(".gallery-popup").removeClass("open");
  })

  // hide gallery popup when click outside of cintainer

  $(".gallery-popup").click(function(event){
    if($(event.target).hasClass("open"))
    {
      $(".gallery-popup").removeClass("open");
    }
  })

})