var stop = true;

$(document).ready(function () {
  $('button').on('click', function(){
        stop = !stop;
        if (stop) {
            $('button').text('Stop Moving')
        }else {
            $('button').text('Start Moving')
        }
    })
    $('div').click(function (e) {
        if (!stop) {
            return false
        }
        $("img")
            .css({
                position: 'absolute',
                left: e.pageX,
                top: e.pageY,
            })
    });
});
