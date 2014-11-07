jQuery Vertical Timeline
========================
<b>Supporting all modern browsers and handheld devices</b>

This is a simple vertical timeline which uses CSS for the animations.


<b>[LIVE DEMO](http://danny.hearnah.com)</b>


Browser Support
===============

IE10+
Firefox 4+
Chrome 4+
Safari 3.1+
Opera 10.5+

Handheld
Safari 3.2+
Android Browser 2.1+
Opera 10+
Blackberry 7+
Firefox Android 32+
IE 10+


How to Use
==========

Check out the bottom of the [DEMO PAGE](demo/index.html) to see how to intialise and use the plugin


Simple usage is as follows
```js
<script>
	$(document).ready(function(e){
		$('.cntl').cntl();
	});
</script>
```

Advanced usage is as follows
```js
<script>
	$(document).ready(function(e){
		$('.cntl').cntl({
			revealbefore: 300,
			anim_class: 'cntl-animate',
			onreveal: function(e){
				console.log(e);
			}
		});
	});
</script>
```
<h3>Options</h3>
<b>revealbefore</b>: 200 (default)
This should pass an int, and is the amount of pixels of the state to show from the bottom of the viewport before it is revealed, if set to 0 the state will reveal the second is it visible (not usually what you want).


<b>anim_class</b>: 'cntl-animate' (default)
This should pass a string, and is the class name you want to assign to your animating states, this should be defined in CSS as it will control all the animations - animation types are all maintained in CSS, [SEE CSS](lib/cntl.css) line 108 to 127

<h3>Callbacks</h3>
<b>onreveal</b>: null (default)
If this is a function, it will pass the current state to the function

