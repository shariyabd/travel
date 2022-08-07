$(document).ready(function(){

    // navbar background color change 
    $(window).scroll(function(){
        if($(this).scrollTop()>40){
            $('header nav').addClass('bg-color')
        }
        else{
            $('header nav').removeClass('bg-color')
        }
    })

    // menu for mobile devices 
    $('.side-bar').click(function(){
        $('  header nav .nav-item').toggleClass('active')
        $('.side-bar i').toggleClass('active')
    })
})