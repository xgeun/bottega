$(document).ready(function(){
    $('#fullpage').fullpage({
        //options here
        responsiveWidth: 500,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        menu: '#myMenu'
        });        
});

//gnb
$(document).ready(function(){
    var main = "#header .mainNav";
    var sub = "#header .subNav";
    var gnb = "#header .gnb";
    var topNav = "#header .tNav";
    var btn = '#header .panelIcon';

    function pcGnb(){
        $(btn).add(main).off('click');

        $(main).mouseenter(function(){
            $(main).removeClass('active');
            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');


            $(this).parent().mouseleave(function(){
                $(this).children().last().stop().slideUp('fast');
                $(main).removeClass('active');
            });
        });

        $(main).focus(function(){
            $(main).removeClass('active');
            $(this).addClass('active');

            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
        });

        $(main).keydown(function(e){
            if(e.keyCode == 9){ 
                if(e.shiftKey){ 
                    $(main).removeClass('active');
                    $(sub).stop().slideUp('fast');
                }
            }
        });

        $(sub).last().find('li:last a').keydown(function(e){

            if(e.keyCode == 9){ 
                if(!e.shiftKey){ 
                    $(main).removeClass('active');
                    $(sub).stop().slideUp('fast');
                }
            }
        });
    }

    

    function mGnb(){
        $(main).off('mouseenter click focus');
        $(main).parent().off('mouseleave');
        $(btn).off('click');
        



        $(btn).click(function(e){
            e.preventDefault(); 

            var has = $(this).hasClass('active');
            if(!has){
                $(main).removeClass('active');
                $(sub).stop().slideUp(0);
            }

            $(this).toggleClass('active');
            $(gnb).toggleClass('active');
            $(topNav).toggleClass('active');
        });

        
        $(main).click(function(e){
            e.preventDefault();

            var has = $(this).hasClass('active');

            if(has){
                $(this).removeClass('active');
                $(this).next().stop().slideUp('fast');
            }else{
                $(main).removeClass('active');
                $(this).addClass('active');
                $(sub).stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }
        });
    }

    
    $(window).resize(function(){
        $(main).add(gnb).add(btn).add(topNav).removeClass('active');
        $(sub).stop().slideUp(0);

        var w = window.innerWidth; 

        if(w >= 1024){ 
            pcGnb(); 
        }else{ 
            mGnb();
        }
    });

    $(window).trigger('resize');
});

//main
$(document).ready(function(){
    var panel = '.pc_panel .panel_btn';
    var content = ".pc_panel .panel_content"
    var pgnb = ".pc_panel .panel_content .p_gnb";
    var pmain = ".pc_panel .panel_content .p_gnb .p_nav";
    var psub = ".pc_panel .panel_content .p_gnb .p_sub_nav";
    var close = ".pc_panel .panel_close"
    var header = '#header'
    var menu = '#myMenu'
  
  
        $(pgnb).off('mouseenter click focus');
        $(close).off('click');
  
  
        $(panel).click(function(e){
            e.preventDefault();
  
            var has = $(this).hasClass('active');
  
            $(this).toggleClass('active');
            $(content).toggleClass('active');
            $(header).css('display', 'none');
            $(menu).css('display', 'none');
        });
  
        $(close).click(function(e){
          
            $(content).removeClass('active');
            $(header).css('display', 'block');
            $(menu).css('display', 'block');
  
        });

        $(window).resize(function(e){
            $(content).removeClass('active');
            $(menu).css('display', 'block')
            $(header).css('display', 'block')
        });
        
        $(window).trigger('resize');
});

//product03
$(document).ready(function(){
    var btn = '#product03 .circle li img';
    var content = '#product03 .contents_wrap > div';


    $(btn).first().addClass('active');
    $(content).first().fadeIn(0);

    $(btn).click(function(e){
        e.preventDefault(); 

        $(btn).removeClass('active');
        $(this).addClass('active'); 

        var index = $(this).parent().index(); 

        $(content).stop().fadeOut(0);
        $(content).eq(index).stop().fadeIn(0);
    });
});

//campaign
$(document).ready(function(){
    var swiper = new Swiper("#campaign .swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});


