var dis;
var nowPoint;
var translateY = 0;
var startEl;
// $('.wrap')
//     .on('touchstart', function(e) {
//         clearInterval(this.timer);
//         startPoint = e.changedTouches[0].pageY;
//         startEl = Number($(this)[0].style.transform.slice(11, $(this)[0].style.transform.length - 4));
//     }).on('touchmove', function(e) {
//         nowPoint = e.changedTouches[0].pageY;
//         dis = nowPoint - startPoint;
//         translateY = translateY <= -95.25 ? startEl + (dis * 0.1) + 92.25 : startEl + (dis * 0.1);
//         $(this).css("transform", function() {
//             return 'translateY(' + translateY + 'rem)';
//         });
//         $(this).css("aa", function() {
//             return 'translateY(' + translateY + 'rem)';
//         });
//     })
//     .on('touchend', function(e) {
//         if (dis < -50) {
//             $('.wrap').animate({
//                 aa:31.75*(Math.ceil(translateY/31.75))-translateY%31.75
//             }, {
//                 step: function(now) {
//                     // console.log(now);
//                     $('.wrap').css("transform", function() {
//                         return 'translateY(' + (translateY-now) + 'rem)';
//                     })
//                     now = 0;
//                 },
//                 duration: 1000
//             })
//         }
//     });
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
        startEl = Number($(this)[0].style.transform.slice(11, $(this)[0].style.transform.length - 4));
    }).on('touchmove', function(e) {
        nowPoint = e.changedTouches[0].pageY;
        dis = nowPoint - startPoint;
        if(dis>0){
            return
        }
        translateY = translateY <= -95.25 ? startEl + (dis * 0.05) + 92.25 : startEl + (dis * 0.05);
        translateY = 31.75 + translateY;
        if ($(this)[0].id === 'page4') {
            $('.wrap section').css({
                'z-index': 0,
                "top": 31.75 + 'rem'
            });
            $('#page4').css({
                'top': 0
            });
            $('#page1').css({
                'z-index': 1,
                "top": translateY + 'rem'
            });
        } else {
            // $('#page1').css({'z-index':0});
            $(this).css({
                'z-index': $(this).index()
            });
            $(this).next().css({
                'z-index': $(this).index() + 1,
                "top": translateY + 'rem'
            });
        }
        event.preventDefault();
    })
    .on('touchend', function(e) {
        if(dis>0){
            return
        }
        console.log(dis);
        if (dis < -150) {
            if ($(this)[0].id === 'page4') {
                $('#page1').animate({
                    "top": 0
                }, {
                    duration:800,
                    complete: function() {
                        pageAnim($(this));
                        deleAnim($('#page4'));
                    }
                });
            } else {
                $(this).next().animate({
                    "top": 0
                }, {
                    duration:800,
                    complete: function() {
                        pageAnim($(this));
                        deleAnim($(this).prev());
                    }
                });
            }
        }else{
            $(this).css('top',Math.floor(translateY/31.75))
            if ($(this)[0].id === 'page4') {
                $('#page1').css('top',31.75+'rem')
            } else {
                $(this).next().css('top',31.75+'rem')
            }
        }
    });
