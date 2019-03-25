/*///code using only digital input and output --first iterations
///this part of the code taken from https://www.instructables.com/id/Arduino-Sound-Sensor-with-LED/
int soundSensor=2;  //Sound Sensor Port
int LED=4;  //LED Port
boolean LEDStatus=false;

void setup() {
 pinMode(soundSensor,INPUT);
 pinMode(LED,OUTPUT);
 Serial.begin(115200);

}

void loop() {

  int SensorData=analogRead(soundSensor); 
  Serial.print("SensorData= ");
  Serial.println(SensorData);
  if(SensorData==1){

    if(LEDStatus==false){
        LEDStatus=true;
        digitalWrite(LED,HIGH);
    }
    else{
        LEDStatus=false;
        digitalWrite(LED,LOW);
    }
  }
 } */

//Below code is for using sound strength to to change the color of LED
//Also, analog reading of the sensor is used differentiate sound level
//for changing the colors, used WS2812 LED with Adafruit NeoPixel library
//If the library is not installed, code will show errors

 #include <Adafruit_NeoPixel.h>

// Serial I/O based on example http://forum.arduino.cc/index.php?topic=396450

// Serial communication
const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];
int messageFromPC = 0;
boolean newData = false;
char redText[numChars] = {'r','e','d', '\0'};

//set the leds
const byte numLeds = 1;
const byte brightness = 100;
Adafruit_NeoPixel led = Adafruit_NeoPixel(numLeds, 7);


int sensorPin = A5; // select the input pin for A0
int ledPin = 7; // select the pin for the LED
int sensorValue = 0; // variable to store the value coming from the sensor
boolean LEDStatus=false;
int colorSetting = 0;
void setup ()
{
 pinMode(ledPin, OUTPUT);
 Serial.begin (300);
 
  led.begin();
  led.setPixelColor(1, 255, 0, 0);
  led.setBrightness(brightness);
  led.show();

  pinMode(sensorPin, INPUT);
}
void loop ()
{

  // Process serial communucation
  recvWithStartEndMarkers();
  sensorValue = analogRead(sensorPin);

  // If we received a command, process it
  if (newData == true)
  {
    strcpy(tempChars, receivedChars);
    parseData();
    
    // Debug: print parsed command to serial
    //showParsedData();
    sensorValue = messageFromPC;
    Serial.print("Overwriting the measured sensor value with message from PC");
    Serial.println(sensorValue);
    newData = false;
  }
  
  if(sensorValue>580){
    Serial.print("high");

    if(LEDStatus==false){
        LEDStatus=true;
        digitalWrite(ledPin,HIGH);
        colorSetting=1;
        
    }else{
        LEDStatus=false;
        digitalWrite(ledPin,LOW);
        colorSetting=0;
    }
  }else if(sensorValue>570){
    Serial.print("medium");

    if(LEDStatus==false){
        LEDStatus=true;
        digitalWrite(ledPin,HIGH);
        colorSetting=2;
    }else{
        LEDStatus=false;
       digitalWrite(ledPin,LOW);
       colorSetting=0;
    }
  }else if(sensorValue>560){
    if(LEDStatus==false){
        LEDStatus=true;
        digitalWrite(ledPin,HIGH);
        colorSetting=3;
    }else{
       
        LEDStatus=false;
        digitalWrite(ledPin,LOW);
        colorSetting=0;
    }
    
    
    
  }
  
  
 switch (colorSetting){
    case 0:{
      led.setPixelColor(0, 0, 0, 0);
       if(sensorValue>560){
         Serial.print("Light Turned Off\n");
        }
      break;
    }
    case 1:{
      led.setPixelColor(0, 0, 255, 0);
      Serial.print("Sound intensity is high: Light color is Red\n");
      Serial.print("ColorSetting 1\n");
  
      break;
      
    }
    case 2:{
      led.setPixelColor(0, 0, 0, 255);
      Serial.print("Sound intensity is medium: Light color is blue\n");
      Serial.print("ColorSetting 2\n");
     
      break;
      
    }
    case 3:{
      led.setPixelColor(0, 255, 0, 0);
      Serial.print("Sound intensity is low: Light color is Green\n");
      Serial.print("ColorSetting 3\n");
      break;}
  }
 led.setBrightness(brightness);
 led.show();
 
 if(sensorValue>560){
  Serial.print("SensorData=");
  Serial.println(sensorValue);
  Serial.print("Color Setting= ");
  Serial.println (colorSetting, DEC);
  }
 
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
 
  messageFromPC = atoi(strtokIndx); // convert this part to an integer
  strtokIndx = strtok(NULL, ",");   // this continues where the previous call left off
}

void showParsedData()
{
  Serial.print("Message \n");
  Serial.println(messageFromPC, DEC);
}

