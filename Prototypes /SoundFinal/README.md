# !! deprecated

This code demonstrate bidirectional communication bidirectional communication between an Arduino sketch and Javascript running in the browser. The functionality of the code is to receive data from Arduino and actuate (modify) certain objects of index.html file in script.js.

Further, the serial communication is also used to send data to Arduino and change the property of the prototype (in this case, the color of the LED)

# Architecture

* The Arduino sketch sends/receives via serial over USB
* A Node.js app connects to the computer's serial port. It's a webserver with websockets enabled. When serial data is received from the Arduino, it broadcasts it to all clients connected via websockets. When data is received on the websocket, it sends it to the Arduino. You can open the connection to your Node.js server from any number of web browsers, including mobile devices!


# Setup and running

In the directory you've got this sample:

1. Run `npm install`
2. Upload _Arduino\Arduino.ino_ to your Arduino
3. Open the serial monitor and ensure that you're getting occasional data from the Arduino. Once satisfied, close the monitor so the port is available again. If you're getting gibberish, double check to make sure the baud rate of the serial monitor is 115,200 (set in the Arduino sketch)
4. Start the Node.js sketch: `node app.js`. Since you didn't specify which serial port represents the Arduino, you'll get a list of ports displayed. Once you identify the right port, run it again with the port. On Windows this might be something like `node app.js com5` or on a Mac: `node app.js /dev/tty.usbmodem1411`. The port name is the often the same or similar to what shows up in the Arduino IDE.
5. Once started, you'll see the same periodic data showing up in the terminal, yay - data is being piped from the Arduino to browser land.
6. In your browser, open up `http://localhost:4000`. This will allow you to send commands to the app.js server, which in turn forwards it to the Arduino. Likewise, messages sent by the Arduino are displayed in the web page.


# Serial commands

The Arduino sketch receives commands in a simple string format:

  <Int>

  Eg:<582> corresponding to sound intensity

  The Arduino sketch sends commands in a simple string format containing the LED color:

  <Text>

Eg:
  <RED>

This simple format means you can easily test using Arduino's serial monitor, or send commands from Javascript code.

# Read more

More on:
* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

Bundles:
* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)

Credits:
* Arduino serial I/O: http://forum.arduino.cc/index.php?topic=396450
