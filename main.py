
def on_forever():
    #error = CutebotPro.get_offset()
    #magY = input.magnetic_force(Dimension.Y)
    #magX = input.magnetic_force(Dimension.X)
    #magZ = input.magnetic_force(Dimension.Z) 
    #serial.write_line("" + str(magX) + ", " + str(magY) + ", " + str(magZ))
    #strength = Math.pow((magX*magX + magY*magY + magZ*magZ), .5)
    #serial.write_line(str(strength))
    
    sonar = CutebotPro.ultrasonic(SonarUnit.CENTIMETERS)
    if sonar < 5:
        CutebotPro.single_headlights(CutebotProRGBLight.RGBL, 0, 255, 0)
        #serial.write_line(str(sonar))
    else:
        CutebotPro.turn_off_all_headlights()
    
    

    #CutebotPro.color_light(CutebotProRGBLight.RGBL, 0x00ff00)
    basic.pause(300)
basic.forever(on_forever)
