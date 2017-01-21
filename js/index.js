var dis;
var nowPoint;
var translateY = 0;
var startEl = 0;

function deleAnim(obj){
    obj.find('.denglongZuo')
        .css('display','none')
        .css('left',(-213/32)+'rem')
    obj.find('.denglongYou')
        .css('display','none')
        .css('right',(-213/32)+'rem')
    obj.find('.denglongSmall1')
        .css('display','none')
        .css('top',(-182/32)+'rem')
    obj.find('.denglongSmall2')
        .css('display','none')
        .css('top',(-182/32)+'rem')
    obj.find('.dinglian')
        .css('display','none')
        .css('top',(-83/32)+'rem')
}
function pageAnim(obj){
    obj.find('.denglongZuo')
        .css('display','block')
        .css('left',(-213/32)+'rem')
        .animate({'left':0},{duration:1000})
    obj.find('.denglongYou')
        .css('display','block')
        .css('right',(-213/32)+'rem')
        .animate({'right':0},{duration:1000})
    obj.find('.denglongSmall1')
        .css('display','block')
        .css('top',(-182/32)+'rem')
        .animate({'top':0},{duration:1000})
    obj.find('.denglongSmall2')
        .css('display','block')
        .css('top',(-182/32)+'rem')
        .animate({'top':0},{duration:1000})
    obj.find('.dinglian')
        .css('display','block')
        .css('top',(-83/32)+'rem')
        .animate({'top':0},{duration:1000})
    if(obj[0].id === 'page1'){

    }else if (obj[0].id === 'page2') {

    }else if (obj[0].id === 'page3') {

    }else if (obj[0].id === 'page4') {

    }
}


$('.wrap section').each(function(index,value){
    deleAnim($(value));
})
pageAnim($('#page1'));

$('.wrap section')
    .on('touchstart', function(e) {
        startPoint = e.changedTouches[0].pageY;
        // startEl = Number($(this)[0].style.transform.slice(11, $(this)[0].style.transform.length - 4));
    }).on('touchmove', function(e) {
        nowPoint = e.changedTouches[0].pageY;
        dis = nowPoint - startPoint;
        if(dis>0){
            return
        }
        translateY = translateY <= -95.25 ? startEl + (dis * 0.05) + 92.25 : startEl + (dis * 0.05);
        translateY =  translateY;
        if ($(this)[0].id === 'page4') {
            $('.wrap section').css({
                'z-index': 0,
                "transform": 'translateY('+0 + 'rem)'
            });
            $('#page4').css({
                'transform':'translateY('+(-31.75) + 'rem)'
            });
            $('#page1').css({
                'z-index': 1,
                "transform":'translateY('+ translateY + 'rem)'
            });
        } else {
            $(this).css({
                'z-index': $(this).index()
            });
            $(this).next().css({
                'z-index': $(this).index() + 1,
                "transform":'translateY('+ translateY + 'rem)'
            });
        }
        event.preventDefault();
    })
    .on('touchend', function(e) {
        if(dis>0){
            return
        }
        if (dis < -150) {
            if ($(this)[0].id === 'page4') {
                $('#page1').animate({
                    translateY:-31.75+'rem'
                }, {
                        duration:800,
                    // step:function(now){
                    //     $(this).css({
                    //         "transform":'translateY('+ (translateY-now) + 'rem)'
                    //     });
                    // },
                    complete: function() {
                        pageAnim($(this));
                        deleAnim($('#page4'));
                    }
                });
            } else {
                $(this).next().animate({
                translateY:-31.75+'rem'
            },{
                    duration:800,
                    // step:function(now){
                    //     $(this).css({
                    //         "transform":'translateY('+ (translateY-now) + 'rem)'
                    //     });
                    // },
                    complete: function() {
                        pageAnim($(this));
                        deleAnim($(this).prev());
                    }
                });
            }
        }else{
            $(this).css('transform',0)
            if ($(this)[0].id === 'page4') {
                $('#page1').css('transform','translateY('+0+'rem)')
            } else {
                $(this).next().css('transform','translateY('+0+'rem)')
            }
        }
    });
