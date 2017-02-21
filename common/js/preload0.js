var Preload = function(game){}
 
Preload.prototype = {
	preload: function(){ 
        //visuals
        var loadingBg = this.add.sprite(game.world.width/2, 0, "loadingBg");
        loadingBg.anchor.x = 0.5;
        //var loadingBarBg = this.add.sprite(game.world.width/2, game.world.height/2, "loadingBarBg");
        //loadingBarBg.anchor.setTo(0.5);
        var loadingBar = this.add.sprite(game.world.width/2, game.world.height/2, "loadingBar");
        loadingBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(loadingBar);
        
        //start preloading
        console.log('Loading images...');
        this.game.load.image("bg1", "./assets/images/bg1.jpg");
        this.game.load.image("bg2", "./assets/images/bg2.jpg");
        this.game.load.image("bg3", "./assets/images/bg3.jpg");
        this.game.load.image("turn", "./assets/images/turn.png");
        this.game.load.image("interface", "./assets/images/interface.png");
        this.game.load.image("interface2", "./assets/images/interface2.png");
        this.game.load.image("logo", "./assets/images/logo.png");
        this.game.load.image("popup", "./assets/images/popup.png");
        this.game.load.image("worm", "./assets/images/futureWorm.png");
        console.log('Loading spritesheets...');
        this.game.load.spritesheet("home", "./assets/images/home.png", 239, 217);
        this.game.load.spritesheet("pause", "./assets/images/pause.png", 239, 217);
        this.game.load.spritesheet("play", "./assets/images/play.png", 239, 217);
        this.game.load.spritesheet("playWide", "./assets/images/playWide.png", 445, 217);
        this.game.load.spritesheet("replay", "./assets/images/replay.png", 239, 217);
        this.game.load.spritesheet("volume", "./assets/images/volume.png", 239, 217);
        this.game.load.spritesheet("logoIntro", "./assets/images/logoIntroSprite.png", 300, 244);
        this.game.load.spritesheet("marcoIntro", "./assets/images/marcoIntroSprite.png", 200, 310.5);
        this.game.load.spritesheet("starIntro", "./assets/images/starIntroSprite.png", 600, 338);
        this.game.load.spritesheet("mouse", "./assets/images/mouse.png", 88, 129);
        this.game.load.spritesheet("screens", "./assets/images/screens.png", 556, 322);
        this.game.load.spritesheet("marco", "./assets/images/marcoSprite.png", 239, 217);
        this.game.load.spritesheet("star", "./assets/images/starSprite.png", 239, 217);
        console.log('Loading sounds...');
        game.load.audio('jump', ['./assets/sounds/jump.mp3', './assets/sounds/jump.ogg']);
        game.load.audio('menu_intro', ['./assets/sounds/menu_intro.mp3', './assets/sounds/menu_intro.ogg']);
        game.load.audio('menu_loop', ['./assets/sounds/menu_loop.mp3', './assets/sounds/menu_loop.ogg']);
        game.load.audio('game_loop', ['./assets/sounds/game_loop.mp3', './assets/sounds/game_loop.ogg']);
        game.load.audio('game_outro', ['./assets/sounds/game_outro.mp3', './assets/sounds/game_outro.ogg']);
        game.load.audio('button', ['./assets/sounds/button.mp3', './assets/sounds/button.ogg']);
        game.load.audio('right', ['./assets/sounds/correct.mp3', './assets/sounds/correct.ogg']);
        game.load.audio('wrong', ['./assets/sounds/error.mp3', './assets/sounds/error.ogg']);
        game.load.audio('switch', ['./assets/sounds/whoosh.mp3', './assets/sounds/whoosh.ogg']);
        game.load.audio('clock', ['./assets/sounds/clock.mp3', './assets/sounds/clock.ogg']);
        console.log('Loading text...');
        game.load.text('strings', './assets/strings/strings.json');
        console.log('Loading done, enjoy!');
    },    
    create: function(){
        this.game.state.start("Menu");
    }
}