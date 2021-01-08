$(function(){

    //topボタン出現タイミング
    $('#js-top-btn').hide();
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 80) {
            $('#js-top-btn').fadeIn(300);
        } else {
            $('#js-top-btn').fadeOut(300);
        }
    });

    //ページ内リンク
    $('a[href^="#"]').click(function() {
        let header = $(".header").innerHeight();
        let speed = 500;
        let id = $(this).attr('href');
        let target = $('#' == id ? 'html' : id);
        let position = $(target).offset().top - header;
        $('html, body').animate(
            {
                scrollTop: position
            },
            speed
        );
        return false;
    });

    $('.header-list__item a, .drawer-list__item a').click(function() {
        $('.header-list__item a, .drawer-list__item a').removeClass('is-active');
        $(this).addClass('is-active');
    })

    // drawer
    $('#js-hamburger').click(function() {
        $(this).toggleClass('js-show');
        $('.drawer-content, .drawer-list').toggleClass('js-show');
    });

    // form
    let $form = $('#js-form')
    $form.submit(function(e) { 
        $.ajax({ 
            url: $form.attr('action'), 
            data: $form.serialize(), 
            type: "POST", 
            dataType: "xml", 
            statusCode: { 
                0: function() { 
                    $('#js-form').slideUp();
                    $('#js-success').slideDown();
                }, 
                200: function() { 
                    $('#js-form').slideUp();
                    $('#js-error').slideDown();
                } 
            }
        });
        return false;
    });

    let $submit = $('#js-submit');
    $('#js-form input, #js-form textarea').change(function() {
        if(
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.1129022130"]').prop('checked') === true
        ) {
            $submit.prop('disabled', false);
            $submit.addClass('active');
        } else {
            $submit.prop('disabled', true);
            $submit.removeClass('active');
        }
    });

    // レスポンシブサイト 

    $(window).on('load resize', function() {
        var pc_w = $('.device-pc .frame').width() / 1280;
        $('.device-pc iframe').css('transform', 'scale(' + pc_w +')');
        var tab_w = $('.device-tab .frame').width() / 768;
        $('.device-tab iframe').css('transform', 'scale(' + tab_w +')');
        var sp_w = $('.device-sp .frame').width() / 375;
        $('.device-sp iframe').css('transform', 'scale(' + sp_w +')');
    })


    // WOW
    new WOW().init();
});