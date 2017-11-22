// $(document).ready(function($) {
//         $(".royalSlider").royalSlider({
//             // options go here
//             // as an example, enable keyboard arrows nav
//             keyboardNavEnabled: true
//         });  
//     });

$(document).ready(function($) {
  var si = $('#gallery-1').royalSlider({
    addActiveClass: true,
    arrowsNav: true,
    controlNavigation: 'none',
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 340,
    loop: true,
    imageScaleMode: 'fit-if-smaller',
    fadeinLoadedSlide: true,
    // globalCaption: true,
    keyboardNavEnabled: true,
    // globalCaptionInside: false,
    thumbs: {
      appendSpan: true,
      firstMargin: true,
      paddingBottom: 4
    },

    fullscreen: {
      enabled: false,
      nativeFS: true
    },
    controlNavigation: 'thumbnails',

    visibleNearby: {
      enabled: true,
      centerArea: 0.5,
      center: true,
      breakpoint: 650,
      breakpointCenterArea: 0.64,
      navigateByCenterClick: true
    }
  }).data('royalSlider');

  // link to fifth slide from slider description.
  $('.slide4link').click(function(e) {
    si.goTo(4);
    return false;
  });
});
