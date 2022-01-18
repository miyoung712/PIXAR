$(document).ready(function(){

    var offset = 0;

    $(".item").on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        e.stopPropagation();

        offset += Math.sign(e.originalEvent.deltaY) * 60;

        if (offset < 0) {
            offset = 0;
        } else if (offset > 12700 - window.innerWidth) {
            offset = 12700 - window.innerWidth;
        }

        $('.container').css('transform', 'translateX(-' + offset + 'px');
    });
})