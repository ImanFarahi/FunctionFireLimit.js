# FunctionFireLimit.js
function fire rate limit contains debounce and throttle for javascript

```javascript
<script src="./FunctionFireLimit-1.0.0.min.js" type="text/javascript"></script>

<script type="text/javascript">
   $('body').on('mousemove', FunctionFireLimit.throttle(function (event) {
		console.log('clientX: ' + event.originalEvent.clientX);
	}, 1000, false));
  
  $(window).on('scroll', FunctionFireLimit.debounce(function (event) {
		console.log('scrollTop: ' + $(window).scrollTop());
	}, 1000, false));
</script>

```

## example
### debounce function
Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be called after it stops being called for N milliseconds. If `immediate` is passed, trigger the function on the leading edge, instead of the trailing.


```javascript
FunctionFireLimit.debounce(callBack, delay, immediate, scope);
```
delay, immediate and scope are optinal
default delay = 250
default immediate = false
default scope = this


### throttle function
Returns a function, that, when invoked, will only be triggered at most once during a given window of time. Normally, the throttled function will run as much as it can, without ever going more than once per `threshhold` duration; but if you'd like to disable the execution on the leading edge, If `immediate` is passed, trigger the function on the leading edge.

```javascript
FunctionFireLimit.throttle(callBack, threshhold, immediate, scope);
```
threshhold, immediate and scope are optinal
default threshhold = 250
default immediate = false
default scope = this


