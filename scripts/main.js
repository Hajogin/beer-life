document.addEventListener('DOMContentLoaded', function(){
    var wrapper = document.querySelector('#slides'),
        slider = wrapper.querySelector('ul'),
        slides = wrapper.querySelectorAll('li'),
        wrapper_width = wrapper.offsetWidth,
        move_timer,
        animation_delay = 4000,
        animation_duration = 2000,
        animation_step_delay = 20,
        animation_step_count = animation_duration / animation_step_delay;

    setInterval(next, animation_delay);

    slider.style.width = (wrapper_width * slides.length) + 'px';
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = wrapper_width + 'px';
    }

    function on_slide_start() {
    }

    function on_slide_end() {
    }

    function move() {
        var current = slides[0],
            value = parseInt(current.style.marginLeft) || 0;

        if (-wrapper_width > value) {
            slider.appendChild(current);
            current.style.marginLeft = '';
            slides = wrapper.querySelectorAll('li');
            clearInterval(move_timer);
            on_slide_end();
        } else {
            value += -(wrapper_width/animation_step_count);
            current.style.marginLeft = value + 'px';
        }
    }

    function next() {
        on_slide_start();
        move_timer = setInterval(move, animation_step_delay);
    }
});