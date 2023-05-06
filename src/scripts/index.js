$(window, document, undefined).ready(function() {

    $('input').blur(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function (e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
        $(this).removeClass('is-active');
    });

});

function Used() {
    document.getElementById("used").style.display = "block";
    let uniqid = "";
    for (var i = 0; i < 5; i++) {
        uniqid += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62));
    };
    document.getElementById("used").innerHTML =
        // "<p style='background-color: #404ff0; color: #ffffff;'>エラー</p>" +
        "このパスワードは既に<a href='javascript:void(0);'>@" + uniqid + "</a>が使用しています。<br>" +
        "別のパスワードをお試し下さい。";
    return false;
}
