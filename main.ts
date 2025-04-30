function _1_player_call () {
    if (controller.A.isPressed() && mouse.overlapsWith(_1_player)) {
        sprites.destroy(_1_player)
        sprites.destroy(_2_player)
        sprites.destroy(_3_player)
        sprites.destroy(_4_player)
        sprites.destroy(mouse)
        mySprite = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level7`)
        controller.moveSprite(mySprite)
        _1_player2()
    }
}
function _4_player2 () {
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, my_sprite_2)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, my_sprite_3)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, my_sprite_4)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
}
function _3_player_call () {
    if (controller.A.isPressed() && mouse.overlapsWith(_3_player)) {
        sprites.destroy(_1_player)
        sprites.destroy(_2_player)
        sprites.destroy(_3_player)
        sprites.destroy(_4_player)
        sprites.destroy(mouse)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.Player))
        mySprite = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player)
        my_sprite_2 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player)
        my_sprite_3 = sprites.create(img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.Player)
        screen2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        screen2.setPosition(240, 300)
        tiles.setCurrentTilemap(tilemap`level1`)
        controller.moveSprite(mySprite)
        controller.player2.moveSprite(my_sprite_2)
        controller.player3.moveSprite(my_sprite_3)
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
        _3_player2()
    }
}
function _1_player2 () {
    scene.cameraFollowSprite(mySprite)
}
function _2_player_call () {
    if (controller.A.isPressed() && mouse.overlapsWith(_2_player)) {
        sprites.destroy(_1_player)
        sprites.destroy(_2_player)
        sprites.destroy(_3_player)
        sprites.destroy(_4_player)
        sprites.destroy(mouse)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player))
        mySprite = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player)
        my_sprite_2 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level5`)
        controller.moveSprite(mySprite)
        controller.player2.moveSprite(my_sprite_2)
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
        _2_player2()
    }
}
function _2_player2 () {
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, my_sprite_2)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
}
function _4_player_call () {
    if (controller.A.isPressed() && mouse.overlapsWith(_4_player)) {
        sprites.destroy(_1_player)
        sprites.destroy(_2_player)
        sprites.destroy(_3_player)
        sprites.destroy(_4_player)
        sprites.destroy(mouse)
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Player))
        mySprite = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 . . . . . . . . . . . . . . 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.Player)
        my_sprite_2 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 . . . . . . . . . . . . . . 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, SpriteKind.Player)
        my_sprite_3 = sprites.create(img`
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 . . . . . . . . . . . . . . 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            `, SpriteKind.Player)
        my_sprite_4 = sprites.create(img`
            a a a a a a a a a a a a a a a a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a . . . . . . . . . . . . . . a 
            a a a a a a a a a a a a a a a a 
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level1`)
        controller.moveSprite(mySprite)
        controller.player2.moveSprite(my_sprite_2)
        controller.player3.moveSprite(my_sprite_3)
        controller.player4.moveSprite(my_sprite_4)
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
        mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
        _4_player2()
    }
}
function _3_player2 () {
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, my_sprite_2)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, my_sprite_3)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, screen2)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
}
let screen2: Sprite = null
let my_sprite_4: Sprite = null
let my_sprite_3: Sprite = null
let my_sprite_2: Sprite = null
let mySprite: Sprite = null
let mouse: Sprite = null
let _4_player: Sprite = null
let _3_player: Sprite = null
let _2_player: Sprite = null
let _1_player: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
_1_player = sprites.create(assets.image`2 player0`, SpriteKind.Player)
_2_player = sprites.create(assets.image`2 player1`, SpriteKind.Player)
_3_player = sprites.create(assets.image`3 player`, SpriteKind.Player)
_4_player = sprites.create(assets.image`2 player2`, SpriteKind.Player)
_1_player.setPosition(49, 35)
_2_player.setPosition(111, 35)
_3_player.setPosition(49, 86)
_4_player.setPosition(111, 86)
mouse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f . . . . . . . . . . . 
    . . . f 3 f f . . . . . . . . . 
    . . . f 3 3 3 f f . . . . . . . 
    . . . f 3 3 3 3 3 f . . . . . . 
    . . . . f 3 3 3 3 3 f . . . . . 
    . . . . f 3 3 3 3 3 3 f . . . . 
    . . . . f 3 3 3 3 3 3 f . . . . 
    . . . . . f 3 3 3 3 f . . . . . 
    . . . . . f 3 3 3 f 3 f . . . . 
    . . . . . . f 3 3 f 3 3 f . . . 
    . . . . . . . f f . f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mouse, 75, 75)
game.onUpdate(function () {
    _1_player_call()
    _2_player_call()
    _3_player_call()
    _4_player_call()
})
