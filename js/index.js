$(function() {
	$('.viewItem').hover(function() {
		$(this).find('.icon').addClass('showIcon');
	}, function() {
		$(this).find('.icon').removeClass('showIcon');
	});
	$('.icon').click(function() {
		window.location.href = 'view.html'
	});
	//首页图片切换
    var page = 1;
    var i = 3;
	$('.slider-pre').click(function() {
		// var $parent = $(this).parents("productBox");
        var $v_show = $(".listItem");
        var $ul = $('.proListBox');
        var v_width = $v_show.width();
        var len = $('.items').length;
        console.log(len);
        var page_count = Math.ceil(len / i);
        if (!$ul.is(':animated')) {
            if (page == 1) {
                $ul.animate({
                    left: '-=' + v_width * (page_count - 1)
                }, 'slow');
                page = page_count
            } else {
                $ul.animate({
                    left: '+=' + v_width
                }, 'slow');
                page--;
            }
        }
	});
	$('.slider-next').click(function() {
		 var $parent = $(this).parents("productBox");
        var $v_show = $(".listItem");
        var $ul =  $('.proListBox');
        var v_width = $v_show.width();
        var len = $('.items').length;
        var page_count = Math.ceil(len / i);
        if (!$ul.is(':animated')) {
            if (page == page_count) {
                $ul.animate({
                    left: "0px"
                }, "slow");
                page = 1;
            } else {
                $ul.animate({
                    left: '-=' + v_width
                }, 'slow');
                page++;
            }
        }
	});
	//首页点击切换图进入详情
	$('.proListBox .items').click(function(){
		location.href='view.html';
	})
	//产品详情图片切换
	var length,
        currentIndex = 0,
        interval,
        hasStarted = false,
        t = 3000;
    length = $('.slider-panel').length;
    $('.slider-panel:not(:first)').hide();
    $('.slider-item:first').addClass('selected');
    $('.prev').click(function(){
    	pre();
    });
    $('.next').click(function(){
    	 next();
    });
    $('.slider-item').click(function(){
        var index=$(this).index();
        currentIndex=index;
        $('.slider-main li').eq(currentIndex).fadeIn(500).siblings().fadeOut(500);
        $('.slider-item').eq(currentIndex).addClass('selected').siblings().removeClass('selected');
        $('.slider-item').find('span').removeClass('activeOn');
        $(this).find('span').addClass('activeOn');
    });

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }

    function pre() {
        var preIndex = currentIndex;
        currentIndex = --currentIndex % length;
        play(preIndex, currentIndex);
    }

    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(500);
        $('.slider-item').removeClass('selected');
        $('.slider-item').eq(currentIndex).addClass('selected');
        $('.slider-item').find('span').removeClass('activeOn');
        $('.slider-item').find('span').eq(currentIndex).addClass('activeOn');
    }

	//产品列表页点击产品进入详情页
	$('.productListBox .item').click(function(){
		location.href='view.html';
	})

});