/**
 * Created by viktor on 08.07.16.
 * @var jQuery $
 */

$(document).ready(function () {

    jQuery(function($) {
        function fixDiv() {
            var $cache = $('#getFixed');
            if ($(window).scrollTop() > 400)
                $cache.css({
                    'position': 'fixed',
                    'top': '5px'
                });
            else
                $cache.css({
                    'position': 'relative',
                    'top': 'auto'
                });
        }
        $(window).scroll(fixDiv);
        fixDiv();
    });

    $('.modalT').click(function () {
       $('.border-radius-none-2').removeClass('width-700').addClass('width-custom');
    });
    $('.modalS').click(function () {
        $('.border-radius-none-2').removeClass('width-custom').addClass('width-700');
    })

    var $closeBtn1 = $('<button></button>').addClass('close btn-close-modal-1').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    }).append($('<img>').attr({
            // 'src': 'images/Assets/puzzlepreview/preview_close.png'
            'src': 'images/assets/cross.png'
        })
    );
    var $closeBtn = $('<button></button>').addClass('close btn-close-modal-1').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    }).append($('<img>').attr({
            // 'src': 'images/Assets/puzzlepreview/preview_close.png'
            'src': 'images/assets/cross.png'
        })
    );
var $modalT =  $('<DIV></DIV>').addClass('text-center').append($('<img>').attr({
         'src': 'images/puzzle3preview.png'
     }));
    var $modalS = $('<DIV></DIV>').addClass('row padding-header-100').append(
        $('<div></div>').addClass('col-sm-2')
    ).append(
        $('<div></div>').addClass('col-sm-8').append(
            $('<div></div>').addClass('row').append(
                $('<h1></h1>').addClass('custom-h1 text-center')
                    .text('PlayMath will be available for schools and classrooms in January 2017!')
            )
        ).append(
            $('<div></div>').addClass('row').append(
                $('<h4></h4>').addClass('text-center address-email')
                    .text('Enter your email address below to get FREE TRIAL.')
            )
        ).append(
            $('<div></div>').addClass('row padding-header-50').append(
                $('<div></div>').addClass('col-sm-2')
            ).append(
                $('<div></div>').addClass('col-sm-8').append(
                    $('<input>').addClass('input-popup').attr('placeholder', 'ENTER YOUR EMAIL'))
            ).append(
                $('<div></div>').addClass('col-sm-2'))
        ).append(
            $('<div></div>').addClass('row padding-header-20 padding-bottom-100').append(
                $('<div></div>').addClass('col-sm-2')
            ).append(
                $('<div></div>').addClass('col-sm-8').append(
                    $('<button></button>').addClass('popup-button').text('Request FREE TRIAL'))
            ).append(
                $('<div></div>').addClass('col-sm-2'))
        )
    ).append($('<div></div>').addClass('col-sm-2'));
    var $modal = $('<div></div>').addClass('modal fade bs-eample-modal-sm').attr({
        'tabindex': '-1',
        'role': 'dialog', 'aria-labelledby': "myModalLabel"
    })
        .append(
            $('<div></div>').addClass('modal-dialog  modal-lg')
                .append(
                    // $('<div></div>').addClass('modal-content border-radius-none')
                    $('<div></div>').addClass('modal-content border-radius-none-2')
                        .append($('<div></div>').addClass('')
                            .append($closeBtn1
                            )
                        ).append(
                        $('<div></div>').addClass('modal-body')
                    )
                )
        );
    $('body').append($modal);

    $closeBtn1.click(function () {
        $modal.modal('hide');
        $('.modal-body').removeClass('modal-size').empty();
    });

    $(".modal.fade.bs-eample-modal-sm").click(function () {
        $('.modal-body').removeClass('modal-size');
    });

    $('.modalS').on('click', function (e) {
        $('.modal-body').removeClass('modal-size').empty();
        $('.modal-body').append($modalS);
        $modal.modal('show');
    });
    $('.modalT').on('click', function (e) {
        $('.modal-body').removeClass('modal-size').empty();
        $('.modal-body').append($modalT);
        $modal.modal('show');
    });
});



