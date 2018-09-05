/*
* @Author: liyue2018
* @Date:   2018-04-08 16:20:05
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-09-05 23:26:39
*/

$(function(){

    //滚动监听
    $('body').scrollspy({target:'.jk-docs-sidebar'});

    //回到顶部
    $('.go-top').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},3000);

        //scrollTop(0)可以瞬间上移
        // $(window).scrollTop(0);
    });

    //固定导航
    $(window).on('scroll',function(e){
        if($(window).scrollTop() > $('.jk-docs-nav').height()){
            $('.jk-docs-nav').addClass('navbar-fixed-top').css('opacity','0.8');
            $('.jk-docs-header').css('margin-top','$(".jk-docs-nav").height + 10');
        } else {
            $('.jk-docs-nav').addClass('navbar-fixed-top').css('opacity','1');
            $('.jk-docs-header').css('margin-top','50px');
        }

        // 回到顶部
        if($(window).scrollTop() >= 500){
            $('.go-top').stop().fadeIn(1000);
        }else{
            $('.go-top').stop().fadeOut(500);
        }
    });

    //呼吸灯效果
    let count = 0;

    //右箭头
    $('.arrow-right').on('click',function(){
        count++;
        if(count == $('.slider .item').length){
            count = 0;
        }
        $('.slider .item').eq(count).fadeIn().siblings().fadeOut();
    });

    //左箭头
    $('.arrow-left').on('click',function(){
        count--;
        if(count == -1){
            count = $('.slider .item').length - 1;
        }
        $('.slider .item').eq(count).fadeIn().siblings().fadeOut();
    });

    $('.small-image a').on('click',function(event){

        let href = $(this).attr('href');
        let changCount = $('.small-image a').index($(this));
        $('.slider .item').eq(changCount).fadeIn().siblings().fadeOut();
        return false;
    });
})


