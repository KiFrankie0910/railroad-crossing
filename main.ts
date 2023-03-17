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
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
