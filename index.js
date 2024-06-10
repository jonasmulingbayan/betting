$(document).ready(function(){
    $('#banner').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    $('#promotion').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    var $populargamesSlider = $('#populargames');

    // Check if #populargames slider exists
    if ($populargamesSlider.length > 0) {
        // Initialize the slick slider
        $populargamesSlider.slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            centerMode: false, // Set centerMode to false
            centerPadding: '0px', // Adjust the center padding
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    }


    var $casinogamesSlider = $('#casinogames');

    // Check if #casino slider exists
    if ($casinogamesSlider.length > 0) {
        // Initialize the slick slider
        $casinogamesSlider.slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            centerMode: false, // Set centerMode to false
            centerPadding: '0px', // Adjust the center padding
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    }

    var $instantgamesSlider = $('#instantgames');

    // Check if #casino slider exists
    if ($instantgamesSlider.length > 0) {
        // Initialize the slick slider
        $instantgamesSlider.slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            centerMode: false, // Set centerMode to false
            centerPadding: '0px', // Adjust the center padding
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    }

    $('#partners').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        centerMode: false, // Set centerMode to false
        centerPadding: '0px', // Adjust the center padding
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    const iconsList = document.querySelectorAll('.icons');

    iconsList.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const infoHideContainer = icon.closest('.populargames-description').querySelector('.info-hide-container');
            const desc = icon.closest('.populargames-description').querySelector('.desc');
            infoHideContainer.style.display = 'block';
            positionInfoHideContainer(infoHideContainer, desc);
        });

        icon.addEventListener('mouseleave', () => {
            const infoHideContainer = icon.closest('.populargames-description').querySelector('.info-hide-container');
            infoHideContainer.style.display = 'none';
        });
    });

    function positionInfoHideContainer(container, desc) {
        container.style.top = 0;
        container.style.left = 0;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.background = 'rgba(0, 0, 0, 0.5)';
        container.style.zIndex = '9999';
    }

});
