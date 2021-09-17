$('.slider-elemental').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  centerMode: true,
  centerPadding: '15px',
  prevArrow: '<svg width="66" class="slick-prev" height="16" viewBox="0 0 66 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM66 9H1L1 7H66V9Z" fill="currentColor"/></svg>',
  nextArrow: '<svg width="66" class="slick-next" height="16" viewBox="0 0 66 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M65.7071 7.29289C66.0976 7.68342 66.0976 8.31658 65.7071 8.70711L59.3431 15.0711C58.9526 15.4616 58.3195 15.4616 57.9289 15.0711C57.5384 14.6805 57.5384 14.0474 57.9289 13.6569L63.5858 8L57.9289 2.34315C57.5384 1.95262 57.5384 1.31946 57.9289 0.928932C58.3195 0.538408 58.9526 0.538408 59.3431 0.928932L65.7071 7.29289ZM0 7H65L65 9H0V7Z" fill="currentColor"/></svg>',
  responsive: [
    {
      breakpoint: 1169,
      settings: {
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 959,
      settings: {
        centerPadding: '5px',
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '5px',
        arrows: false
      }
    },
    {
      breakpoint: 579,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '5px'
      }
    }
  ]
});
