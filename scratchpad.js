$.getScript('https://antimatter15.com/ocrad.js/ocrad.js');

$.getScript('https://antimatter15.com/ocrad.js/ocrad.js', function() {
    function grayscale(imageData) {
        // This loop gets every pixels on the image and
        var i =0;
        var j=0;
        for (var i = 0; i < imageData.height; i++) {
            for (var j = 0; j < imageData.width; j++) {
                var index = (i * 4) * imageData.width + (j * 4);
                var red = imageData.data[index];
                var green = imageData.data[index + 1];
                var blue = imageData.data[index + 2];
                var alpha = imageData.data[index + 3];
                var average = (red + green + blue) / 3;
                imageData.data[index] = average;
                imageData.data[index + 1] = average;
                imageData.data[index + 2] = average;
                imageData.data[index + 3] = alpha;
            }
        }
    }

    var e = document.getElementById('race-track');
    var ctx = e.getContext('2d');
    var imgData = ctx.getImageData(0, e.height * 0.70, e.width, e.height - (e.height * 0.70));
    var dataCopy = new Uint8ClampedArray(imgData.data);
    var imgCopy = new ImageData(imgData.width, imgData.height);
    imgCopy.data.set(dataCopy);
    grayscale(imgCopy);
    var s = OCRAD(imgCopy);
    window.s = s;
})


var $img = $('#image');

var context = document.createElement('canvas').getContext('2d');
context.drawImage($img[0], 0, 0);

alert(string);

var e = document.getElementById('race-track');
var ctx = e.getContext('2d');
var ofillText = CanvasRenderingContext2D.prototype.fillText;
var sentence = ""
var start = false;
var done = false;
CanvasRenderingContext2D.prototype.fillText = function() {
  console.log('fillText', arguments);
  var arg0 = arguments[0];
  if (!done && (typeof arg0 === 'string') && ( (arg0.length === 0) || (arg0.length === 1) ) ) {
    start = true;
    sentence += arg0;
    setTimeout(function() {
      if (!done) {
        console.log('sentence', sentence);
        done = true;
      }
    }, 1000);

  }

  return ofillText.apply(this, arguments);
}



var ostrokeText = CanvasRenderingContext2D.prototype.strokeText;
CanvasRenderingContext2D.prototype.strokeText = function() { console.log('strokeText', arguments); return ostrokeText.apply(this, arguments); }


// ---


var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

keyboardEvent[initMethod](
                   "keydown", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    40, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);
document.dispatchEvent(keyboardEvent);

keyboardEvent[initMethod](
                   "keydown", // event type : keydown, keyup, keypress
                    true, // bubbles
                    true, // cancelable
                    window, // viewArg: should be window
                    false, // ctrlKeyArg
                    false, // altKeyArg
                    false, // shiftKeyArg
                    false, // metaKeyArg
                    97, // keyCodeArg : unsigned long the virtual key code, else 0
                    0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
);


var e = jQuery.Event("keydown");
e.which = 97; // # Some key code value
$("body").trigger(e);

var e = jQuery.Event( 'keydown', { which: 97 } );
$('canvas').trigger(e);

var e = jQuery.Event("keydown");
e.which = "a".charCodeAt(0); // # Some key code value
e.keyCode = "a".charCodeAt(0);
$("canvas").trigger(e);

function fireKey(el,key)
{
    if(document.createEventObject)
    {
        var eventObj = document.createEventObject();
        eventObj.keyCode = key;
        el.fireEvent("onkeydown", eventObj);
        eventObj.keyCode = key;
    }else if(document.createEvent)
    {
        var eventObj = document.createEvent("Events");
        eventObj.initEvent("keydown", true, true);
        eventObj.which = key;
        eventObj.keyCode = key;
        el.dispatchEvent(eventObj);

        var eventObj2 = document.createEvent("Events");
        eventObj2.initEvent("keyup", true, true);
        eventObj2.which = key;
        eventObj2.keyCode = key;
        el.dispatchEvent(eventObj2);
    }
}

fireKey(document.getElementsByTagName('canvas')[0], 97);

// -----------------

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

var ofillText = CanvasRenderingContext2D.prototype.fillText;
CanvasRenderingContext2D.prototype.fillText = function() {
  //console.log('fillText', arguments);
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
