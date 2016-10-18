
console.log('installing nitro typer');
(function() {

  // start another race (reload page), if "race" button is displayed
  setInterval(function() {
    if (jQuery('.button.button-red.button-race.tooltip').size() > 0) {
      window.location.href = window.location.href;
    }
  }, 1000);

	function sendChar(c) {
	  var e = jQuery.Event("keypress");
	  e.which = c.charCodeAt(0);
	  $("body").trigger(e);
	}
	function autoType(s) {
	  s.split("").forEach(function(c) {
	    sendChar(c);
	  })
	}

	var started = false,
	  letters = [],
	  lastLetter = "";

	var ofillText = window.CanvasRenderingContext2D.prototype.fillText;
	window.CanvasRenderingContext2D.prototype.fillText = function() {
	  console.log('fillText', arguments);
	  var arg0 = arguments[0];
	  if ((typeof arg0 === 'string') && ( (arg0.length === 0) || (arg0.length === 1) ) ) {
	    // hack: make it a space if empty string
	    if (arg0.length === 0) {
	      arg0 = " ";
	    }
	    letters.push(arg0);
	    setTimeout(function() {
	        if (!started) {
	            started = true;
	            setInterval(function() {
	              if (letters.length > 0) {
	                var letter = letters.shift();

	                // hack: never send 2 spaces in a row
	                if (!(lastLetter === " " && letter === " ")) {
	                  autoType(letter);
	                }
	                lastLetter = letter;
	              }
	            }, 50)
	        }
	    }, 4500);
	  }

	  return ofillText.apply(this, arguments);
	}

})();
