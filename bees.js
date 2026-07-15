/**
 * Bee Applet
 */
window.Bees = class {
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
		const IMAGE_COUNT = 12;
		const DELAY_SWITCH = 5000;

		let currentIndex = 0;
		
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-bees');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.style.height = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerWidth - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}

		const imageContainer = document.querySelector('#column-window-bees').children[0].children[1];
		imageContainer.classList.add('bee-applet-crossfade');
		imageContainer.style.margin = '0';

		function imageAsset(num) {
			return window.location.origin + '/applets/bees/bee' + num + '.jpg';
		}

		imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
		imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
		
		imageContainer.addEventListener('click', function() {
			window.beesSwapBanner(1);
			window.playAudio('click.wav');
		});

		window.beesSwapBanner = function(timeout = 2000) {
			const nextIndex = (currentIndex + 1) % IMAGE_COUNT;
			
			imageContainer.style.setProperty('--next-bg', `url('` + imageAsset(currentIndex) + `')`);
			imageContainer.classList.add('bee-applet-fade');

			setTimeout(() => {
				imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
				imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
				imageContainer.classList.remove('bee-applet-fade');

				currentIndex = nextIndex;
			}, timeout);
		};

		window.beesSwapBanner();
		setInterval(window.beesSwapBanner, DELAY_SWITCH);
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
            <div class="bee-applet"></div>
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
            wndWidth: '800px',
            wndHeight: '451px',
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
            name: 'Bees',
            version: '1.0',
            icon: window.location.origin + '/img/icons/bee.png'
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
            .bee-applet {
            }
			
			.bee-applet-crossfade {
			  position: relative;
			  width: 100%;
			  height: 96%;
			  background-size: 100% 100%;
			  background-position: center;
			  background-repeat: no-repeat;
			  background-image: var(--current-bg); 
			  overflow: hidden;
			}

			.bee-applet-crossfade::after {
			  content: '';
			  position: absolute;
			  top: 0; left: 0; width: 100%; height: 100%;
			  background-size: 100% 100%;
			  background-position: center;
			  background-repeat: no-repeat;
			  background-image: var(--next-bg);
			  opacity: 0;
			  transition: opacity 2s ease-in-out;
			}
			
			@media screen and (max-width: 500px) {
				.bee-applet-crossfade {
					height: 94.8%;
					background-size: cover;
				}
				
				.bee-applet-crossfade::after {
					background-size: cover;
				}
			}

			.bee-applet-crossfade.bee-applet-fade::after {
			  opacity: 1;
			}
        `;
    }
}
