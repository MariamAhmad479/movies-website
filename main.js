var swiper = new Swiper(".new-movies", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 755500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },

        320:{
            slidesPerView:2,
            spaceBetween:10,
        },

        510:{
            slidesPerView:2,
            spaceBetween:10,
        },

        758:{
            slidesPerView:3,
            spaceBetween:15,
        },

        900:{
            slidesPerView:4,
            spaceBetween:20,
        }
    }
  });


  var swiper = new Swiper(".popular-movies", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 755500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },

        320:{
            slidesPerView:2,
            spaceBetween:10,
        },

        510:{
            slidesPerView:2,
            spaceBetween:10,
        },

        758:{
            slidesPerView:3,
            spaceBetween:15,
        },

        900:{
            slidesPerView:4,
            spaceBetween:20,
        }
    }
  });

  var videoContainer=document.getElementById("videoContainer");
    var myvideo=document.getElementById("myvideo");
  document.getElementById("watchButton").addEventListener("click", function(){
    videoContainer.style.display="block";
    myvideo.play();
  });
  document.getElementById("closeVideo").addEventListener("click", function(){
    myvideo.pause();
    videoContainer.style.display="none";
  });

  var videoContainer2=document.getElementById("videoContainer2");
    var myvideo2=document.getElementById("myvideo2");
  document.getElementById("watchButton2").addEventListener("click", function(){
    videoContainer2.style.display="block";
    myvideo2.play();
  });
  document.getElementById("closeVideo2").addEventListener("click", function(){
    myvideo2.pause();
    videoContainer2.style.display="none";
  });

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    window.location.href = "main.html"; // Redirect to main.html
});

