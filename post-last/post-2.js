$(".container").hover(function () {
     $(".animate-card").show();
     $(".animate-card").css(stylesanimateCard);
  
    setTimeout(() => {
      $(".animate-card").css(stylesanimateCard2);
    }, 700);

  
    setTimeout(() => {
      $(".words p").show();
     }, 1100);
  

  });
  
  var stylesanimateCard = {
    backgroundColor: "var(--color2)",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "10px",
    animationName: "example",
    animationDuration: "1.4s",  
  };
  
  var stylesanimateCard2 = {
    width: "100%",
    height:"100%",
  };
  

  