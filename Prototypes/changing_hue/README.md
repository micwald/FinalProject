# motion-stream

This example streams motion and orientation data from a mobile device via websockets to a server. From there, the server distributes it to every connected client. (This is taken from Clint Heyer's README.md file)

In our prototype, motion stream was used to demonstrate an interaction with a pillow to dim the lights. The background color of the canvas changes to different hues of color yellow depending on the orientation of the pillow. This was done by creating a conditional and setting the beta rotation to specific values.

Additionally, an off button was created in html, styled in css and its functionality made in JavaScript. If the buttonState is true, the motion stream is postponed and the background color changes to black. This button was made based on the survey we made, where most of the people wanted to interact with the lights without standing up or moving from their sofa.

# Setup 
 
 In the terminal run the following command:

`$ npm install`

Running npm install will install the node modules of the package.

# Running

To run the server, enter the following command in the terminal:

`$ npm start`

To stop the server running press CTRL+C (PC) or CMD+C (Mac).

# Contributors 

Melika Ljutovic
