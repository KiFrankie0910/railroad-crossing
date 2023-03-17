input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P1, 0)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    let Train_Passing = 0
    if (Train_Passing == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (Train_Passing == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
