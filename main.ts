let mag = 0
let error = 0
basic.forever(function on_forever() {
    
    // error = CutebotPro.get_offset()
    let magY = input.magneticForce(Dimension.Y)
    let magX = input.magneticForce(Dimension.X)
    let magZ = input.magneticForce(Dimension.Z)
    serial.writeLine("" + ("" + magX) + ", " + ("" + magY) + ", " + ("" + magZ))
    // CutebotPro.color_light(CutebotProRGBLight.RGBL, 0x00ff00)
    basic.pause(300)
    CutebotPro.turnOffAllHeadlights()
})
