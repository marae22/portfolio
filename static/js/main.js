
document.querySelectorAll(".sketch-container").forEach(function(slide){
  slide.onscroll = function(){
    console.log(slide.width)
  }
})
