var viewModel = function() {"use strict";
    var self = this;

    this.foo = ko.observable($.datepicker.formatDate("mm/dd/yy", new Date()));
    this.bar = ko.observable(0);

    this.incrementBar = function() {
        self.bar(self.bar() + 1);
    };

    this.pickerOptions = {
        showOn : 'button',
        buttonImage : "images/calendar.gif",
        buttonImageOnly : true
    };
};

$(document).ready(function() {
    ko.applyBindings(new viewModel());
});
