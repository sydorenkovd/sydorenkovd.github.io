/**
 * Created by viktor on 08.07.16.
 * @var jQuery $
 */

$(document).ready(function () {
    $('.herewe').click(function () {
        $('.toggle-custom').removeClass('hide');
        $('div.custom-block-image').removeClass('col-sm-5 col-lg-5 col-md-6').addClass('col-sm-3 col-lg-3 col-md-4');
        $('div.three').removeClass('col-lg-8').addClass('col-lg-11');

        $('div.row.row-special.top-custom').hide();
        $('div.row.row-special.top-custom-hide').removeClass('hide');

        $('div.col-sm-10.padding-header-10').removeClass('col-sm-10').addClass('col-sm-9');


        $('.row.padding-header-20.lato').addClass('pad-left-60');

        // $('.trans-custom').addClass('vertical-text');
    });
    
    $('.img-toggle-back').click(function () {
        $('.toggle-custom').addClass('hide');

        $('div.custom-block-image').removeClass('col-sm-3 col-lg-3 col-md-4').addClass('col-sm-5 col-lg-5 col-md-6');
        $('div.three').removeClass('col-lg-11').addClass('col-lg-8');

        $('div.row.row-special.top-custom').show();
        $('div.row.row-special.top-custom-hide').addClass('hide');

        $('.row.padding-header-20.lato').removeClass('pad-left-60');
        // $('.collapse').addClass('in');
    });

    $('.popover-custom').mouseenter(function () {
        $('.popover-custom').attr("src", "images/Assets/Subtopics_v1/pllus_state2_hover.png");
    }).mouseleave(function () {
        $('.popover-custom').attr("src", "images/Assets/Subtopics_v1/pllus_state1_default.png");
    });

    var $closeBtn1 = $('<button></button>').addClass('close btn-close-modal').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    }).append($('<img>').attr({
                'src': 'images/Assets/puzzlepreview/preview_close.png'
                // 'src': 'images/assets/cross.png'
            })
        );
    var $closeBtn = $('<button></button>').addClass('close btn-close-modal').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    })
        .append($('<img>').attr({
                'src': 'images/Assets/puzzlepreview/preview_close.png'
            })
        )
        ;
    var $rightBtn = $('<div></div>').addClass('left-point').append($('<img>').attr({
            'src': 'images/Assets/puzzlepreview/preview_arrow_hover.png'
        })
    );

    var $modalS =
    //     $('<DIV></DIV>').addClass('row padding-header-100').append(
    //     $('<div></div>').addClass('col-sm-2')
    // ).append(
    //     $('<div></div>').addClass('col-sm-8').append(
    //         $('<div></div>').addClass('row').append(
    //             $('<h1></h1>').addClass('custom-h1 text-center')
    //             .text('PlayMath will be available for schools and classrooms in January 2017!')
    //         )
    //     ).append(
    //         $('<div></div>').addClass('row').append(
    //             $('<h4></h4>').addClass('text-center address-email')
    //                 .text('Enter your email address below to get FREE TRIAL.')
    //         )
    //     ).append(
    //         $('<div></div>').addClass('row padding-header-40').append(
    //             $('<div></div>').addClass('col-sm-2')
    //         ).append(
    //             $('<div></div>').addClass('col-sm-8').append(
    //                 $('<input>').addClass('input-popup').attr('placeholder', 'ENTER YOUR EMAIL'))
    //         ).append(
    //             $('<div></div>').addClass('col-sm-2'))
    //     ).append(
    //         $('<div></div>').addClass('row padding-header-20 padding-bottom-100').append(
    //             $('<div></div>').addClass('col-sm-2')
    //         ).append(
    //             $('<div></div>').addClass('col-sm-8').append(
    //                 $('<button></button>').addClass('popup-button').text('Request FREE TRIAL'))
    //         ).append(
    //             $('<div></div>').addClass('col-sm-2'))
    //     )
    // ).append($('<div></div>').addClass('col-sm-2'));
        $('<DIV></DIV>').addClass('text-center').append($('<img>').attr({
            'src': 'images/Assets/puzzlepreview/puzzle3_preview.png'
        }));
    var $modal = $('<div></div>').addClass('modal fade bs-eample-modal-sm').attr({
        'tabindex': '-1',
        'role': 'dialog', 'aria-labelledby': "myModalLabel"
    })
        .append(
            $('<div></div>').addClass('modal-dialog ').attr({
                'style': 'width: 885px'
            })
                .append(
                    // $('<div></div>').addClass('modal-content border-radius-none')
                    $('<div></div>').addClass('modal-content border-radius-none')
                        .append($('<div></div>').addClass('')
                            .append($closeBtn1
                            )
                            .append($('<h3></h3>').addClass('modal-title custom-modal-title').text('Assign#1.1')
                            )
                        ).append(
                        $('<div></div>').addClass('modal-body')
                            .append(
                            $rightBtn
                        )
                            .append(
                            $('<div></div>').addClass('right-point').append($('<img>').attr({
                                    'src': 'images/Assets/puzzlepreview/preview_arrow_hover2.png'
                                })
                            )
                        )
                    )
                )
        );

    $('body').append($modal);

    $closeBtn1.click(function () {
        $modal.modal('hide');
        $('.modal-body').removeClass('modal-size').empty();
        // $(".modal.fade.bs-eample-modal-sm").removeClass('in').attr('display', 'none');
    });
    // $addBtn.click(function () {
    //     $('.modal-backdrop').addClass('in');
    //     $('body').addClass('modal-open');
    // });


    $(".modal.fade.bs-eample-modal-sm").click(function () {
        $('.modal-body').removeClass('modal-size');
    });


    $('.modalF').on('click', function (e) {
        $('.modal-body').addClass('modal-size').append($here);
        $modal.modal('show');
    });

    $('.modalS').on('click', function (e) {
        $('.modal-body').append($modalS);
        $modal.modal('show');
    });


    // $('button.navbar-toggle.collapsed').click(function () {
    //     if ($('.navigation ul').hasClass('active')) {
    //         $('.navigation ul').removeClass('active col-xs-12 col-sm-12');
    //     } else {
    //         $('.navigation ul').addClass('active col-xs-12 col-sm-12');
    //     }
    // });
});



