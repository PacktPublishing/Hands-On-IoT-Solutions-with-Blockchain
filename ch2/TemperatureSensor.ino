#include <math.h>

#define THERMISTOR  3975                  //B value of the thermistor

int temperatureSensorPin  = A3;

void setup() {

    Serial.begin(115200);

}

void loop()

{

   delay(60000);           /// 60 x 1000 milisecconds

   Serial.print("Current moisture is ");

    Serial.println(getSoilMoisture());

}

float getTemperature() {

    int a = analogRead(temperatureSensorPin);

    float resistance = (float)(1023-a)*10000/a; //get the resistance of the sensor;

    float temperature = 1/(log(resistance/10000)/THERMISTOR+1/298.15)-273.15; //convert to temperature via datasheet ;

    return(temperature);

}
