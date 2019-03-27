///code using only digital input and output --first iterations
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

  int SensorData=digitalRead(soundSensor); 
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
 } 
