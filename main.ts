input.onPinPressed(TouchPin.P0, function () {
    bin_four = true
    display()
})
input.onPinReleased(TouchPin.P2, function () {
    bin_one = false
    display()
})
input.onPinReleased(TouchPin.P0, function () {
    bin_four = false
    display()
})
input.onPinPressed(TouchPin.P2, function () {
    bin_one = true
    display()
})
function display () {
    result = 0
    if (bin_four) {
        result += 4
    }
    if (bin_two) {
        result += 2
    }
    if (bin_one) {
        result += 1
    }
    basic.showString("" + (result.toString()))
}
input.onPinPressed(TouchPin.P1, function () {
    bin_two = true
    display()
})
input.onPinReleased(TouchPin.P1, function () {
    bin_two = false
    display()
})
let bin_two = false
let bin_one = false
let bin_four = false
let result = 0
basic.forever(function () {
    display()
})
