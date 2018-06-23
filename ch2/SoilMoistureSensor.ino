int moistureSensorPin     = A0;

void setup() {

    Serial.begin(115200);

}

void loop()

{

   delay(60000);           /// 60 x 1000 milisecconds

   Serial.print("Current moisture is ");

    Serial.println(getSoilMoisture());

}

int getSoilMoisture() {

    sensorValue = analogRead(moistureSensorPin);

    return(sensorValue);

}
