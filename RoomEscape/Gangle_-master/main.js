var press = "...Press Spacebar..."
var Main = {
    preload : function(){
        game.load.image("textPanel", "./assets/TEXTPANEL.png");
        game.load.audio("bgm", "./assets/Ryugihak.mp3");
        //
        game.load.image("Table", "./assets/DESK.png");
        game.load.image("Mouse", "./assets/Mouse.png");
        game.load.image("KeyBoard", "./assets/KEYBOARD.png");
        game.load.image("PC", "./assets/PC.png");
        game.load.image("UI", "./assets/Item.png");
        game.load.image("Monitor", "./assets/Monitor.png");
        game.load.image("USB", "./assets/USB.png");
        game.load.image("Mover", "./assets/Mover.png");
    },
    create : function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        this.start();
        let text = game.add.text(0 , 0, press);
    },
    start : function(){
        game.state.start("Play");
    }

}
game.state.add("Main", Main);
game.state.start("Main");