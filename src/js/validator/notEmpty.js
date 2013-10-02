(function($) {
    $.extend($.bootstrapValidator.validator, {
        notEmpty: {
            /**
             * Check an input value is empty or not
             *
             * @param {HTMLElement} element
             * @param {Object} options
             * @returns {boolean}
             */
            validate: function(element, options) {
                var value = $.trim($(element).val());
                return (value != '');
            }
        }
    });
}(window.jQuery));
