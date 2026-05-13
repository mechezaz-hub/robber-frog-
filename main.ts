scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
        `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
    for (let index = 0; index < chests; index++) {
        info.changeScoreBy(1)
        chests += -1
        collected += 1
    }
    if (collected == 1) {
        chestsleft = 4
        levelscomplete += 1
        collected += 1
        game.showLongText("level 2, 4 chests", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`
            level3
            `)
        tiles.placeOnRandomTile(mySprite, assets.tile`
            myTile0
            `)
    } else if (collected == 6) {
        chestsleft = 10
        levelscomplete += 1
        collected += 1
        game.showLongText("level 3, 10 chests", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`
            level4
            `)
        tiles.placeOnRandomTile(mySprite, assets.tile`
            myTile0
            `)
    } else if (collected == 17) {
        chestsleft = 15
        levelscomplete += 1
        collected += 1
        game.showLongText("final level, 15 chests", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`
            level7
            `)
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
                . f f f f f f f f f f f f f f .
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                . f f f f f f f f f f f f f f .
                `, SpriteKind.Player)
        scene.cameraFollowSprite(mySprite)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 14))
    } else if (collected == 33) {
        music.play(music.createSong(hex`
                0078000408020300001c00010a006400f4016400000400000000000000000000000000050000043f000000040002272a08000c000225290c0010000224271000140002222518001c000220241c002000021d202000240002191d28002c00021b1e30003400021d2002001c000c960064006d019001000478002c010000640032000000000a0600052a0000000400012008000c00012210001400012418001c00012520002400012728002c00012930003400012a06001c00010a006400f4016400000400000000000000000000000000000000025a0000000400012c04000800012c08000c00012c0c001000012a10001400012c14001800012c18001c00012c1c002000012c20002400012a24002800012a28002c00012c2c003000012c30003400012c38003c0001273c0040000129
                `), music.PlaybackMode.InBackground)
        tiles.setCurrentTilemap(tilemap`
            level8
            `)
        scene.setBackgroundImage(img`
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555555555
            `)
        sprites.destroy(mySprite)
        captures += 1
        scoretotal = (1500 - buttons_pressed) / captures
        captures += -1
        if (hardmodeACTIVATED == 1) {
            scoretotal += 500
        }
        
        timer.after(50, function on_after() {
            
            info.stopCountdown()
            story.showPlayerChoices("You win!", "")
            story.showPlayerChoices("" + ("" + buttons_pressed) + "presses", "")
            story.showPlayerChoices("" + ("" + captures) + "captures", "")
            story.showPlayerChoices("" + ("" + scoretotal) + "score", "")
            scene.setBackgroundImage(img`
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccaaaccccccccccccccccccccccccaacccccccccaccccccccc
                cccccccccccaacaaccccccccaaaacccccccccaacaacccccccaaacccccccc
                ccaaaccccccacccccccccccaaccaccccccccaacccaccccccaccacccaaacc
                cacfcfccfccfcfccccccccccccccccccccccccccccccccccaccccccacacc
                ccf6f6ff6ff6f6fcccccccccccffffffffcccccccccccccccccccccccacc
                ccf6f6f6f6f6f6fccffffffcfffeeeeeefcccfffffcccccccccccccccccc
                cccf6ff6f6f6f6fcffeeeefffeeeeeeeefffffeeefffccffffffcccccccc
                ccff6ff6f6f6f6fffeccceeeefffffffffffffeeeeeffffeeeefccffffff
                cfff6ff6f6f6f6ffeeceeefffeeeeeeeeeeeeefffeeefeeeeeeefffeeeee
                ffef6fef6fef6ffeeecefffeeeeeeeffeeeeeeeeffeeeeeeeeeefeeeeeee
                eeefffefffeffefefefffeeeeeeeefffeeeeeeeeeeffeeeeeeeeeeeeeeee
                eef6f6f6f6f6ff6f6feeeeeeeeeff55feeeefffeeeeffeeeccceeeeeecce
                eef6f6f6f6f6ff6f6feeeeeeeeef555feeff55feeeeefeeeeecceeeeeccc
                eef6f6f6f6f66f6f6feeeeeeeff5555fff5555feeeeeffeeeeeceeeeceee
                eecf6f6ff6f6f66f6feeeeeeef55555ff55255feeeeeefeeeeeeeeeeeeee
                eecf6f6ff6f6ff6ffeeeeeeef552525555225ffefffeeefeeeeeeceeeeee
                eeef6f6ff6f6ff6f6feeeeef5555555555255ffff5feeeffeeccccceeeee
                eeeefefcefefeefefeeeeeff555ffffff5555f5555feeeefeeceeeeceeee
                eeeeeeeeeeeeeefeeeeeeefffff77777fff5552555feeeefeeeeeeeceeee
                eeeeeeeeeeeeeefeeeeeeefff7777777777ff55555feeeefeeeeeeeeeeee
                eeeeeeecceeeeefeeeeeeff7777777777777ff552feeeeefeeccceeeeeee
                eeeeeecccceeeefeeeeeff777777777777777ff55feeeeffeceeceeefffe
                ccceeeeeeeeeeefeeeeffcff77777777777777f55feeeefecceeeffff4ff
                eecceeeeeeeeeefeeeefcccfff77777777777fff5feeeefeeeeeff444444
                eeeceeeeeccceefefffccccccfffffffffffffcfffeeeefeeeeef4444444
                efffffeecceceefff7ffcccfffffcccccffffcccffeeeffeeeeff4444444
                ff444ffeeeeeeeff77fffcccf222fcccf2222fccfffeefeeefef44444444
                4444444feeeeeff77f77ffcccfffcccccffffccff7fffeeefff44444eee4
                4444444fffffff777f777fffcccccccccccccfff77f7ffff44444444e444
                44444444f44444f77f77777fffffffffffffff7777ff7ff4444444444444
                4eeee444444444f77ff777777777777777777777777f77f4444444444444
                4444e44444fffffffff77777777777777777777777ff77f44eee4444ee44
                4444444444feeeeffef77777777777777777f77777f777f4444e444ee444
                444444444ffeeeeefffff7777777777777fff7777ff777f44444444e4444
                444444444feeeeeff77fff7777fffffffff7777ffffffff4444444444444
                4444e4444ffeeefff7777f7777777777777777ffffeeeeeff44444444444
                444eee4444ffffff77777f777777777777777f77ffeeeeeeff4444444444
                44444444444feeeff77777f7777777777ffff777ffeeeeeeef44444eee44
                44444444444feeeeff7777ff7777777ff777777fffeeeeeeff4444e44444
                44444444444feeeeeff7777fffffffffff7777ffeffeeeeff4444ee44444
                4444444ff44feeeeeeeffffffeeeeeeeeefffffeeeffffff444444444444
                eeee44ffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef4444444444444444
                444e4ff5555feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffff444444444
                44444f55555feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef555555f444444444
                444f4f55555ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff555555ff44444444
                4fffff5555555fffeeeeeeeeeeeeeeeeeeeeeeeefff55555555ffffffff4
                f555555555555555fffffffffffffffffffffffff5555555555f555555ff
                55555555555555555555555555555555555555555555554445555555555f
                555555555544455555555555555555555555555555555545455555555555
                555555555445445555555555555555455555555555555555555555555555
                444455544555555555555555555544444555555555555555555444555555
                555555545555555555555555554455554555555444444555554454555555
                555555555555555555555555544555554555555455555555544555555555
                555555555555555555555555555555555555555555555555545555555555
                555555555555555555444455555555555555555555555555455555544444
                555555444445555555555544555555555555555555555555555555555554
                555554555544555555555554555555555555555555555555555555555555
                555555555555555555555555555555555555555555555555555555555555
                `)
            info.setScore(scoretotal)
            if (scoretotal >= 500) {
                story.showPlayerChoices("secret level", "")
                story.showPlayerChoices("??? chests", "")
                tiles.setCurrentTilemap(tilemap`
                    level6
                    `)
                tiles.placeOnRandomTile(mySprite, assets.tile`
                    myTile0
                    `)
                scene.cameraFollowSprite(mySprite)
                collected += 1
                mySprite = sprites.create(assets.image`
                    WATER
                    `, SpriteKind.Player)
            }
            
        })
    }
    
})
function captured() {
    
    captures += 1
    tiles.setCurrentTilemap(tilemap`
        level5
        `)
    scene.setBackgroundImage(assets.image`
        GAME OVER0987654321
        `)
    music.setVolume(900000000000)
    music.play(music.createSong(assets.song`
            Game Over
            `), music.PlaybackMode.InBackground)
    music.setVolume(500)
    sprites.destroy(mySprite, effects.coolRadial, 1000)
    scene.cameraShake(12, 5000)
    timer.after(5000, function on_after2() {
        
        collected = 0
        keys = 0
        chests = 0
        hardmodeACTIVATED = 0
        info.setScore(1)
        mySprite = sprites.create(img`
                . f f f f f f f f f f f f f f .
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                . f f f f f f f f f f f f f f .
                `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`
            level1
            `)
        tiles.placeOnRandomTile(mySprite, assets.tile`
            myTile0
            `)
        scene.cameraFollowSprite(mySprite)
    })
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (intro == 0) {
        if (!mySprite.tileKindAt(TileDirection.Top, assets.tile`
            myTile3
            `)) {
            if (!mySprite.tileKindAt(TileDirection.Top, assets.tile`
                myTile1
                `)) {
                animation.runImageAnimation(mySprite, [img`
                        . f f f f f f f f f f f f f f .
                        f 7 7 7 7 f 3 3 3 3 f 7 7 7 7 f
                        f f f f f f f f f f f f f f f f
                        f c c c c f c c c c f c c c c f
                        f c c c f 2 f c c f 2 f c c c f
                        f c c c c f c c c c f c c c c f
                        f f f f f f f f f f f f f f f f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        . f f f f f f f f f f f f f f .
                        `], 500, false)
                easing.blockEaseBy(mySprite, 0, -16, 100, easing.Mode.InSine)
            }
            
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile6
        `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    
    music.play(music.createSoundEffect(WaveShape.Square, 1, 4869, 92, 0, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    tiles.setTileAt(location2, assets.tile`
        myTile8
        `)
    keys += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile
        `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    captured()
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function on_button_pressed() {
    
    buttons_pressed += 1
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 1136, 255, 0, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    tileinteraction()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile4
        `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    captured()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    if (!mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile3
        `)) {
        if (!mySprite.tileKindAt(TileDirection.Left, assets.tile`
            myTile1
            `)) {
            animation.runImageAnimation(mySprite, [img`
                    . f f f f f f f f f f f f f f .
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    f 7 f c f c f 7 7 7 7 7 7 7 7 f
                    f f f f 2 f f 7 7 7 7 7 7 7 7 f
                    f 3 f c f c f 7 7 7 7 7 7 7 7 f
                    f 3 f c c c f 7 7 7 7 7 7 7 7 f
                    f 3 f c c c f 7 7 7 7 7 7 7 7 f
                    f 3 f c f c f 7 7 7 7 7 7 7 7 f
                    f f f f 2 f f 7 7 7 7 7 7 7 7 f
                    f 7 f c f c f 7 7 7 7 7 7 7 7 f
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    f 7 f c c c f 7 7 7 7 7 7 7 7 f
                    . f f f f f f f f f f f f f f .
                    `], 500, false)
            easing.blockEaseBy(mySprite, -16, 0, 100, easing.Mode.InSine)
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile9
        `, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    
    music.play(music.createSoundEffect(WaveShape.Square, 1, 1405, 150, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    tiles.setTileAt(location5, assets.tile`
        myTile8
        `)
    chests += 1
    chestsleft += -1
})
info.onCountdownEnd(function on_countdown_end() {
    captured()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    if (!mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile3
        `)) {
        if (!mySprite.tileKindAt(TileDirection.Right, assets.tile`
            myTile1
            `)) {
            animation.runImageAnimation(mySprite, [img`
                    . f f f f f f f f f f f f f f .
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    f 7 7 7 7 7 7 7 7 f c f c f 7 f
                    f 7 7 7 7 7 7 7 7 f f 2 f f f f
                    f 7 7 7 7 7 7 7 7 f c f c f 3 f
                    f 7 7 7 7 7 7 7 7 f c c c f 3 f
                    f 7 7 7 7 7 7 7 7 f c c c f 3 f
                    f 7 7 7 7 7 7 7 7 f c f c f 3 f
                    f 7 7 7 7 7 7 7 7 f f 2 f f f f
                    f 7 7 7 7 7 7 7 7 f c f c f 7 f
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    f 7 7 7 7 7 7 7 7 f c c c f 7 f
                    . f f f f f f f f f f f f f f .
                    `], 500, false)
            easing.blockEaseBy(mySprite, 16, 0, 100, easing.Mode.InSine)
        }
        
    }
    
})
function tileinteraction() {
    
    if (intro == 1) {
        story.showPlayerChoices("normal", "hard")
        if (story.checkLastAnswer("normal")) {
            game.showLongText("Hop using arrows,         collect the chests,        bring to exit,   ", DialogLayout.Full)
            game.showLongText("distract guards", DialogLayout.Full)
        } else {
            hardmodeACTIVATED = 1
            info.startCountdown(300)
        }
        
        tiles.setCurrentTilemap(tilemap`
            level1
            `)
        intro += -1
        mySprite = sprites.create(img`
                . f f f f f f f f f f f f f f .
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c c c f 3 f
                f 7 7 7 7 7 7 7 7 f c f c f 3 f
                f 7 7 7 7 7 7 7 7 f f 2 f f f f
                f 7 7 7 7 7 7 7 7 f c f c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                f 7 7 7 7 7 7 7 7 f c c c f 7 f
                . f f f f f f f f f f f f f f .
                `, SpriteKind.Player)
        tiles.placeOnRandomTile(mySprite, assets.tile`
            myTile0
            `)
        scene.cameraFollowSprite(mySprite)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`
        myTile
        `)) {
        captured()
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile2
        `)) {
        captured()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
        myTile4
        `)) {
        captured()
    } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile5
        `)) {
        captured()
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
        myTile2
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 153, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile4
                `)
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
        myTile
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 153, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile4
                `)
    } else if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
        myTile5
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 156, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                myTile4
                `)
    } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 152, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`
                myTile5
                `)
    } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile2
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 154, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`
                myTile5
                `)
    } else if (mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile4
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 151, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`
                myTile5
                `)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`
        myTile2
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 150, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                myTile
                `)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`
        myTile4
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 154, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                myTile
                `)
    } else if (mySprite.tileKindAt(TileDirection.Top, assets.tile`
        myTile5
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 151, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                myTile
                `)
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile4
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 154, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`
                myTile2
                `)
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 155, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`
                myTile2
                `)
    } else if (mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile5
        `)) {
        music.play(music.createSoundEffect(WaveShape.Square, 93, 233, 151, 0, 136, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`
                myTile2
                `)
    }
    
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`
        myTile1
        `)) {
        if (keys >= 1) {
            music.play(music.createSoundEffect(WaveShape.Square, 1624, 1, 130, 84, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            keys += -1
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`
                    myTile8
                    `)
        }
        
    }
    
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`
        myTile1
        `)) {
        if (keys >= 1) {
            music.play(music.createSoundEffect(WaveShape.Square, 1624, 1, 130, 84, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            keys += -1
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`
                    myTile8
                    `)
        }
        
    }
    
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
        myTile1
        `)) {
        if (keys >= 1) {
            music.play(music.createSoundEffect(WaveShape.Square, 1624, 1, 130, 84, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            keys += -1
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`
                    myTile8
                    `)
        }
        
    }
    
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`
        myTile1
        `)) {
        if (keys >= 1) {
            music.play(music.createSoundEffect(WaveShape.Square, 1624, 1, 130, 84, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            keys += -1
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`
                    myTile8
                    `)
        }
        
    }
    
}

controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    if (intro == 0) {
        if (!mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
            myTile3
            `)) {
            if (!mySprite.tileKindAt(TileDirection.Bottom, assets.tile`
                myTile1
                `)) {
                animation.runImageAnimation(mySprite, [img`
                        . f f f f f f f f f f f f f f .
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f
                        f f f f f f f f f f f f f f f f
                        f c c c c f c c c c f c c c c f
                        f c c c f 2 f c c f 2 f c c c f
                        f c c c c f c c c c f c c c c f
                        f f f f f f f f f f f f f f f f
                        f 7 7 7 7 f 3 3 3 3 f 7 7 7 7 f
                        . f f f f f f f f f f f f f f .
                        `], 500, false)
                easing.blockEaseBy(mySprite, 0, 16, 100, easing.Mode.InSine)
            }
            
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile2
        `, function on_overlap_tile6(sprite6: Sprite, location6: tiles.Location) {
    captured()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile5
        `, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    captured()
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function on_menu_pressed() {
    
    if (levelscomplete == 1) {
        uhhhvariablenameorsmthn = 0
    } else if (levelscomplete == 2) {
        uhhhvariablenameorsmthn = 0
    } else if (levelscomplete == 3) {
        uhhhvariablenameorsmthn = 0
    }
    
    story.showPlayerChoices("" + ("" + chests) + " chests", "")
    story.showPlayerChoices("" + ("" + keys) + " keys", "")
    story.showPlayerChoices("" + ("" + (uhhhvariablenameorsmthn + chestsleft)) + " chests left", "")
})
let uhhhvariablenameorsmthn = 0
let keys = 0
let hardmodeACTIVATED = 0
let buttons_pressed = 0
let scoretotal = 0
let captures = 0
let mySprite : Sprite = null
let levelscomplete = 0
let chestsleft = 0
let collected = 0
let chests = 0
let intro = 0
intro = 1
music.setVolume(500)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 60
    export const ARCADE_SCREEN_HEIGHT = 60
}

scene.setBackgroundImage(img`
    cccccccccccccccccccccc11111111111111111111111111111111111111
    cccccccccccccccccccccc11111111111111111111111111111111111111
    cccccccccccccccccccccc11111111111111111111111111111111111111
    cccccccccccccccccccccc11111111111111111111111111111111111111
    cccccccccccccccccccccc11111111111111111111111111111111111111
    ccc777cc7cc77cc77cc77717771111111111111111111111111111111111
    ccc7c7c7c7c727c727c7c117171111111111111111111111111111111111
    ccc7c7c7c7c77cc77cc7c117171111111111111111111111111111111111
    ccc777c7c7c7c7c7c7c77717771111111111111111111111111111111111
    ccc77cc7c7c7c7c7c7c7c117711111111111fffffff11111111111111111
    ccc7c7c7c7c7c7c7c7c7111717111111ffffeeeeeeffff11111111111111
    ccc7c7cc7cc77cc77cc77717171111fffeeeeeeeeeeeeff1111111111111
    cccccccccccccccccccc111111111feeeeeeeeeeeeeeeef1111111111111
    ccc777c777cc7ccc77cc11111111feeeeeeeeffeeeeeeeff111111111111
    ccc7ccc7c7c7c7c7cccc11111111fffffffffffeeeeeeeef111111111111
    ccc777c7c7c7c7c7cccc11111111feeeeeeeefffffffffff111111111111
    ccc7ccc777c7c7c7c7cc11111111feeeeeeeeffeeeeeeeef111111111111
    ccc7ccc77cc7c7c7c7cc11111111feeeeeeeeeeeeeeeeeeef11111111111
    ccc7ccc7c7c7c7c7c7cc11111111ffeeeeeeeeeeeeeeeeeef11111111111
    ccc7ccc7c7cc7ccc77cc111111111feeeeeeeeeeeeeeeeeef11111111111
    cccccccccccccccccccc111111111feeeeeeeeeeeeeeeeef1111111cccc1
    cccccccccccccccccccc111111111fffffffffffeeeeeeef11111ccccccc
    cccccccccccccccccccc111111111ffff111111fffffffff1111cccccccc
    cccccccccccccccccccc11111111ff77f11ffff1111ffff11111cccccccc
    cccccccccccccccccccc11111111f77ffff7777fffff77f11111cccccccc
    cccccccccccccccccccc11111111f7f77777777777ff77ff1111cccccccc
    cccccccccccccccccccc11111111ffffff7777777777ff7f111ccccccccc
    cccccccccccccccccccc1111111ffccccffff77777777fffcccccccccccc
    cccccccccccccccccccc1111111fcccccffccfffff7777fccccccccccccc
    cccccccccccccccccccc1111111fccccf2fcccccccfffffffccccccccccc
    cccccccccccccccccccc1111111fcccccfccccccccccfcccfcccccccccc1
    cccccccccccccccccccc1111111fffffcccccccccccf2fccffccccccccc1
    cccccccccccccccccccc11111111f777ffffffffffccfccccfcccccccc11
    cccccccccccccccccccc11111111f777777777777fffffffffcccccccc11
    cccccccccccccccccccc11111111f77777777777777777777fccccccc111
    cccccccccccccccccccc11111111f7777fffffff777777777fccccccc111
    cccccccccccccccccccc11111111f77777777777f77777777fccccccc111
    cccccccccccccccccccc111111111f7777777777777777777fccccccc111
    cccccccccccccccccccc111111111f777777777777777777ffcccccc1111
    ccccccccccccccccccc111111111fffff77777777777fffffffcccc11111
    ccccccccccccccccccc11111111f77777fffffffffff777777fccc111111
    cccccccccccccccccc1111111111fffffff11111111ffffffffc11111111
    cccccccccccccccccc111111111111111111111111111111111111111111
    fffffffccccffffccc111111111111111111111111111111111111111111
    888888fffff888fccc111111111111111111111111111111111111111111
    88888888f5ff88fccc1111111111111111111111111111111111111111cc
    8888888ff55ffffccc11111111111111111111111111111111111111cccc
    88888888fff8fccccc11111111111111111111111111111111111ccccccc
    88888888888fffccc1111111111111111111111111111111111ccccccccc
    88888888fff77fccc11111111111111111111111111111111ccccccccccc
    88888fff77777fccc11111111111111111111111111111cccccccccccccc
    ffffff777777fffcc11111111111111111111111111ccccccccccccccccc
    777777777ffffffccc5511111111111111111111cccccccccccccccccccc
    77777777ff7ffffcccff5511111111111111cccccccccccccccccccccccc
    777777777777f7fccfffff51111111cccccccccccccccccccccccccccccc
    77777777777777fccfbbbff1cccccccccccccccccccccccccccccccccccc
    77777777777777fcffbbbbfccccccccccccccccccccccccccccccccccccc
    77777777777777fcfbbbbffccccccccccccccccccccccccccccccccccccc
    77777777777777fffbbbbfcccccccccccccccccccccccccccccccccccccc
    77777777777777ffbbbbbfcccccccccccccccccccccccccccccccccccccc
    `)
