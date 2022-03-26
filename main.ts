let TempoMotor = 0
let TempoAnalog = 0
/**
 * Das Programm ist für die Hardware von Waveshare(Roboter Bausatz)
 */
function Schritt1 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function schritt1rueck (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function schritt2rueck (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function Schritt4 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function Schritt3 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function schritt3rueck (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function Vor () {
    Schritt1(1)
    basic.pause(TempoMotor)
    Schritt2(1)
    basic.pause(TempoMotor)
    Schritt3(1)
    basic.pause(TempoMotor)
    Schritt4(1)
    basic.pause(TempoMotor)
}
function Schritt4rueck (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function Schritt2 (tempo: number) {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
function rueck () {
    schritt1rueck(1)
    basic.pause(TempoMotor)
    schritt2rueck(1)
    basic.pause(TempoMotor)
    schritt3rueck(1)
    basic.pause(TempoMotor)
    Schritt4rueck(1)
    basic.pause(TempoMotor)
}
/**
 * Ein bipolarer Schrittmotor soll sich im Vollschrittbetrieb drehen. Benötigt werden 2 H Brücken
 */
/**
 * Tabelle Schrittmotor  Damit der Motor rückwärts läuft, folgende Tabelle: 
 * 
 * vor                                   rück
 * 
 * Spule 1    Spule 2       Spule 1    Spule 2
 * 
 * 0   1           1    0         0   1          0     1
 * 
 * 0   1           0    1         0   1          1     0
 * 
 * 1   0           0    1         1   0          1     0
 * 
 * 1   0           1    0         1   0          0     1
 */
basic.forever(function () {
    TempoAnalog = pins.analogReadPin(AnalogPin.P0)
    TempoMotor = TempoAnalog / 4
    if (input.buttonIsPressed(Button.A)) {
        Vor()
        basic.showString("V")
    } else {
        rueck()
        basic.showString("r")
    }
})
