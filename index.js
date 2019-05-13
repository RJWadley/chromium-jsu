var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{    this.load.image('hero', 'data/png/hero.png');
}

function create ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'hero');
}
function update ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'hero');
}
