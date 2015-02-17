function gameLoop() {
  
	window.requestAnimationFrame(gameLoop);
    var gamepad = navigator.getGamepads()[0] ;
	  //        socket.send(gamepad)
	  var joyrx = Math.round((gamepad.axes[2] + 1)*255);
	  var joyry = Math.round((gamepad.axes[3] + 1)*255);
	  var joylx = Math.round((gamepad.axes[0] + 1)*255);
	  var joyly = Math.round((gamepad.axes[1] + 1)*255);  
	  var trigl = Math.round(gamepad.buttons[6].value *255);
	  var trigr = Math.round(gamepad.buttons[7].value *255);
          socket.send(gamepad.buttons[9].value+','+gamepad.buttons[8].value+','+joyrx+','+joyry+','+
		  joylx+','+joyly+','+trigl+','+trigr+','+gamepad.buttons[14].value+
		  ','+gamepad.buttons[12].value+','+gamepad.buttons[15].value+','+gamepad.buttons[13].value+','+gamepad.buttons[5].value+','+
			gamepad.buttons[4].value+'\n');       
    };