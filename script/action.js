$('header').load('include/header.html',function(){
    
   let pageUrl = window.location.href;

   $('.lnb a').each(function(){

     let aHref = $(this).attr('href');
     if(pageUrl.indexOf(aHref) !== -1){
        $(this).parent().addclass('on');
        let text2 = $(this).text();
        $('#section_box_sub h2').text(text2);


        let text1 = $(this).parents('.lnb').siblings('a').text();
        $('.page_title').text(text1);

     }

   })

})

$('footer').load('include/footer.html',function(){
    
})




function bar(){

    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH-winH);
    $('.bar').width(scrT * ratio)

}

function bar2(){
    let scrT = $(window).scrollTop();   // 현재 스크롤 위치
    let winH = $(window).height();      // 브라우저 창의 높이
    let docH = $(document).height();    // 문서의 전체 높이
    let ratio = scrT / (docH - winH);   // 스크롤된 부분의 비율
    let maxBarHeight = $('.page_progress2').height(); 
    // .page_progress2의 높이

    // .bar2의 새로운 높이 계산
    let barHeight = ratio * maxBarHeight;

    // .bar2의 높이 설정
    $('.bar2').height(barHeight);
}



$(window).scroll(function(){
    bar()
    bar2()
})

$(window).resize(function(){
    bar()
    bar2()
})


$('#section2 .review_box li .ex').each(function(){

    let exText = $(this).text()
    console.log(exText)
    let exTextVal = exText.substring(0,100)
    console.log(exTextVal)

    if(exText.length > 100){

        $(this).text(exTextVal + '...')

    }
    
})


