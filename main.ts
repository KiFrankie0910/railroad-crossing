input.onButtonPressed(Button.A, function () {
    Train_Passing = 1
    pins.servoWritePin(AnalogPin.P1, 90)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    Train_Passing = 0
    pins.servoWritePin(AnalogPin.P1, 0)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
let Train_Passing = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P1, 0)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (Train_Passing == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(100)
    }
    if (Train_Passing == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
