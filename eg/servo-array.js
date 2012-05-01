var five = require("../lib/johnny-five.js"),
    board, servos, array;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  servos = {
    a: new five.Servo(9),
    b: new five.Servo(10)
  };

  array = five.Servo.Array();

  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    s: servos,
    a: array
  });

  console.log( array );

  // Servo.Array API

  // center()
  //
  // centers all servos to 90deg
  //
  array.center();


  // min()
  //
  // set all servos to the minimum degrees
  // defaults to 0
  //
  // eg. array.min();

  // max()
  //
  // set all servos to the maximum degrees
  // defaults to 180
  //
  // eg. array.max();

  // stop()
  //
  // stop all servos
  //
  // eg. array.stop();

  // each( callbackFn )
  //
  // Execute callbackFn for each active servo instance
  //
  // eg.
  // array.each(function( servo, index ) {
  //
  //  `this` refers to the current servo instance
  //
  // });

});