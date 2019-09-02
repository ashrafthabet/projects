$(document).ready(function () {
    var x='X',
        o='O',
        count=0,
        o_win=0,
        x_win=0;  
    $('.container button').click(function(){       
        // GAME IS DROW
         if (count==9){
            alert(' is drow restart the game');
            $('.container button').text('+').removeClass('o x disable');
            count=0;
        }
        // press any button choose befor
        else if($(this).hasClass('disable')){
            alert(' you press choosing button');
        }
        else if(count %2 ===0){
                    count++;
                    $(this).text(x);
                $(this).addClass('disable x');
            if ($('.one').hasClass('x')&&$('.two').hasClass('x')&&$('.three').hasClass('x')||
         $('.four').hasClass('x')&&$('.five').hasClass('x')&&$('.six').hasClass('x')||
         $('.seven').hasClass('x')&&$('.eight').hasClass('x')&&$('.nine').hasClass('x')||
         $('.one').hasClass('x')&&$('.five').hasClass('x')&&$('.nine').hasClass('x')||
         $('.three').hasClass('x')&&$('.five').hasClass('x')&&$('.seven').hasClass('x')||
        $('.one').hasClass('x')&&$('.four').hasClass('x')&&$('.seven').hasClass('x')||
        $('.two').hasClass('x')&&$('.five').hasClass('x')&&$('.eight').hasClass('x')||
        $('.three').hasClass('x')&&$('.six').hasClass('x')&&$('.nine').hasClass('x')){
            alert(' X win GG');
            x_win++;
            $('.result-x .result').text(x_win);
            $('.container button').text('+');
            $('.container button').removeClass('x o disable');
            count=0;
        }
    }
    else{
        count++;
                    $(this).text(o);
                $(this).addClass('disable o');
            if ($('.one').hasClass('o')&&$('.two').hasClass('o')&&$('.three').hasClass('o')||
         $('.four').hasClass('o')&&$('.five').hasClass('o')&&$('.six').hasClass('o')||
         $('.seven').hasClass('o')&&$('.eight').hasClass('o')&&$('.nine').hasClass('o')||
         $('.one').hasClass('o')&&$('.five').hasClass('o')&&$('.nine').hasClass('o')||
         $('.three').hasClass('o')&&$('.five').hasClass('o')&&$('.seven').hasClass('o')||
        $('.one').hasClass('o')&&$('.four').hasClass('o')&&$('.seven').hasClass('o')||
        $('.two').hasClass('o')&&$('.five').hasClass('o')&&$('.eight').hasClass('o')||
        $('.three').hasClass('o')&&$('.six').hasClass('o')&&$('.nine').hasClass('o')){
            o_win++;
            alert(' O win GG')
            $('.result-o .result').text(o_win);
            $('.container button').text('+');
            $('.container button').removeClass('o x disable');
            count=0;
        }
    }
    });
    $('.container .restart').click(function(){
        $('.container button').text('+');
        $('.container button').removeClass('x o disable');
        count=0;
    })
    $('.container .reset').click(function(){
        $('.container button').text('+');
        o_win=0;
        x_win=0;
        count=0;
        $('.container .result-x .result').text(x_win);
        $('.container .result-o .result').text(o_win);
        $('.container button').removeClass('x o disable');
    })
});

