/**
 * Created by viktor on 08.07.16.
 * @var jQuery $
 */

$(document).ready(function() {
    $(function () {
        $('[data-toggle="popover"]').popover({
            'html': true
        })
    });

    var $closeBtn = $('<button></button>').addClass('close btn-close-modal').attr({
        'data-dimiss': 'modal',
        'type': 'button',
        'aria-label': 'Close'
    })
        .append(
            $('<span></span>').attr('aria-hidden', 'true').text('X')
        );

    // var $addBtn = $('#addBtn').addClass('close').attr({
    //     'data-dimiss': 'modal',
    //     'type': 'button',
    //     'aria-label': 'Close'
    // })
    //     .append(
    //         $('<span></span>').attr('aria-hidden', 'true').text('X')
    //     );

var $modalService =
    $('<DIV></DIV>').append($('<div></div>').addClass('row row-special')
        .append($('<div></div>').addClass('col-sm-12 col-lg-12 col-md-12 col-xs-12 padding-bottom-light')
            .append($('<h3></h3>').addClass('modal-title text-bold').text('Описание')
            )
        )
    ).append($('<div></div>').addClass('row row-special modal-special padding-header')
        .append($('<div></div>').addClass('line-block col-xs-12 col-sm-12  col-lg-12  col-md-12')
            .append($('<div></div>').addClass('row row-special padding-header-0')
                .append($('<div></div>').addClass('col-md-12 col-xs-12 col-sm-12 col-lg-12')
                    .append($('<div></div>').addClass('padding-bottom-lightw')
                        .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route').text('Описание Изменений в заказ'))
                    ).append($('<div></div>').addClass('padding-bottom-light')
                        .append($('<span></span>').addClass('text-large-block font-sixteen text-bold').text('Все изменения в заказ происходят согласно плану и предусмотрены контрактом между субьектом пользования и конечным туроператором.'))
                    )
                )
            )
        )
    );


    var $modalS =
        $('<DIV></DIV>').append($('<div></div>').addClass('row row-special')
                            .append($('<div></div>').addClass('col-sm-12 col-lg-12 col-md-12 col-xs-12 padding-bottom-light')
                                .append($('<h3></h3>').addClass('modal-title text-bold').text('Что включено в стоимость')
                                )
                            )
                        ).append($('<div></div>').addClass('row row-special modal-special padding-header')
                            .append($('<div></div>').addClass('line-block col-xs-12 col-sm-12  col-lg-12  col-md-12')
                                .append($('<div></div>').addClass('row row-special padding-header-0')
                                    .append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big text-large-block title-column-route').text('Плательщик'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-large-block font-sixteen text-bold').text('IGOR SAMOILOV'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Форма оплаты'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block font-sixteen').text('Наличные'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Пассажир'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block font-sixteen').text('Взрослый'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-1 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Тариф'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block font-sixteen').text('4300 UAH'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-1 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Сборы'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block font-sixteen').text('231 UAH'))
                                        )
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Сбор агенства'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block font-sixteen').text('0 UAH'))
                                        )
                                    ).append($('<div></div>').addClass('visible-sm col-md-2 col-xs-6 col-sm-6')
                                    ).append($('<div></div>').addClass('col-md-2 col-xs-6 col-sm-6')
                                        .append($('<div></div>').addClass('padding-bottom-lightw')
                                        .append($('<span></span>').addClass('text-grey-big title-column-route').text('Cумма'))
                                        ).append($('<div></div>').addClass('padding-bottom-light')
                                            .append($('<span></span>').addClass('text-front-block').text('5123 UAH'))
                                        )
                                    )
                                )
                            )
                        ).append($('<div></div>').addClass('row row-special padding-header')
                            .append($('<div></div>').addClass('col-md-12')
                                .append($('<div></div>').addClass('row row-special pull-right padding-header-0')
                                    .append($('<div></div>').addClass('col-md-12 text-bold')
                                        .append($('<span></span>').addClass('text-grey font-checkbox text-large-block').text('Всего: ')
                                        ).append($('<span></span>').addClass('text-large-block text-bold font-checkbox-big').text(' 12 234 UAH').append($('<br>'))
                                        )
                                    )
                                )
                            )
        );
