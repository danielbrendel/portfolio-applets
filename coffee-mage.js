/**
 * Coffee Mage Applet
 */
window.CoffeeMage = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
		window.coffeeMageShowSprite = function(elem, sprite, width, height, col, row) {
            const xOffset = -(col * width);
            const yOffset = -(row * height);
			
            elem.style.backgroundImage = `url('${sprite}')`;
            elem.style.backgroundPosition = `${xOffset}px ${yOffset}px`;
        };
		
		window.coffeeMageFireIterator = 0;
		window.coffeeMageSpriteInterval = null;
		
		window.coffeeMageFontElem = document.createElement('link');
		window.coffeeMageFontElem.id = 'coffeeMageFontElem';
		window.coffeeMageFontElem.rel = 'stylesheet';
		window.coffeeMageFontElem.href = 'https://fonts.googleapis.com/css2?family=Almendra:ital,wght@0,400;0,700;1,400;1,700&display=swap';
		document.head.appendChild(window.coffeeMageFontElem);
		
		window.coffeeMagePhotos = [];
		
		for (let i = 1; i <= 20; i++) {
			window.coffeeMagePhotos.push(`coffee${i}.jpg`);
		}
		
		window.coffeeMageSwitchPhoto = function() {
			const target = document.querySelector('.coffee-mage-photos');
			
			const photo = window.coffeeMagePhotos[window.random(0, window.coffeeMagePhotos.length - 1)];
			target.style.backgroundImage = `url('` + window.location.origin + `/applets/coffee/` + photo + `')`;
			
			const text = document.querySelector('.coffee-mage-ancient-text');
			text.classList.add('coffee-mage-glow-text');
			
			setTimeout(function() {
				text.classList.remove('coffee-mage-glow-text');
			}, 1000);
			
			window.playAudio('tada.wav');
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
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-coffee-mage');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
            appwnd.style.height = `${window.innerHeight - 300}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerHeight - 300}px`;
			
			window.setWidgetCentered(appwnd);
		}
		
		const elems = document.querySelectorAll('.animation-coffee-fire');
		
		window.coffeeMageSpriteInterval = setInterval(function() {
			window.coffeeMageShowSprite(elems[0], window.location.origin + '/applets/coffee/fire.png', 64, 64, window.coffeeMageFireIterator, 0);
			window.coffeeMageShowSprite(elems[1], window.location.origin + '/applets/coffee/fire.png', 64, 64, window.coffeeMageFireIterator, 0);
			
			window.coffeeMageFireIterator++;
			if (window.coffeeMageFireIterator >= 5) {
				window.coffeeMageFireIterator = 0;
			}
		}, 250);
		
		window.coffeeMageSwitchPhoto();
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		if (window.coffeeMageSpriteInterval !== null) {
			clearInterval(window.coffeeMageSpriteInterval);
			window.coffeeMageSpriteInterval = null;
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
            <div class="coffee-mage-applet">
				<div class="coffee-mage-header">
					<div class="coffee-mage-header-animations">
						<div class="animation-coffee-fire"></div>
						
						<div><img class="animation-coffee-mage" src="/applets/coffee/mage.png" alt="mage"/></div>
						
						<div class="animation-coffee-fire"></div>
					</div>
				</div>
				
				<div class="coffee-mage-photos" onclick="window.coffeeMageSwitchPhoto();"></div>
				
				<div class="coffee-mage-ancient-text">Take thou this elixir, to fortify thy soul against the trials of this day!</div>
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
            wndWidth: '512px',
            wndHeight: '712px',
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
            name: 'Coffee mage',
            version: '1.0',
            icon: window.location.origin + '/img/icons/coffee-mage.png'
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
            #column-window-coffee-mage {
				text-align: center;
			}
			
			#column-window-coffee-mage .window {
				background-color: #000;
				color: #fff;
			}
			
			#column-window-coffee-mage .window-body {
				position: relative;
				width: 100%;
				height: 95%;
				top: -8px;
				left: -8px;
			}
		
			#coffee-mage-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: 2px;
			}
			
			.coffee-mage-header {
				position: relative;
			}
			
			.coffee-mage-header-animations {
				position: relative;
			}
			
			.coffee-mage-header-animations div {
				display: inline-block;
			}
			
			.animation-coffee-fire {
				position: relative;
				width: 64px;
				height: 64px;
				background-repeat: no-repeat;
				overflow: hidden;
				margin-left: 50px;
				margin-right: 50px;
			}
			
			@media screen and (max-width: 768px) {
				.animation-coffee-fire {
					margin-left: 32px;
					margin-right: 32px;
				}
			}
			
			.animation-coffee-mage {
				position: relative;
				top: 20px;
				width: 90px;
			}
			
			.coffee-mage-photos {
				position: relative;
				width: 100%;
				height: 350px;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				margin-top: 45px;
				cursor: pointer;
			}
			
			@media screen and (max-width: 768px) {
				.coffee-mage-photos {
					height: 230px;
				}
			}
			
			.coffee-mage-ancient-text {
				position: relative;
				font-size: 1.5em;
				text-transform: uppercase;
				font-family: Almendra, sans-serif;
				font-weight: bold;
				color: #ac5c4c;
				margin-top: 53px;
			}
			
			.coffee-mage-glow-text {
				animation: pulseGlow 1.5s ease-in-out infinite;
			}
			
			@keyframes pulseGlow {
				0% {
					text-shadow: 0 0 10px #ac5c4c, 0 0 20px #ac5c4c;
					filter: brightness(135%);
				}
				
				100% {
					text-shadow: 0 0 0px rgba(172, 92, 76, 0);
					filter: brightness(100%);
				}
			}
        `;
    }
}
