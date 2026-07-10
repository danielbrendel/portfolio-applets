/**
 * Desktop Destroyer Applet
 */
window.DesktopDestroyer = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
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
		const IMAGE_COUNT = 91;
		const DELAY_SWITCH = 5000;

		let currentIndex = window.random(0, IMAGE_COUNT - 1);
		
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-desktop-destroyer');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.style.height = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerWidth - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}

		const imageContainer = document.querySelector('#column-window-desktop-destroyer').children[0].children[1].children[0].children[1];
		imageContainer.classList.add('desktop-destroyer-screenshots-crossfade');
		imageContainer.style.margin = '0';
		imageContainer.style.cursor = 'pointer';

		function imageAsset(num) {
			return window.location.origin + '/applets/cdgscreens/desktop-destroyer-' + num + '.jpg';
		}

		imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
		imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
		
		imageContainer.addEventListener('click', function() {
			window.desktopDestroyerSwapBanner(1);
			window.playAudio('click.wav');
		});

		window.desktopDestroyerSwapBanner = function(timeout = 2000) {
			const nextIndex = window.random(0, IMAGE_COUNT - 1);
			
			imageContainer.style.setProperty('--next-bg', `url('` + imageAsset(currentIndex) + `')`);
			imageContainer.classList.add('desktop-destroyer-screenshots-fade');

			setTimeout(() => {
				imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
				imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
				imageContainer.classList.remove('desktop-destroyer-screenshots-fade');

				currentIndex = nextIndex;
			}, timeout);
		}

		window.desktopDestroyerSwapBanner();
		setInterval(window.desktopDestroyerSwapBanner, DELAY_SWITCH);
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="desktop-destroyer-applet">
				<h2>Casual Desktop Game Screenshots</h2>
				
				<div class="desktop-destroyer-screenshots"></div>
				
				<div class="desktop-destroyer-links">
					<div class="desktop-destroyer-downloads">
						<a class="download-steam" href="https://store.steampowered.com/app/1001860/Casual_Desktop_Game" target="_blank">Steam</a>
						<a class="download-itchio" href="https://danielbrendel.itch.io/casual-desktop-game" target="_blank">itch.io</a>
						<a class="download-indiedb" href="https://www.indiedb.com/games/casual-desktop-game" target="_blank">IndieDb</a>
						<a class="download-gamejolt" href="https://gamejolt.com/games/casual-desktop-game/785059" target="_blank">Gamejolt</a>
					</div>
					
					<div class="desktop-destroyer-homepage">
						<a href="https://www.casual-desktop-game.com" target="_blank">&gt;&gt; Homepage &lt;&lt;</a>
					</div>
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
            wndWidth: '640px',
            wndHeight: '563px',
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
            name: 'Desktop Destroyer',
            version: '1.0',
            icon: window.location.origin + '/img/icons/desktop-destroyer.png'
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
			#column-window-desktop-destroyer .window {
				background-color: rgb(32, 32, 32);
			}
		
            .desktop-destroyer-applet {
				text-align: center;
            }
			
			.desktop-destroyer-applet h2 {
				font-size: 1.5em;
				color: rgb(255, 255, 255);
			}
			
			.desktop-destroyer-screenshots {
				width: 640px;
				height: 360px;
				left: -9px;
			}
			
			@media screen and (max-width: 500px) {
				.desktop-destroyer-screenshots {
					width: 105.2%;
					height: 45.5vw;
					left: -9px;
				}
			}
			
			.desktop-destroyer-screenshots-crossfade {
			  position: relative;
			  background-size: 100% 100%;
			  background-position: center;
			  background-image: var(--current-bg); 
			  overflow: hidden;
			}

			.desktop-destroyer-screenshots-crossfade::after {
			  content: '';
			  position: absolute;
			  top: 0; left: 0; width: 100%; height: 100%;
			  background-size: 100% 100%;
			  background-position: center;
			  background-image: var(--next-bg);
			  opacity: 0;
			  transition: opacity 2s ease-in-out;
			}

			.desktop-destroyer-screenshots-crossfade.desktop-destroyer-screenshots-fade::after {
			  opacity: 1;
			}
			
			.desktop-destroyer-links {
				margin-top: 20px;
			}
			
			.desktop-destroyer-downloads {
				margin-top: 30px;
			}
			
			.desktop-destroyer-downloads a {
				border-radius: 5px;
				font-size: 1.2em;
				padding-top: 5px;
				padding-left: 25px;
				padding-right: 25px;
				padding-bottom: 5px;
				margin-left: 2px;
				margin-right: 2px;
				text-decoration: none;
			}
			
			@media screen and (max-width: 500px) {
				.desktop-destroyer-downloads a {
					padding-left: 15px;
					padding-right: 15px;
				}
			}
			
			.desktop-destroyer-downloads a:hover {
				text-decoration: none;
			}
			
			.desktop-destroyer-downloads a.download-steam {
				color: rgb(255, 255, 255);
				background-color: rgb(105, 163, 123);
			}
			
			.desktop-destroyer-downloads a.download-steam:hover {
				background-color: rgb(143, 190, 154);
			}
			
			.desktop-destroyer-downloads a.download-itchio {
				color: rgb(255, 255, 255);
				background-color: rgb(223, 100, 100);
			}
			
			.desktop-destroyer-downloads a.download-itchio:hover {
				background-color: rgb(237, 132, 132);
			}
			
			.desktop-destroyer-downloads a.download-indiedb {
				color: rgb(255, 255, 255);
				background-color: rgb(111, 132, 200);
			}
			
			.desktop-destroyer-downloads a.download-indiedb:hover {
				background-color: rgb(143, 163, 231);
			}
			
			.desktop-destroyer-downloads a.download-gamejolt {
				color: rgb(255, 255, 255);
				background-color: rgb(192, 143, 85);
			}
			
			.desktop-destroyer-downloads a.download-gamejolt:hover {
				background-color: rgb(220, 169, 111);
			}
			
			.desktop-destroyer-homepage {
				margin-top: 30px;
				font-size: 1.2em;
				text-transform: uppercase;
			}
			
			.desktop-destroyer-homepage a {
				color: #a3b3ff;
				text-decoration: none;
			}
			
			.desktop-destroyer-homepage a:hover {
				color: #a3b3ff;
				text-decoration: underline;
			}
        `;
    }
}