var $here =
    $('<DIV></DIV>').append(

        $('<div></div>').addClass('row row-special')
            .append($('<div></div>').addClass('col-sm-12 col-md-12 col-lg-12 popup-grid')
                .append($('<h3></h3>').addClass('text-bold')
                )
            ).append($('<div></div>').addClass('col-sm-12 col-md-12 col-lg-12 border-ride block-checkout-order')
                .append($('<div></div>').addClass('row row-special order-col offer-back')
                    .append($('<div></div>').addClass('col-md-8 col-sm-8 col-xs-12')
                        .append($('<span></span>').addClass('logo offer-back from-air')
                        ).append($('<span></span>').addClass('text-large-block').text('Киев (KBP) - Амстердам (AMS), 14 января')
                        )
                    ).append($('<div></div>').addClass('col-sm-4 col-lg-4 col-md-4 hidden-xs text-right')
                        .append($('<span></span>').addClass('text-large-block').text('Время в пути: 5 ч 00 мин')
                        )
                    )
                ).append($('<div></div>').addClass('padding-header order-col row row-special white-background')
                    .append($('<div></div>').addClass('col-md-3 col-xs-12 col-lg-2 col-sm-6')
                        .append($('<span></span>').addClass('text-grey title-column').text('Рейс')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('LH-12321')
                        ).append($('<span></span>').addClass('value-column')
                            .append($('<span></span>').addClass('visible-xs visible-sm').text('Норма багажа')
                            ).append($('<span></span>').addClass('hidden-xs hidden-sm').text('Бесплатная норма провоза багажа')
                                .append($('<a></a>').append($('<span></span>').addClass('glyphicon glyphicon-question-sign').attr({'aria-hidden': false})
                                )
                                )
                            )
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3')
                        .append($('<span></span>').addClass('text-grey title-column').text('Вылет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('12 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Мюнхен (MUC)')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Время в пути')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('2ч 40 мин')
                        ).append($('<span></span>').addClass('value-column').text('Эконом класс(W)')
                        )
                    ).append($('<div></div>').addClass('col-md-3 col-sm-6 col-lg-2 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Прилет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('14 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Мюнхен (MUC)')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-12 col-lg-2 hidden-xs hidden-sm')
                        .append($('<img>').addClass('img-responsive-order').attr({'src':'images/logotype_1318_0.jpg'})
                        ).append($('<span></span>').addClass('value-column').text('Boeing 737')
                        )
                    )
                ).append($('<div></div>').addClass('row row-special order-col white-background line-block-order')
                    .append($('<div></div>').addClass('col-sm-12 col-xs-12 col-lg-12 col-md-12')
                        .append($('<span></span>').text('Пересадка в Мюнхене - ')
                            .append($('<b></b>').text('1 ч 10 мин')
                            )
                        )
                    )
                ).append($('<div></div>').addClass('padding-header-0 order-col row row-special white-background')
                    .append($('<div></div>').addClass('col-md-3 col-sm-6 col-lg-2')
                        .append($('<span></span>').addClass('text-grey title-column').text('Рейс')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('LH-12321')
                        ).append($('<span></span>').addClass('value-column')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3')
                        .append($('<span></span>').addClass('text-grey title-column').text('Вылет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('12 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Мюнхен (MUC)')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Время в пути')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('1ч 40 мин')
                        ).append($('<span></span>').addClass('value-column').text('Эконом класс(W)')
                        )
                    ).append($('<div></div>').addClass('col-md-3 col-sm-6 col-lg-2 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Прилет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('14 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Амстердам, Схипхол (AMS)йс')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-lg-2 hidden-xs hidden-sm')
                        .append($('<img>').addClass('img-responsive-order').attr({'src':'images/logotype_1318_0.jpg'})
                        ).append($('<span></span>').addClass('value-column').text('Aurobus 453')
                        )
                    )
                )
            )
        ).append($('<div></div>').addClass('row row-special padding-header')
            .append($('<div></div>').addClass('col-sm-12 col-md-12 col-lg-12 border-ride block-checkout-order')
                .append($('<div></div>').addClass('row row-special order-col offer-back')
                    .append($('<div></div>').addClass('col-sm-8 col-lg-8 col-xs-8 col-md-8')
                        .append($('<span></span>').addClass('logo offer-back to-air')
                        ).append($('<span></span>').addClass('text-large-block').text('Амстердам (AMS) - Киев(KBP), 17-18 янв,')
                        )
                    ).append($('<div></div>').addClass('col-sm-4 col-md-4 col-lg-4 text-right hidden-xs')
                        .append($('<span></span>').addClass('text-large-block').text('Время в пути: 5 ч 00 мин')
                        )
                    )
                ).append($('<div></div>').addClass('padding-header-0 order-col row row-special white-background')
                    .append($('<div></div>').addClass('col-md-3 col-sm-6 col-lg-2')
                        .append($('<span></span>').addClass('text-grey title-column').text('Рейс')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('LH-121')
                        ).append($('<span></span>').addClass('value-column')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3')
                        .append($('<span></span>').addClass('text-grey title-column').text('Вылет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('17 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Амстердам, Схипхол (AMS)')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-sm-6 col-lg-3 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Время в пути')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('2ч 40 мин')
                        ).append($('<span></span>').addClass('value-column').text('Эконом класс(W)')
                        )
                    ).append($('<div></div>').addClass('col-md-3 col-sm-6 col-lg-2 hidden-xs')
                        .append($('<span></span>').addClass('text-grey title-column').text('Прилет')
                        ).append($('<span></span>').addClass('value-column text-large-block').text('14 янв, 06:32')
                        ).append($('<span></span>').addClass('value-column').text('Киев, Борисполь')
                        )
                    ).append($('<div></div>').addClass('col-md-2 col-lg-2 hidden-xs hidden-sm')
                        .append($('<img>').addClass('img-responsive-order').attr({'src':'images/logotype_1318_0.jpg'})
                        ).append($('<span></span>').addClass('value-column').text('Boeing 737')
                        )
                    )
                )
            )
        );
    var $modal = $('<div></div>').addClass('modal fade bs-eample-modal-lg').attr({
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
                            )
                        ).append($('<div></div>').addClass('modal-body')
                        // .append($here)

                    )
                )
        );

$('body').append($modal);

    $closeBtn.click(function () {
        $modal.modal('hide');
        $('.modal-body').removeClass('modal-size').empty();
    });
    // $addBtn.click(function () {
    //     $('.modal-backdrop').addClass('in');
    //     $('body').addClass('modal-open');
    // });
    $(".modal.fade.bs-eample-modal-lg").click(function(){
        $('.modal-body').removeClass('modal-size').empty();
    });




    $('.modalF').on('click', function(e) {
        $('.modal-body').addClass('modal-size').append($here);
            $modal.modal('show');
    });

    $('.modalS').on('click', function(e) {
        $('.modal-body').append($modalS);
        $modal.modal('show');
    });
    
    $('.modalService').on('click', function(e) {
        var $var = $(this).html();
        $('.modal-body').append($modalService);
        $('.modal-body').append($var);
        $modal.modal('show');
    });









    // $('.underline').click(function () {
    //     alert($(this).attr("data-content"));
    // });





    $('.pay-class').click(function() {
        var $btn = $(this);
        $.each($('div.item-pay'), function() {
            if($btn.attr('data-id') == $(this).attr('id')) {
                $(this).show(800);
            } else {
                $(this).hide(500);
            }
        });
        $.each($('.pay-class'), function() {
            if($btn.attr('data-id') == $(this).attr('data-id')) {
                $(this).addClass('border-min').removeClass('border-std')
            } else {
                $(this).removeClass('border-min').addClass('border-std')
            }
        });
    });

    $('.btn-service').click(function() {
        var $btn = $(this);
        var $btns = $('.btn-service');
        var $firstServices = $('.first-service');
        $.each($('div.item-service'), function() {
            if($btn.attr('id') == $(this).attr('data-id')) {
                $(this).addClass('checked-block');
            } else {
                $(this).removeClass('checked-block');
            }
        });
        $.each($('div.first-service'), function() {
            if($btn.attr('id') == $(this).attr('data-id')) {

                $($firstServices).hide(1000);
                $($btns).show(1000);

                $($btn).hide(1000);
                $(this).show(1000);
            }
        });
    });

    var $procent = $('<span></span>');
    var $pay_span = $('span.pay-index');
    var $pay_span_new = $('span.pay-new')
    $('#promo').find('span.show-input').click(function(){
        $('#promo').empty();
        $('#promo').append(
            $('<div></div>').addClass('form-group')
                .append(
                    $('<input />').attr({'type':'number', 'placeholder': 'Введите промокод'}).addClass('form-control').on('input', function() {
                        if($(this).val() !== '') {
                            // make loader here
                            $procent.removeClass('percent-absolute').empty();
                                    $('#promo').loader('show');
                                    setTimeout(function () {
                                        $('#promo').loader('hide');
                                        $procent.addClass('percent-absolute').text('-30%');
                                        $pay_span.addClass('bad-price');
                                        $pay_span_new.show();
                                    }, Math.floor(Math.random() * 10000));
                            
                           

                        } else {
                            $procent.removeClass('percent-absolute').addClass('danger-notice').text('Промокод не найден');
                            // Перейти к оплате 11 400 грн.
                            $pay_span.removeClass('bad-price');
                            $pay_span_new.hide();
                        }
                    })
                ).append($procent)
        ).removeClass('padding-header-0');
    });


    $('div').parent('div').parent('div').find('ul.checkbox-xs').addClass('hide');
    $('input[name="pack"]').click(function() {
        var $this = $(this);
        $.each($('input[name="pack"]'), function() {
            if($this.val() == $(this).val()) {
                $(this).parent('div').parent('div').find('ul').removeClass('hide');
            } else {
                $(this).parent('div').parent('div').find('ul').addClass('hide');
            }
        });
    });

    $('.loyal').find('span.underline-text-link').click(function(){
        $(this).empty();
        $(this).append(
            $('<div></div>').addClass('col-md-3 col-lg-3 co-xs-6 col-sm-12')
                .append($('<div></div>').addClass('padding-header-0'))
                .append(
                    $('<span></span>').addClass('underline-text-link').text('Карта лояльности')
                )
        ).append(
            $('<div></div>').addClass('col-md-3 col-lg-4 co-xs-6 col-sm-12')
                .append($('<div></div>').addClass('form-group'))
                .append(
                    $('<input />').attr({'type':'text', 'value':'airBaltic', 'placeholder': ''}).addClass('form-control')
                )
        ).append(
            $('<div></div>').addClass('col-md-3 col-lg-5 co-xs-6 col-sm-12')
                .append($('<div></div>').addClass('form-group'))
                .append(
                    $('<input />').attr({'type':'number', 'placeholder': ''}).addClass('form-control')
                )
        );
    });
    $('button.navbar-toggle.collapsed').click(function() {
        if($('.navigation ul').hasClass('active')) {
            $('.navigation ul').removeClass('active col-xs-12 col-sm-12');
        } else {
            $('.navigation ul').addClass('active col-xs-12 col-sm-12');
        }
    });

    // $('.loyal').find('span.loyal-card').click(function(){
    //     $('.loyal').empty();
    //
    // })
    // $modal.modal('show');

    $('.telephone .icon').click(function() {
        alert("ТУТ ВЫПААЕТ РИНГОСТАТ");
    });
    $('.callback').click(function(){
        alert("ТУТ ВЫПААЕТ РИНГОСТАТ c ПОПАПОМ");
    });
});



