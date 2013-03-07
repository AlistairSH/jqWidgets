( function($) {"use strict";
        ko.bindingHandlers.jqWidgets = {
            update : function(element, valueAccessor) {

                var value = valueAccessor(), myBinding = ko.utils.unwrapObservable(value);

                // Sanity check: can't directly check that it's truly a _widget_, but
                // can at least verify that it's a defined function on jQuery:
                if ( typeof $.fn[myBinding.widget] !== 'function') {
                    throw new Error("jqueryui binding doesn't recognize '" + myBinding.widget + "' as jQuery UI widget");
                }

                // Attach the jQuery UI Widget and/or update its options.
                // (The syntax is the same for both.)
                $(element)[myBinding.widget](myBinding.options);

                // If an observable was provided, handle the field changing
                if (typeof myBinding.observable !== 'undefined') {
                    var observable = myBinding.observable;
                    $(element).val(observable());
                    ko.utils.registerEventHandler(element, "change", function() {

                        observable($(element).val());
                    });
                }
            }
        };
    }(jQuery));
