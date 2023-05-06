input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onGesture(Gesture.Shake, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
