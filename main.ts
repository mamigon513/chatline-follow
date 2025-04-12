basic.forever(function on_forever() {
    // error = CutebotPro.get_offset()
    // magY = input.magnetic_force(Dimension.Y)
    // magX = input.magnetic_force(Dimension.X)
    // magZ = input.magnetic_force(Dimension.Z) 
    // serial.write_line("" + str(magX) + ", " + str(magY) + ", " + str(magZ))
    // strength = Math.pow((magX*magX + magY*magY + magZ*magZ), .5)
    // serial.write_line(str(strength))
    let sonar = CutebotPro.ultrasonic(SonarUnit.Centimeters)
    if (sonar < 5) {
        CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 0, 255, 0)
    } else {
        // serial.write_line(str(sonar))
        CutebotPro.turnOffAllHeadlights()
    }
    
    // CutebotPro.color_light(CutebotProRGBLight.RGBL, 0x00ff00)
    basic.pause(300)
})
