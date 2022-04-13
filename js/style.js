new fullpage('#fullpage', {
  navigation: true,
  navigationTooltips: ['소개페이지', 'N 시리즈 예고편', 'N 시리즈 영화', 'N 시리즈 드라마', '작품 목록', 'footer'],
  scrollingSpeed: 1000,
  slidesNavigation: true,
  responsiveHeight: 330,
  dragAndMove: true,
  dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
  controlArrows: true,
  verticalCentered: true,
  responsiveWidth: 1024,
  bigSectionsDestination: top,
  sectionsColor: ['#000', '#000', '#000', '#000', '#000', '#222']
});

$(document).ready(function(){
  $(".g-scrolling-carousel1 .items").gScrollingCarousel();
});
$(document).ready(function(){
  $(".g-scrolling-carousel2 .items").gScrollingCarousel();
});
$(document).ready(function(){
  $(".g-scrolling-carousel3 .items").gScrollingCarousel();
});

$(function () {
  $('header>.innerBox>nav>#nav>ul>li').hover(
    function() {
      $('ul',this).stop().slideDown(200);
    },
    function() {
      $('ul',this).stop().slideUp(200);
    }
  );

  $('#dg-container').carrousel({
      current: 0,
      autoplay: false,
      interval: 3000
  });

  // 햄버거 버튼 클릭시 왼쪽으로 이동
  $('header>.innerBox>.Iconbox').click(function () {
    $(".wrapper>.content>aside").toggleClass("active").siblings().removeClass("active");
  })

  // x버튼 클릭시 모바일 메뉴 오른쪽으로 이동
  $('.wrapper>.content>aside>.close').click(function () {
    $(".wrapper>.content>aside").removeClass("active");
  })
});