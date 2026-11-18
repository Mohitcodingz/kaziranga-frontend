;(function ($, window, document, undefined) {

    "use strict";

    // ============================================================
    // DEFAULT SETTINGS
    // ============================================================
    var pluginName = "simpleCalendar",

        defaults = {

            months: [
                'january',
                'february',
                'march',
                'april',
                'may',
                'june',
                'july',
                'august',
                'september',
                'october',
                'november',
                'december'
            ],

            days: [
                'sunday',
                'monday',
                'tuesday',
                'wednesday',
                'thursday',
                'friday',
                'saturday'
            ],

            displayYear: true,

            fixedStartDay: true,

            displayEvent: true,

            disableEventDetails: false,

            disableEmptyDetails: false,

            events: [],

            /*
             * NEW
             * Calendar starting date
             *
             * Format:
             * DD/MM/YYYY
             *
             * Example:
             * 08/10/2026
             */
            fromDate: null,

            onInit: function (calendar) {},

            onMonthChange: function (month, year) {},

            onDateSelect: function (date, events) {},

            onEventSelect: function () {},

            onEventCreate: function ($el) {},

            onDayCreate: function ($el, d, m, y) {}
        };


    // ============================================================
    // DD/MM/YYYY -> JavaScript Date
    // ============================================================
    function parseDateDMY(dateString) {

        if (!dateString) {
            return new Date();
        }

        // Remove spaces
        dateString = $.trim(dateString);

        // Split DD/MM/YYYY
        var parts = dateString.split('/');

        if (parts.length !== 3) {

            console.error(
                'simpleCalendar: Date must be DD/MM/YYYY'
            );

            return new Date();
        }

        var day = parseInt(parts[0], 10);

        var month = parseInt(parts[1], 10);

        var year = parseInt(parts[2], 10);


        if (
            isNaN(day) ||
            isNaN(month) ||
            isNaN(year)
        ) {

            console.error(
                'simpleCalendar: Invalid date ' + dateString
            );

            return new Date();
        }


        // JavaScript month starts from 0
        var date = new Date(
            year,
            month - 1,
            day
        );


        // Validate date
        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {

            console.error(
                'simpleCalendar: Invalid date ' + dateString
            );

            return new Date();
        }


        return date;
    }


    // ============================================================
    // PLUGIN CONSTRUCTOR
    // ============================================================
    function Plugin(element, options) {

        this.element = element;

        this.settings = $.extend(
            {},
            defaults,
            options
        );

        this._defaults = defaults;

        this._name = pluginName;


        // ========================================================
        // IMPORTANT:
        // Use fromDate if supplied
        // Otherwise use today's date
        // ========================================================
        if (this.settings.fromDate) {

            this.currentDate =
                parseDateDMY(
                    this.settings.fromDate
                );

        } else {

            this.currentDate =
                new Date();

        }


        this.init();
    }


    // ============================================================
    // PLUGIN FUNCTIONS
    // ============================================================
    $.extend(Plugin.prototype, {

        // ========================================================
        // INIT
        // ========================================================
        init: function () {

            var container =
                $(this.element);

            var todayDate =
                this.currentDate;


            var calendar =
                $('<div class="calendar"></div>');


            var header =
                $('<header>' +

                    '<h2 class="month"></h2>' +

                    '<a class="simple-calendar-btn btn-prev" href="#"></a>' +

                    '<a class="simple-calendar-btn btn-next" href="#"></a>' +

                '</header>');


            this.updateHeader(
                todayDate,
                header
            );


            calendar.append(header);


            this.buildCalendar(
                todayDate,
                calendar
            );


            container.append(calendar);


            this.bindEvents();


            this.settings.onInit(this);
        },


        // ========================================================
        // UPDATE HEADER
        // ========================================================
        updateHeader: function (
            date,
            header
        ) {

            var monthText =
                this.settings.months[
                    date.getMonth()
                ];


            if (this.settings.displayYear) {

                monthText +=
                    ' <div class="year">' +
                    date.getFullYear() +
                    '</div>';

            }


            header
                .find('.month')
                .html(monthText);
        },


        // ========================================================
        // BUILD CALENDAR
        // ========================================================
        buildCalendar: function (
            fromDate,
            calendar
        ) {

            var plugin = this;


            calendar
                .find('table')
                .remove();


            var body =
                $('<table></table>');


            var thead =
                $('<thead></thead>');


            var tbody =
                $('<tbody></tbody>');


            // ====================================================
            // CURRENT YEAR / MONTH
            // ====================================================
            var y =
                fromDate.getFullYear();

            var m =
                fromDate.getMonth();


            // ====================================================
            // FIRST DAY
            // ====================================================
            var firstDay =
                new Date(
                    y,
                    m,
                    1
                );


            // ====================================================
            // LAST DAY
            // ====================================================
            var lastDay =
                new Date(
                    y,
                    m + 1,
                    0
                );


            var startDayOfWeek =
                firstDay.getDay();


            // ====================================================
            // FIXED START DAY
            // ====================================================
            if (
                this.settings.fixedStartDay !== false
            ) {

                startDayOfWeek =
                    this.settings.fixedStartDay === true
                        ? 1
                        : this.settings.fixedStartDay;


                // Move first day backwards
                while (
                    firstDay.getDay() !==
                    startDayOfWeek
                ) {

                    firstDay.setDate(
                        firstDay.getDate() - 1
                    );
                }


                // Move last day forwards
                while (
                    lastDay.getDay() !==
                    ((startDayOfWeek + 6) % 7)
                ) {

                    lastDay.setDate(
                        lastDay.getDate() + 1
                    );
                }
            }


            // ====================================================
            // DAYS HEADER
            // ====================================================
            for (
                var i = startDayOfWeek;
                i < startDayOfWeek + 7;
                i++
            ) {

                thead.append(
                    $('<td>' +
                        this.settings.days[
                            i % 7
                        ].substring(0, 3) +
                    '</td>')
                );
            }


            // ====================================================
            // CALENDAR DAYS
            // ====================================================
            for (
                var day = new Date(firstDay);
                day <= lastDay;
                day.setDate(
                    day.getDate()
                )
            ) {

                var tr =
                    $('<tr></tr>');


                for (
                    var i = 0;
                    i < 7;
                    i++
                ) {

                    // ============================================
                    // Save current day
                    // ============================================
                    var currentDay =
                        new Date(day);


                    var td =
                        $('<td>' +

                            '<div class="day" data-date="' +
                            currentDay.toISOString() +
                            '">' +

                            currentDay.getDate() +

                            '</div>' +

                        '</td>');


                    var $day =
                        td.find('.day');


                    // ============================================
                    // TODAY
                    // ============================================
                    if (
                        currentDay.toDateString() ===
                        (new Date()).toDateString()
                    ) {

                        $day.addClass(
                            "today"
                        );
                    }


                    // ============================================
                    // WRONG MONTH
                    // ============================================
                    if (
                        currentDay.getMonth() !=
                        fromDate.getMonth()
                    ) {

                        $day.addClass(
                            "wrong-month"
                        );
                    }


                    // ============================================
                    // EVENTS
                    // ============================================
                    var todayEvents =
                        plugin.getDateEvents(
                            currentDay
                        );


                    if (
                        todayEvents.length &&
                        plugin.settings.displayEvent
                    ) {

                        $day.addClass(
                            plugin.settings.disableEventDetails
                                ? "has-event disabled"
                                : "has-event"
                        );

                    } else {

                        if (
                            plugin.settings.disableEmptyDetails
                        ) {

                            $day.addClass(
                                "disabled"
                            );
                        }
                    }


                    // ============================================
                    // STORE EVENTS
                    // ============================================
                    $day.data(
                        'todayEvents',
                        todayEvents
                    );


                    // ============================================
                    // DAY CREATE CALLBACK
                    // ============================================
                    this.settings.onDayCreate(
                        $day,
                        currentDay.getDate(),
                        m,
                        y
                    );


                    tr.append(td);


                    // Next day
                    day.setDate(
                        day.getDate() + 1
                    );
                }


                tbody.append(tr);
            }


            body.append(thead);

            body.append(tbody);


            // ====================================================
            // EVENT CONTAINER
            // ====================================================
            var eventContainer =
                $('<div class="event-container">' +

                    '<div class="close"></div>' +

                    '<div class="event-wrapper"></div>' +

                '</div>');


            calendar.append(body);

            calendar.append(eventContainer);
        },


        // ========================================================
        // CHANGE MONTH
        // ========================================================
        changeMonth: function (
            value
        ) {

            this.currentDate.setMonth(
                this.currentDate.getMonth() + value,
                1
            );


            var calendar =
                $(this.element)
                    .find('.calendar');


            this.buildCalendar(
                this.currentDate,
                calendar
            );


            this.updateHeader(
                this.currentDate,
                calendar.find('header')
            );


            this.settings.onMonthChange(
                this.currentDate.getMonth(),
                this.currentDate.getFullYear()
            );
        },


        // ========================================================
        // EVENTS
        // ========================================================
        bindEvents: function () {

            var plugin = this;


            // Remove previous events
            $(plugin.element).off();


            // ====================================================
            // PREVIOUS MONTH
            // ====================================================
            $(plugin.element).on(
                'click',
                '.btn-prev',
                function (e) {

                    e.preventDefault();

                    plugin.changeMonth(-1);
                }
            );


            // ====================================================
            // NEXT MONTH
            // ====================================================
            $(plugin.element).on(
                'click',
                '.btn-next',
                function (e) {

                    e.preventDefault();

                    plugin.changeMonth(1);
                }
            );


            // ====================================================
            // DAY CLICK
            // ====================================================
            $(plugin.element).on(
                'click',
                '.day',
                function (e) {

                    var date =
                        new Date(
                            $(this).data('date')
                        );


                    var events =
                        plugin.getDateEvents(
                            date
                        );


                    if (
                        !$(this).hasClass(
                            'disabled'
                        )
                    ) {

                        plugin.fillUp(
                            e.pageX,
                            e.pageY
                        );


                        plugin.displayEvents(
                            events
                        );
                    }


                    plugin.settings.onDateSelect(
                        date,
                        events
                    );
                }
            );


            // ====================================================
            // CLOSE EVENTS
            // ====================================================
            $(plugin.element).on(
                'click',
                '.event-container .close',
                function (e) {

                    plugin.empty(
                        e.pageX,
                        e.pageY
                    );
                }
            );
        },


        // ========================================================
        // DISPLAY EVENTS
        // ========================================================
        displayEvents: function (
            events
        ) {

            var plugin = this;


            var container =
                $(this.element)
                    .find('.event-wrapper');


            // Clear old events
            container.empty();


            events.forEach(
                function (event) {

                    var startDate =
                        new Date(
                            event.startDate
                        );


                    var endDate =
                        new Date(
                            event.endDate
                        );


                    var $event =
                        $('' +

                            '<div class="event">' +

                                '<div class="event-hour">' +

                                    startDate.getHours() +

                                    ':' +

                                    (
                                        startDate.getMinutes() < 10
                                            ? '0'
                                            : ''
                                    ) +

                                    startDate.getMinutes() +

                                '</div>' +


                                '<div class="event-date">' +

                                    plugin.formatDateEvent(
                                        startDate,
                                        endDate
                                    ) +

                                '</div>' +


                                '<div class="event-summary">' +

                                    event.summary +

                                '</div>' +

                            '</div>'
                        );


                    $event.data(
                        'event',
                        event
                    );


                    $event.click(
                        plugin.settings.onEventSelect
                    );


                    plugin.settings.onEventCreate(
                        $event
                    );


                    container.append(
                        $event
                    );
                }
            );
        },


        // ========================================================
        // ADD EVENT
        // ========================================================
        addEvent: function (
            newEvent
        ) {

            this.settings.events.push(
                newEvent
            );


            this.buildCalendar(
                this.currentDate,
                $(this.element)
                    .find('.calendar')
            );
        },


        // ========================================================
        // SET EVENTS
        // ========================================================
        setEvents: function (
            newEvents
        ) {

            this.settings.events =
                newEvents;


            this.buildCalendar(
                this.currentDate,
                $(this.element)
                    .find('.calendar')
            );
        },


        // ========================================================
        // FILL UP ANIMATION
        // ========================================================
        fillUp: function (
            x,
            y
        ) {

            var plugin = this;

            var elem =
                $(plugin.element);


            var elemOffset =
                elem.offset();


            var filler =
                $('<div class="filler"></div>');


            filler.css(
                "left",
                x - elemOffset.left
            );


            filler.css(
                "top",
                y - elemOffset.top
            );


            elem.find('.calendar')
                .append(filler);


            filler.animate(
                {
                    width: "300%",
                    height: "300%"
                },
                500,
                function () {

                    elem
                        .find('.event-container')
                        .show();

                    filler.hide();
                }
            );
        },


        // ========================================================
        // EMPTY ANIMATION
        // ========================================================
        empty: function (
            x,
            y
        ) {

            var plugin = this;

            var elem =
                $(plugin.element);


            var filler =
                elem.find('.filler');


            filler.css(
                "width",
                "300%"
            );


            filler.css(
                "height",
                "300%"
            );


            filler.show();


            elem
                .find('.event-container')
                .hide()
                .find('.event')
                .remove();


            filler.animate(
                {
                    width: "0%",
                    height: "0%"
                },
                500,
                function () {

                    filler.remove();
                }
            );
        },


        // ========================================================
        // GET DATE EVENTS
        // ========================================================
        getDateEvents: function (
            d
        ) {

            var plugin = this;


            return plugin.settings.events.filter(
                function (event) {

                    return plugin.isDayBetween(
                        new Date(d),
                        new Date(event.startDate),
                        new Date(event.endDate)
                    );
                }
            );
        },


        // ========================================================
        // CHECK DATE BETWEEN
        // ========================================================
        isDayBetween: function (
            d,
            dStart,
            dEnd
        ) {

            dStart.setHours(
                0,
                0,
                0,
                0
            );


            dEnd.setHours(
                23,
                59,
                59,
                999
            );


            d.setHours(
                12,
                0,
                0,
                0
            );


            return (
                dStart <= d &&
                d <= dEnd
            );
        },


        // ========================================================
        // FORMAT EVENT DATE
        // ========================================================
        formatDateEvent: function (
            dateStart,
            dateEnd
        ) {

            var formatted = '';


            formatted +=
                this.settings.days[
                    dateStart.getDay()
                ] +

                ' - ' +

                dateStart.getDate() +

                ' ' +

                this.settings.months[
                    dateStart.getMonth()
                ].substring(0, 3);


            if (
                dateEnd.getDate() !==
                dateStart.getDate()
            ) {

                formatted +=
                    ' to ' +

                    dateEnd.getDate() +

                    ' ' +

                    this.settings.months[
                        dateEnd.getMonth()
                    ].substring(0, 3);
            }


            return formatted;
        }

    });


    // ============================================================
    // JQUERY PLUGIN WRAPPER
    // ============================================================
    $.fn[pluginName] = function (
        options
    ) {

        return this.each(
            function () {

                if (
                    !$.data(
                        this,
                        "plugin_" + pluginName
                    )
                ) {

                    $.data(
                        this,
                        "plugin_" + pluginName,
                        new Plugin(
                            this,
                            options
                        )
                    );
                }
            }
        );
    };


})(jQuery, window, document);