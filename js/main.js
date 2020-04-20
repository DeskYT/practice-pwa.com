$(function() {
    $('.filter > ul > li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this.children[1]).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this.children[1]).addClass('active');
        }
    });
    return  false;
});