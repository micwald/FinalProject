#include <Adafruit_NeoPixel.h>

// Serial I/O based on example http://forum.arduino.cc/index.php?topic=396450

// Serial communication
const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];
char messageFromPC[numChars] = {0};
boolean newData = false;
char redText[numChars] = {'r','e','d', '\0'}; 

//set the leds
const byte numLeds = 3;
const byte brightness = 100;
Adafruit_NeoPixel leds = Adafruit_NeoPixel(numLeds, 7);


const int analogInPin = A0; // Analog input pin that the potentiometer is attached to

int sensorValue = 0; // value read from the pot
int outputValue = 0;

long lastFakeReport = 0;

enum
{
  MsgAcknowledge, // 0
  MsgError,       // 1
  MsgMove,        // 2
  MsgMoveResult,  // 3
  MsgPosition,    // 4
};



void setup()
{
  Serial.begin(115200);

  leds.begin();
  leds.setBrightness(brightness);
  leds.show();

  pinMode(analogInPin, INPUT);

  //report(MsgAcknowledge, "Ready");
}

void loop()
{
  // Process serial communucation
  recvWithStartEndMarkers();

  // If we received a command, process it
  if (newData == true)
  {
    strcpy(tempChars, receivedChars);
    parseData();
    
    // Debug: print parsed command to serial
    //showParsedData();
    newData = false;
  }
  
  // read the value of the potentiometer:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 100);

  //check the text and give different colors
  for (int i = 0; i < numLeds; i++)
  {
    switch(messageFromPC[0]) //it takes the first letter and set's the leds color
    {
       case 'g': //green
        leds.setPixelColor(i, 255, 0, 0);
        break;
      case 'r': //red
        leds.setPixelColor(i, 0, 255, 0);
        break;
      case 'b':
        if(messageFromPC[2] == 'u') //we check if the third letter is 'u' for blue
        leds.setPixelColor(i, 0, 0, 255);
        else if(messageFromPC[2] == 'o') //brown
        leds.setPixelColor(i, 69, 139, 19);
        break;
      case 'y': //yellow
        leds.setPixelColor(i, 255,255,0);
        break;
      case 'c': //cyan
        leds.setPixelColor(i, 128,0,128);
        break;
      case 'p':
        if(messageFromPC[2] == 'r') //purple
        leds.setPixelColor(i, 0,128,128);
        else if(messageFromPC[2] == 'n') //pink
        leds.setPixelColor(i, 105, 255, 180);
        break;
      case 'o': //orange
        leds.setPixelColor(i, 140,255,0);
        break;
      default: // if none of the above, set the color to white
        leds.setPixelColor(i, 255,255,255);
        break;
    }
     leds.show();
    
  }
  leds.setBrightness(outputValue);
  // print the results to the Serial Monitor:
  //Serial.print("msg = ");
  //Serial.println(messageFromPC);
  //Serial.print("sensor = ");
  Serial.println(sensorValue);


 //We changed the loop from 1 second to 100 milliseconds 
  delay(100);
}

void recvWithStartEndMarkers()
{
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char startMarker = '<';
  char endMarker = '>';
  char rc;

  while (Serial.available() > 0 && newData == false)
  {
    rc = Serial.read();

    if (recvInProgress == true)
    {
      if (rc != endMarker)
      {
        receivedChars[ndx] = rc;
        ndx++;
        if (ndx >= numChars)
        {
          ndx = numChars - 1;
        }
      }
      else
      {
        receivedChars[ndx] = '\0'; // terminate the string
        recvInProgress = false;
        ndx = 0;
        newData = true;
        Serial.println(receivedChars);
      }
    }

    else if (rc == startMarker)
    {
      recvInProgress = true;
    }
  }
}

void parseData()
{                   // split the data into its parts
  char *strtokIndx; // this is used by strtok() as an index

  strtokIndx = strtok(tempChars, ","); // get the first part - the string
  strcpy(messageFromPC, strtokIndx);   // copy it to messageFromPC

  strtokIndx = strtok(NULL, ",");   // this continues where the previous call left off
  //integerFromPC = atoi(strtokIndx); // convert this part to an integer
}

void showParsedData()
{
  Serial.print("Message ");
  Serial.println(messageFromPC);
}