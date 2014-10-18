$(function () {
    $('.feature-assembly').each(function () {
        var $assembly = $(this),
            $tabs = $('.feature-assembly li'),
            $links = $('.feature-tabs a'),
            $selected = $();

        $links.on('click', function (e) {
            var $this = $(this);
            e.preventDefault();

            $selected.removeClass('active');
            $selected = $('.' + $this.attr('href').slice(1), $assembly);
            $selected.addClass('active');

            $tabs.removeClass('active');
            $this.closest('li').addClass('active');
        });

        $($links.get(0)).trigger('click');
    });
});
