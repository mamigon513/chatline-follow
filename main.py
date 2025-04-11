mag = 0
error = 0

def on_forever():
    global mag, error
    #error = CutebotPro.get_offset()
    magY = input.magnetic_force(Dimension.Y)
    magX = input.magnetic_force(Dimension.X)
    magZ = input.magnetic_force(Dimension.Z) 
    serial.write_line("" + str(magX) + ", " + str(magY) + ", " + str(magZ))
    #CutebotPro.color_light(CutebotProRGBLight.RGBL, 0x00ff00)
    basic.pause(300)
    CutebotPro.turn_off_all_headlights()
basic.forever(on_forever)
