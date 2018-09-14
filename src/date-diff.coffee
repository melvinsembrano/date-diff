###
# DateDiff
# is a minimalized Javascript date arithmetic extension.
# Copyright (c) 2015 Melvin Sembrano (melvinsembrano@gmail.com)
# License: MIT
###

DateDiff = (date1, date2) ->
  @date1 = date1
  @date2 = date2
  @difference = Math.floor(date1 - date2)
  return

divisors =
  days: 1000*60*60*24
  hours: 1000*60*60
  minutes: 1000*60
  seconds: 1000

DateDiff.prototype.weeks = ->
  @_roundIt( @days() / 7 )

DateDiff.prototype.days = ->
  @_roundIt( @difference / divisors.days )

DateDiff.prototype.hours = ->
  @_roundIt( @difference / divisors.hours )

DateDiff.prototype.minutes = ->
  @_roundIt( @difference / divisors.minutes )

DateDiff.prototype.seconds = ->
  @_roundIt( @difference / divisors.seconds )

DateDiff.prototype.months = ->
  ret = (@date1.getFullYear() - @date2.getFullYear()) * 12
  ret += @date1.getMonth() - @date2.getMonth()
  eom = @endOfMonth(@date2).getDate()
  ret += (@date1.getDate() / eom) - (@date2.getDate() / eom)
  @_roundIt( ret )

DateDiff.prototype.years = ->
  ret = (@date1.getFullYear() - @date2.getFullYear())
  ret += (@dayOfYear(@date1) - @dayOfYear(@date2)) / @daysInYear(@date2)
  @_roundIt( ret )

DateDiff.prototype.endOfMonth = (date) ->
  new Date(date.getFullYear(), date.getMonth() + 1, 0)

DateDiff.prototype.endOfYear = (date) ->
  new Date(date.getFullYear()+1, 0, 0)

DateDiff.prototype.beginOfYear = (date) ->
  new Date(date.getFullYear(), 0, 0)

DateDiff.prototype.dayOfYear = (date) ->
  (date - @beginOfYear(date))/divisors.days

DateDiff.prototype.daysInYear = (date) ->
  (@endOfYear(date) - @beginOfYear(date))/divisors.days

DateDiff.prototype._roundIt = (v) ->
  parseFloat(v.toFixed(1))

Date.diff = (date1, date2) ->
  new DateDiff(date1, date2)

this.DateDiff = DateDiff

module.exports = DateDiff if typeof(module) isnt "undefined"
