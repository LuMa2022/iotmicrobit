basic.showIcon(IconNames.Heart)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Hello", 3, 0)
I2C_LCD1602.BacklightOn()
let value = 0
basic.forever(function () {
    value += 1
    I2C_LCD1602.ShowNumber(value, 7, 1)
    basic.pause(500)
})
