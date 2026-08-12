/**
 * Frisky Applet
 */
window.Frisky = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
		window.friskySpawnBirds = function() {
			const BIRD_COUNT = 10;

			const taskbar = document.querySelector('#taskbar');

			let birds = [];
			let dir = false;

			for (let i = 0; i < BIRD_COUNT; i++) {
				const startX = (!dir) ? -20 : window.innerWidth + 20;
				const startY = window.random(0, window.innerHeight - 50) + taskbar.clientHeight + 20;

				let bird = new Sprite(window.location.origin + '/applets/frisky/bird' + (window.random(0, 5) + 1) + '.png', 3, 32, 32, '.widgets');
				bird.setPosition(startX, startY);
				bird.setVisibility(false);

				if (!dir) {
					bird.flip();
				}

				const callback = bird.updateFrames.bind(bird);
				setInterval(callback, 200);

				dir = !dir;

				birds.push({
					ent: bird,
					dir: dir,
					x: startX,
					y: startY,
					speed: window.random(0, 50) + 1,
					delay: window.random(0, 5000) + 100,
					timer: null,
					destruct: false
				});
			}

			for (let i = 0; i < birds.length; i++) {
				const item = birds[i];

				setTimeout(function() {
					item.ent.setVisibility(true);

					item.timer = setInterval(function() {
						let x = item.ent.getX();
						let y = item.ent.getY();

						if (!item.dir) {
							x -= 3;

							if (x < -50) {
								item.destruct = true;
							}

							item.ent.setPosition(x, y);
						} else {
							x += 3;
							
							if (x > window.innerWidth + 50) {
								item.destruct = true;
							}

							item.ent.setPosition(x, y);
						}	
					}, item.speed);
				}, item.delay);
			}

			setInterval(function() {
				for (let i = 0; i < birds.length; i++) {
					let item = birds[i];

					if (item.destruct) {
						item.ent.destroy();
						birds.splice(i, 1);

						break;
					}
				}
			}, 1000);
		};

		window.friskyBirdAnim = function() {
			const WAVE_DELAY = 15000;
			setInterval(window.friskySpawnBirds, WAVE_DELAY + window.random(0, 5000));
			window.friskySpawnBirds();
		};

		window.friskyPlantAnim = function() {
			const ROTATION_SPAN = 5;
			const SPAWN_RATE = 300;
			const ELEM_CONTAINER = '#taskbar';

			let spawnData = [];

			let spawnBoxW = 40;
			let spawnBoxH = 65;
			let spawnX = 0;
			let spawnY = window.innerHeight - spawnBoxH;
			let spawnRate = Math.floor(window.innerWidth / spawnBoxW);

			for (let i = 0; i < spawnRate; i++) {
				spawnX = i * spawnBoxW;

				spawnData.push({
					x: spawnX + spawnBoxW / 4,
					y: spawnY,
					pl: 'fixed'
				});
			}

			const assets = [
				{
					file: 'plant1.png',
					w: 34,
					h: 32
				},

				{
					file: 'plant2.png',
					w: 18,
					h: 24
				},

				{
					file: 'plant3.png',
					w: 39,
					h: 35
				},

				{
					file: 'plant4.png',
					w: 32,
					h: 36
				},

				{
					file: 'plant5.png',
					w: 32,
					h: 27
				},

				{
					file: 'plant6.png',
					w: 30,
					h: 30
				}
			];

			for (let i = 0; i < spawnData.length; i++) {
				const startX = spawnData[i].x;
				const startY = spawnData[i].y;
				const placement = spawnData[i].pl;

				const rndpick = window.random(0, assets.length - 1);
				const asset = assets[rndpick];

				const plant = new Sprite(window.location.origin + '/applets/frisky/' + asset.file, 1, asset.w, asset.h, ELEM_CONTAINER);
				plant.setPosition(startX, startY);
				plant.setTransformOrigin('50% 90%');
				plant.setPlacement(placement);
				plant.setZIndex(100);

				let rotValue = -ROTATION_SPAN;
				let rotDir = 1;

				setInterval(function() {
					plant.setRotation(rotValue);

					rotValue += rotDir;
					if ((rotValue > ROTATION_SPAN) || (rotValue < -ROTATION_SPAN)) {
						rotDir *= -1;
					}
				}, 55);
			}
		};
		
		window.friskyLoadAmbientSounds = function() {
			const sounds = ['chirp1.wav', 'chirp2.wav', 'chirp3.wav', 'chirp4.wav', 'chirp5.wav'];

			window.arrAmbientSounds = [];

			for (let i = 0; i < sounds.length; i++) {
				try {
					const audio = new Audio(window.location.origin + '/sounds/' + sounds[i]);

					window.arrAmbientSounds.push(audio);
				} catch (err) {
					console.log(err);
				}
			}
		};
		
		window.friskyAmbientSound = function() {
			function playAmbientSound() {
				let index = window.random(0, window.arrAmbientSounds.length - 1);
				window.arrAmbientSounds[index].play();
			}
			
			setInterval(playAmbientSound, 5000);
			playAmbientSound();
		};
		
		window.friskyToggle = function() {
			window.friskyEnabled = window.readSetting('frisky-enabled', '0');
			if ((window.friskyEnabled) && (window.friskyEnabled == '1')) {
				window.saveSetting('frisky-enabled', '0');
			} else {
				window.saveSetting('frisky-enabled', '1');
			}
			
			location.reload();
		};
    }

    /**
     * Called when the applet is installed
     * 
     * @return void
     */
    onInstall()
    {
    }

    /**
     * Called when the applet is uninstalled
     * 
     * @return void
     */
    onRemove()
    {
    }

    /**
     * Called when the applet is loaded
     * This happens everytime the page is loaded/refreshed, or when the applet is installed
     * 
     * @return void
     */
    onLoad()
    {
		window.friskyEnabled = window.readSetting('frisky-enabled', '0');
		if ((window.friskyEnabled) && (window.friskyEnabled == '1')) {
			const scr = document.createElement('script');
			
			scr.id = 'friskySpriteManager';
			scr.src = window.location.origin + '/applets/sprite.js';
			scr.onload = function() {
				window.friskyBirdAnim();
				window.friskyPlantAnim();
				window.friskyLoadAmbientSounds();
				window.friskyAmbientSound();
			};
			
			document.head.appendChild(scr);
		}
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		const wnd = document.querySelector('#column-window-frisky');
		const xpos = window.readSetting('frisky-applet-position-x', null);
		const ypos = window.readSetting('frisky-applet-position-y', null);
		
		if ((wnd) && (xpos) && (ypos)) {
			wnd.style.position = 'absolute';
			wnd.style.left = xpos;
			wnd.style.top = ypos;
		}
		
		window.friskyAction = document.querySelector('#frisky-button-toggle');
		if ((window.friskyEnabled) && (window.friskyEnabled == '1')) {
			window.friskyAction.innerText = 'Disable';
			window.friskyAction.classList.add('frisky-applet-button-disable');
		} else {
			window.friskyAction.innerText = 'Enable';
			window.friskyAction.classList.add('frisky-applet-button-enable');
		}
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		const wnd = document.querySelector('#column-window-frisky');
		if (wnd) {
			const xpos = window.saveSetting('frisky-applet-position-x', wnd.style.left, false);
			const ypos = window.saveSetting('frisky-applet-position-y', wnd.style.top, false);
		}
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="frisky-applet">
				<div class="frisky-applet-info">
					Turn your desktop into a meadow!
				</div>
				
				<div class="frisky-applet-button">
					<a id="frisky-button-toggle" class="btn" href="javascript:void(0);" onclick="window.friskyToggle();">Toggle</a>
				</div>
			</div>
        `;
    }

    /**
     * Provide applet settings here
     * 
     * @return object
     */
    settings()
    {
        return {
            wndWidth: '320px',
            wndHeight: '140px',
            btnClose: true,
            btnMaximize: false,
            btnMinimize: false
        };
    }

    /**
     * Return basic information on the applet
     * 
     * @return object
     */
    infos()
    {
        return {
            name: 'Frisky',
            version: '1.0',
            icon: window.location.origin + '/img/icons/frisky.png'
        };
    }

    /**
     * Return the CSS styles which are rendered into the page
     * 
     * @returns object
     */
    styles()
    {
        return `
			#column-window-frisky .window-body {
				width: 100%;
				height: 100%;
			}
			
			#column-window-frisky .window {
				background-color: #569354;
				color: white;
			}
		
            .frisky-applet {
                position: relative;
				text-align: center;
            }
			
			.frisky-applet-info {
				margin-top: 20px;
				font-size: 1.4em;
			}
			
			@media screen and (min-width: 951px) {
				.frisky-applet-info {
					font-size: 1.2em;
				}
			}
			
			.frisky-applet-button {
				margin-top: 20px;
			}
			
			.frisky-applet-button a.btn {
				width: 150px !important;
			}
			
			.frisky-applet-button-enable {
				background-color: #c8ffaf !important;
			}
			
			.frisky-applet-button-disable {
				background-color: #8ca47f !important;
			}
        `;
    }
}
