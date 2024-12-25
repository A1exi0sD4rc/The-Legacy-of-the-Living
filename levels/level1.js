let level1;


/**
 * Creates the first level of the game, setting up enemies, clouds, background objects, and collectables.
 *
 * @function
 * @returns {void} This function does not return any value. It initializes and sets up the level objects directly.
 */
function createLevel1() {
    level1 = new Level(
        [
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new Enemies(),
            new EndBoss()
        ],
        [
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', -850, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', -1000, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', -750, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', -950, 10, 60, 15),

            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', -250, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', -400, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', -150, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', -550, 10, 60, 15),

            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', 250, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', 400, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', 150, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', 550, 10, 60, 15),
            
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', 650, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', 900, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', 850, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', 1050, 10, 60, 15),
            
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', 1400, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', 1150, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', 1250, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', 1350, 10, 60, 15),
            
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_2.png', 1730, 0, 200, 40),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_3.png', 1700, 0, 120, 30),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_4.png', 2000, 10, 90, 20),
            new Cloud('./assets/pixel_art/clouds-pixel-art-asset-pack/PNG/Clouds_black/Shape8/clouds_shape8_5.png', 2100, 10, 60, 15),
        ],
        [
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', -719 * 3, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', -719 * 2, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', -719, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 0, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719 * 2, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719 * 3, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719 * 4, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719 * 5, 0),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/sky.png', 719 * 6, 0),

            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', -719 * 3, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', -719 * 2, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', -719, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 0, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719 * 2, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719 * 3, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719 * 4, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719 * 5, 80, true, 0.1),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins_bg.png', 719 * 6, 80, true, 0.1),

            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', -719 * 3, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', -719 * 2, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', -719, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 0, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719 * 2, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719 * 3, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719 * 4, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719 * 5, 100, true, 0.2),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/hills&trees.png', 719 * 6, 100, true, 0.2),

            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins2.png', 719, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins2.png', 719 * 2, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins2.png', 719 * 4, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins2.png', 719 * 5, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins2.png', 719 * 6, 100),

            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/statue.png', -719, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/statue.png', 719 * 3, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/statue.png', 719 * 5, 100),

            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins.png', 719 * 2, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins.png', 719 * 3, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins.png', 719 * 4, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins.png', 719 * 5, 100),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground1/Bright/ruins.png', 719 * 6, 100),
            
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', -719 * 3, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', -719 * 2, 60),           
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', -719, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 0, 60),            
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719, 60),   
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719 * 2, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719 * 3, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719 * 4, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719 * 5, 60),
            new BackgroundObject('./assets/pixel_art/pixel-art-fantasy-2d-battlegrounds/PNG/Battleground3/Bright/grass&road.png', 719 * 6, 60),
        ],
        [
        ],
        [
            new CollectableArrow(-800),
            new CollectableArrow(-600),
            new CollectableArrow(-400),
            new CollectableArrow(850),
            new CollectableArrow(1000),
            new CollectableArrow(1150),
            new CollectableArrow(1300),
            new CollectableArrow(1525),
            new CollectableArrow(1675),
            new CollectableArrow(1825),
            new CollectableArrow(2500),
            new CollectableArrow(2650),
        ],
        [
            new CollectableCoin(-700, 200),
            new CollectableCoin(-600, 200),
            new CollectableCoin(-500, 200),
            new CollectableCoin(500, 360),
            new CollectableCoin(550, 280),
            new CollectableCoin(600, 360),
            new CollectableCoin(650, 280),
            new CollectableCoin(700, 360),
            new CollectableCoin(900, 280),
            new CollectableCoin(1000, 280),
            new CollectableCoin(1100, 280),
            new CollectableCoin(1200, 280),
            new CollectableCoin(1500, 300),
            new CollectableCoin(1550, 270),
            new CollectableCoin(1600, 240),
            new CollectableCoin(1650, 210),
            new CollectableCoin(1700, 210),
            new CollectableCoin(1750, 210),
            new CollectableCoin(1800, 240),
            new CollectableCoin(1850, 270),
            new CollectableCoin(1900, 300),
            new CollectableCoin(2100, 320),
            new CollectableCoin(2140, 360),
            new CollectableCoin(2175, 360),
            new CollectableCoin(2210, 360),
            new CollectableCoin(2250, 320),
            new CollectableCoin(2250, 280),
            new CollectableCoin(2200, 280),
            new CollectableCoin(2100, 280),
            new CollectableCoin(2100, 240),
            new CollectableCoin(2140, 200),
            new CollectableCoin(2175, 200),
            new CollectableCoin(2210, 200),
            new CollectableCoin(2350, 360),
            new CollectableCoin(2400, 360),
            new CollectableCoin(2450, 360),
            new CollectableCoin(2350, 320),
            new CollectableCoin(2350, 280),
            new CollectableCoin(2350, 240),
            new CollectableCoin(2350, 200),
        ]
    );
}