/**
 * Created by viktor on 13.07.16.
 */
$(document).ready(function() {
    var $closeBtn = $('<button></button>').addClass('close btn-close-modal').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    })
        .append(
            $('<span></span>').attr('aria-hidden', 'true').text('X')
        );

    var $addBtn = $('#addBtn').addClass('close').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    })
        .append(
            $('<span></span>').attr('aria-hidden', 'true').text('X')
        );


    var $modal = $('<div></div>').addClass('modal fade bs-eample-modal-lg hide').attr({
        'tabindex': '-1',
        'role': 'dialog', 'aria-labelledby': "myModalLabel"
    })
        .append(
            $('<div></div>').addClass('modal-dialog  modal-lg')
                .append(
                    $('<div></div>').addClass('modal-content border-radius-none')
                        .append($('<div></div>').addClass('modal-header')
                            .append($closeBtn
                            ).append($('<h3></h3>').addClass('modal-title')
                                .append($('<b></b>').text('Что включено в стоимость').append($('<br>')
                                    )
                                )
                            )
                        ).append($('<div></div>').addClass('modal-body')
                        .append($('<div></div>').addClass('row row-special title-block')
                            .append($('<div></div>').addClass('col-sm-12')
                                .append($('<span></span>').addClass('title-block')
                                ).append($('<a></a>').addClass('link-block')
                                    .append($('<span></span>').addClass('pull-right')
                                    )
                                )
                            )
                        ).append($('<div></div>').addClass('row row-special line-block white-background padding-header-0 padding-left-right-middle padding-bottom')
                            .append($('<div></div>').addClass('col-xs-12 col-md-12 col-sm-12')
                                .append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-4')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Пассажиры').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column upcase text-bold text-large-block').text('Igor Izmailov').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column upcase text-bold text-large-block').text('Igor Izmailov').append($('<br>'))
                                    )
                                ).append($('<div></div>').addClass('col-md-2 hidden-xs hidden-md col-sm-4')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Дата рождения').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2').text('12.12.1990').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2').text('12.12.1990').append($('<br>'))
                                    )
                                ).append($('<div></div>').addClass('col-md-2 col-lg-2 col-xs-6 col-sm-4 hidden-xs')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Документ').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2').text('АН 433244').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2').text('АН 134234').append($('<br>'))
                                    )
                                ).append($('<div></div>').addClass('col-md-2 col-xs-6 hidden-sm col-sm-4 text-left')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Номер билета').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('21321321').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('12312332').append($('<br>'))
                                    )
                                ).append($('<div></div>').addClass('col-md-3 col-lg-2 hidden-xs col-sm-4 col-xs-6')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Номер в системе').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('343232').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('234324').append($('<br>'))
                                    )
                                ).append($('<div></div>').addClass('col-md-2 col-lg-2 hidden-xs col-sm-4')
                                    .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route padding-bottom-lightw').text('Номер брони авиакопании').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('3234324324').append($('<br>'))
                                    ).append($('<span></span>').addClass('value-column-2 text-bold').text('3243232432').append($('<br>'))
                                    )
                                )
                            )
                        ).append($('<div></div>').addClass('row row-special order-col modal-special padding-header')
                            .append($('<div></div>').addClass('col-xs-12 col-sm-12 ')
                                .append($('<div></div>').addClass('row row-special padding-header-0')
                                    .append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Плательщик').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block text-bold').text('IGOR SAMOILOV').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Форма оплаты').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block').text('Наличные').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Пассажир').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block').text('Взрослый').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-1 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Тариф').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block').text('4300 UAH').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-1 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Сборы').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block').text('231 UAH').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Сбор агенства').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-large-block').text('0 UAH').append($('<br>'))
                                        )
                                    ).append($('<div></div>').addClass('visible-sm col-md-2 col-xs-6 col-sm-6')
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Cумма').append($('<br>'))
                                        ).append($('<span></span>').addClass('text-front-block').text('5123 UAH').append($('<br>'))
                                        )
                                    )
                                )
                            )
                        ).append($('<div></div>').addClass('row row-special order-col padding-header')
                            .append($('<div></div>').addClass('col-md-12')
                                .append($('<div></div>').addClass('row row-special pull-right padding-header-0')
                                    .append($('<div></div>').addClass('col-md-12 text-bold')
                                        .append($('<span></span>').addClass('text-grey-big').text('Всего: ')
                                        ).append($('<span></span>').addClass('text-large-block text-bold font-checkbox').text(' 12 234 UAH').append($('<br>'))
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
        );
    $closeBtn.click(function () {
        $modal.addClass('hide').removeClass('show');
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');
        $('.modal.fade.bs-eample-modal-lg').removeClass('in');
    });


    $('body').append($modal);

    $addBtn.click(function () {
        $('.modal-backdrop').addClass('in');
        $('body').addClass('modal-open');
    });
    $('.modal-link').on('click', function (e) {
        $modal.addClass('in show').removeClass('hide');
        $('body').addClass('modal-open').append(
            $('<div></div>').addClass('modal-backdrop fade in').click(function () {
                $(this).removeClass('in');
                $('body').removeClass('modal-open');
            })
        );
    });
});

