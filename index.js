$(document).ready(function(){
    // Initialize banner slider
    $('#banner').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
    });

    // Initialize promotion slider
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

    // Function to initialize slick sliders
    function initializeSlickSlider(selector, slidesToShow, slidesToScroll) {
        var $slider = $(selector);

        if ($slider.length > 0) {
            $slider.slick({
                infinite: false,
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                dots: false,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                centerMode: false,
                centerPadding: '0px',
                responsive: [
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: slidesToShow,
                            slidesToScroll: slidesToScroll,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: slidesToShow - 1,
                            slidesToScroll: slidesToScroll - 1,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: slidesToShow - 2,
                            slidesToScroll: slidesToScroll - 2,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: slidesToShow - 3,
                            slidesToScroll: slidesToScroll - 3,
                        }
                    }
                ]
            });
        }
    }

    // Initialize populargames, casinogames, and instantgames sliders
    initializeSlickSlider('#populargames', 5, 5);
    initializeSlickSlider('#casinogames', 5, 5);
    initializeSlickSlider('#instantgames', 5, 5);

    // Initialize partners slider
    $('#partners').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        centerMode: false,
        centerPadding: '0px',
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

    // Initialize promotion slider
    $('#testimonial').slick({
        infinite: false,
        slidesToShow: 3,
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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Hover effect for icons in populargames description
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

    // Function to position info hide container
    function positionInfoHideContainer(container, desc) {
        container.style.top = 0;
        container.style.left = 0;
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.background = 'rgba(0, 0, 0, 0.5)';
        container.style.zIndex = '9999';
    }
});
