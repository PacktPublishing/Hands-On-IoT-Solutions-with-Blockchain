#include <math.h>
#define THERMISTOR 4250
#define RESISTOR 100000

int temperatureSensorPin = A3;
void setup() {

Serial.begin(115200);
}

void loop()
{
delay(3000);
Serial.print("Current temperature is \t");
Serial.println(getTemperature());
}

float getTemperature() {
int sensorValue = analogRead(temperatureSensorPin);

float R = 1023.0/sensorValue-1.0;
R = RESISTOR*R;

float temperature = 1.0/(log(R/RESISTOR)/THERMISTOR+1/298.15)-273.15;

return(temperature);
}
