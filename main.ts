input.onButtonPressed(Button.A, function () {
    Conner += 1
    basic.showNumber(Conner)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showNumber(Tie)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Mckay += 1
    basic.showNumber(Mckay)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Conner")
    basic.showNumber(Conner)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Mckay")
    basic.showNumber(Mckay)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Tie")
    basic.showNumber(Tie)
    basic.pause(1000)
    basic.clearScreen()
})
let Tie = 0
let Mckay = 0
let Conner = 0
Conner = 0
Mckay = 0
