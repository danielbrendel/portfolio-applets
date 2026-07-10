/**
 * Dark Nature Applet
 */
window.DarkNature = class {
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
		const IMAGE_COUNT = 10;
		const DELAY_SWITCH = 5000;

		let currentIndex = 0;

		const imageContainer = document.querySelector('#column-window-dark-nature').children[0].children[1];
		imageContainer.classList.add('dark-nature-applet-crossfade');
		imageContainer.style.margin = '0';

		function imageAsset(num) {
			return window.location.origin + '/applets/naturepics/dark-nature-' + num + '.jpg';
		}

		imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
		imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);

		function swapBanner() {
			const nextIndex = (currentIndex + 1) % IMAGE_COUNT;
			
			imageContainer.style.setProperty('--next-bg', `url('` + imageAsset(currentIndex) + `')`);
			imageContainer.classList.add('dark-nature-applet-fade');

			setTimeout(() => {
				imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
				imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
				imageContainer.classList.remove('dark-nature-applet-fade');

				currentIndex = nextIndex;
			}, 2000);
		}

		swapBanner();
		setInterval(swapBanner, DELAY_SWITCH);
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
            <div class="dark-nature-applet"></div>
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
            wndHeight: '512px',
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
            name: 'Dark Nature',
            version: '1.0',
            icon: window.location.origin + '/img/icons/dark-nature.png'
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
            .dark-nature-applet {
            }
			
			.dark-nature-applet-crossfade {
			  position: relative;
			  width: 100%;
			  height: 96%;
			  background-size: 100% 100%;
			  background-position: center;
			  background-image: var(--current-bg); 
			  overflow: hidden;
			}

			.dark-nature-applet-crossfade::after {
			  content: '';
			  position: absolute;
			  top: 0; left: 0; width: 100%; height: 100%;
			  background-size: 100% 100%;
			  background-position: center;
			  background-image: var(--next-bg);
			  opacity: 0;
			  transition: opacity 2s ease-in-out;
			}

			.dark-nature-applet-crossfade.dark-nature-applet-fade::after {
			  opacity: 1;
			}
        `;
    }
}
