
/*
 * DateDiff
 * is a minimalized Javascript date arithmetic extension.
 * Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
 * License: MIT
 */

(function() {
  var DateDiff, divisors;

  DateDiff = function(date1, date2) {
    this.difference = Math.floor(date1 - date2);
  };

  divisors = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
  };

  DateDiff.prototype.days = function() {
    return this._roundIt(this.difference / divisors.days);
  };

  DateDiff.prototype.hours = function() {
    return this._roundIt(this.difference / divisors.hours);
  };

  DateDiff.prototype.minutes = function() {
    return this._roundIt(this.difference / divisors.minutes);
  };

  DateDiff.prototype.seconds = function() {
    return this._roundIt(this.difference / divisors.seconds);
  };

  DateDiff.prototype._roundIt = function(v) {
    return parseInt(v.toFixed(1));
  };

  Date.diff = function(date1, date2) {
    return new DateDiff(date1, date2);
  };

}).call(this);
