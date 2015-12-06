[![Build Status](https://travis-ci.org/melvinsembrano/date-diff.svg)](https://travis-ci.org/melvinsembrano/date-diff)
[![npm version](https://badge.fury.io/js/date-diff.svg)](https://badge.fury.io/js/date-diff)
# DateDiff
DateDiff is a minimalized javascript date arithmetic extension.

It works perfectly with [**easy-date**](https://github.com/melvinsembrano/easy-date)

### Installation
**Node.js** `npm install date-diff`

**Bower** `bower install date-diff`

[**Download the latest**](https://github.com/melvinsembrano/date-diff/archive/master.zip)

### Usage
**Node.js**
```
var DateDiff = require('date-diff');
```
**In Browser**
```
<script src="date-diff.js"></script>
```
**Quickstart usage:**

```
var date1 = new Date(2015, 11, 1); // 2015-12-1
var date2 = new Date(2014, 0, 1); // 2014-01-1

var diff = new DateDiff(date1, date2);

diff.years(); // ===> 1.9
diff.months(); // ===> 23
diff.days(); // ===> 699
diff.weeks(); // ===> 99.9
diff.hours(); // ===> 16776
diff.minutes(); // ===> 1006560
diff.seconds(); // ===> 60393600
```
it also add a date helper method:
```
Date.diff(date1, date2).years();
Date.diff(date1, date2).months();
```

#### Contributing to DateDiff

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the Gruntfile, package.json, travis.yml, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.
* Checkout Gruntfile.coffee, there are few grunt tasks that are very helpful during development.

##### Copyright
Copyright (c) 2015 Melvin Sembrano. See [LICENSE](LICENSE) for further details
