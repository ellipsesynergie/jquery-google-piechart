/*
 *  Project: jQuery / Google Pie Chart
 *  Description: A jQuery pie chart using Google API
 *  Author: Ellipse Synergie (https://github.com/ellipsesynergie/)
 *  License: MIT
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "piechart";
    var defaults = {
        'backgroundColor': 'transparent',
        'colors': ['#468851', '#C24A48'],
        'legend': {'position': 'none'}
    };
    
    // Constructor
    function Piechart(element, options) {
    
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.data = $(this.element).data('data');
        this.init();
    }

    Piechart.prototype = {

        init: function() {

            var chartData = google.visualization.arrayToDataTable(this.data);
            
            var chart = new google.visualization.PieChart(this.element);
            chart.draw(chartData, this.options);
        }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Piechart(this, options));
            }
        });
    };
    
})(jQuery, window, document);