pins.servoWritePin(AnalogPin.P9, 0)
basic.pause(100)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P9, 0)
    basic.pause(500)
})
