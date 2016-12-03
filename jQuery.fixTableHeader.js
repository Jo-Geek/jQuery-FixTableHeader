(function ($) {
    $.fn.fixTableHeader = function (options) {

        var settings = $.extend({
            fixHeader: true,
            fixFooter: false
        }, options);

        var container = this;
        var table = this.find('table');
        var xHeaders;
        var xFooters;

        if (this.find('table').has('thead').length) {
            if (this.find('table thead').has('th').length) {
                xHeaders = this.find("table thead th");
            }
            else {
                xHeaders = this.find("table thead td");
            }
        }
        else if (this.find('table').has('tbody').length) {

            if (this.find('table tbody').has('th').length) {
                xHeaders = this.find("table tbody th");
            }
            else {
                xHeaders = this.find("table tbody > tr:first-child td");
            }
        }
        else if (this.find('table').has('th').length) {
            xHeaders = this.find("table th");
        }
        else {
            xHeaders = this.find("table > tr:first-child td");
        }

        if (this.find('table').has('tfoot').length) {
            xFooters = this.find("table tfoot td");
        }
        else {
            if (this.find('table').has('tbody').length) {
                xFooters = this.find("table tbody > tr:last-child td");
            }
            else {
                xFooters = this.find("table > tr:last-child td");
            }
        }

        var swidth = (container.innerHeight() - $(container).height());
        var containerHeight = 0;
        if (container.innerWidth() < table.width()) {
            containerHeight = container.height() - getScrollBarSize();
        }
        else {
            containerHeight = container.height();
        }

        xHeaders.each(function () {
            $(this).addClass(' fth-header');
        });

        xFooters.each(function () {
            $(this).addClass(' fth-footer');
        })

        this.scroll(function () {
            if (settings.fixHeader) {
                xHeaders.each(function () {
                    $(this).css('position', 'relative');
                    $(this).css('top', container.scrollTop() + 'px');
                });
            }

            if (settings.fixFooter) {
                xFooters.each(function () {
                    $(this).css('position', 'relative');
                    $(this).css('top', ((containerHeight - table.height() + container.scrollTop())) + 'px');

                })
            }
        })
    };

    function getScrollBarSize() {
        var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
            widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    };
}(jQuery));
