window.onload = function() {
    
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
    var gameRatio = innerWidth/innerHeight;
    var game = new Phaser.Game(768, 1165, Phaser.CANVAS, 'container');
    
    var bg;
    var start_btn;
    var count = 0;
    
    var play = function(game) {};
    play.prototype = {
        
        preload: function(){
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = this.scale.pageAlignVertically = true;
            this.scale.setScreenSize();
            
            game.scale.forceOrientation(false,true);
            game.scale.enterIncorrectOrientation.add(handleIncorrect);
            game.scale.leaveIncorrectOrientation.add(handleCorrect);
            
            game.scale.refresh();
            
//            game.input.onDown.add(gofull, this);
            
            game.load.image("background", "common/img/bg.jpg");
            game.load.image("button", "common/img/main-button.png");
        },
        create: function(){
            bg = game.add.sprite(0,0,"background");
            bg.width = game.world.width;
//            bg.height = bg.height;
            start_btn = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this);
            start_btn.events.onInputOver.add(rollOver, this);
            start_btn.anchor.set(0.5);
            start_btn.scale.setTo(0.5,0.5);
            
        },
        update: function(){
            //console.log("ready!");
        }
    }
    
    game.state.add("Play",play);
    game.state.start("Play");
    
//    function gofull() {
//        if (game.scale.isFullScreen) {
//            game.scale.stopFullScreen();
//        } else {
//            game.scale.startFullScreen(false);
//            game.input.onDown.remove(gofull, this);
//        }
//    }
    
    function handleIncorrect(){
        if(!game.device.desktop){
//            console.log("handleIncorrect");
            document.getElementById("turn").style.display = "block";
        }
    }
    function handleCorrect(){
        if(!game.device.desktop){
//            console.log("handleCorrect");
            document.getElementById("turn").style.display = "none";
        }
    }
    
    function actionOnClick () {
        //  Manually changing the frames of the button, i.e, how it will look when you play with it
        count++;
        console.log(count+"x geklikt!");
    }
    function rollOver () {
        console.log("rollOver!");
    }
    
}