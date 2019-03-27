#include <Adafruit_NeoPixel.h>

#include <EduIntro.h>
#include <pitches.h>

byte btnPins[] = {D7, D8, D9, D10, D11, D12};
//setting up the buttons
Button btn[] = {
  Button(btnPins[0]), Button(btnPins[1]), Button(btnPins[2]), Button(btnPins[3]), Button(btnPins[4]), Button(btnPins[5])
};

//set the leds
const byte numLeds = 5;
const byte brightness = 100;
Adafruit_NeoPixel leds = Adafruit_NeoPixel(numLeds, 4);

void setup() {
  Serial.begin(9600);
  leds.begin();
  leds.setBrightness(brightness);
  leds.show();

}

void loop() {
  if (btn[0].pressed()) {
    Serial.println("Button1");
    for (int i = 0; i < numLeds; i++) {
      leds.setPixelColor(i, 0, 255, 0); // red
    }
  } else if (btn[1].pressed()) {
    Serial.println("Button2");
    for (int i = 0; i < numLeds; i++)
    {
      leds.setPixelColor(i, 255, 0, 0); //green
    }
  } else if (btn[2].pressed()) {
    Serial.println("Button3");
    for (int i = 0; i < numLeds; i++)
    {
      leds.setPixelColor(i, 0, 0, 255); // blue
    }
  } else if (btn[3].pressed()) {
    Serial.println("Button4");
    for (int i = 0; i < numLeds; i++)
    {
      leds.setPixelColor(i, 255, 255, 0); // yellow
    }
  } else if (btn[4].pressed()) {
    Serial.println("Button5");
    for (int i = 0; i < numLeds; i++)
    {
      leds.setPixelColor(i, 0, 128, 128); // purple
    }
  } else if (btn[5].pressed()) {
    Serial.println("Button6");
    for (int i = 0; i < numLeds; i++)
    {
      leds.setPixelColor(i, 140, 255, 0); // orange
    }
  }
  leds.show();
  delay(10);
}