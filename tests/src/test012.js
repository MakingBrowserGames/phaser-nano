var game = new PhaserNano.Game(800, 600, 'canvas', '', { preload: preload, create: create, update: update });

function preload () {

    game.load.image('pic', 'assets/Equality_by_Ragnarok.png');
    game.load.image('atari', 'assets/atari130xe.png');

}

function create() {

    var pic = game.add.sprite(0, 0, 'pic');

    pic.width = 800;
    pic.height = 600;

    //  Per vertex color tints:
    //  (Order is Top Left, Top Right, Bottom Right, Bottom Left)
    pic.tint = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff];

    var atari1 = game.add.sprite(400, 50, 'atari');
    atari1.tint = [0xff0000, 0xffffff, 0xffffff, 0xffffff];

    var atari2 = game.add.sprite(400, 200, 'atari');
    atari2.tint = [0xff0000, 0xffff00, 0xffffff, 0xffffff];

    var atari3 = game.add.sprite(400, 350, 'atari');
    atari3.tint = [0xffffff, 0xffffff, 0x77dd77, 0x99ee99];

}

function update() {

}
