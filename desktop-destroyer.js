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

		let currentIndex = 0;

		const imageContainer = document.querySelector('#column-window-desktop-destroyer').children[0].children[1].children[0].children[1];
		imageContainer.classList.add('desktop-destroyer-screenshots-crossfade');
		imageContainer.style.margin = '0';

		function imageAsset(num) {
			return window.location.origin + '/applets/cdgscreens/desktop-destroyer-' + num + '.jpg';
		}

		imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
		imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);

		function swapBanner() {
			const nextIndex = (currentIndex + 1) % IMAGE_COUNT;
			
			imageContainer.style.setProperty('--next-bg', `url('` + imageAsset(currentIndex) + `')`);
			imageContainer.classList.add('desktop-destroyer-screenshots-fade');

			setTimeout(() => {
				imageContainer.style.backgroundImage = `url('` + imageAsset(currentIndex) + `')`;
				imageContainer.style.setProperty('--current-bg', `url('` + imageAsset(currentIndex) + `')`);
				imageContainer.classList.remove('desktop-destroyer-screenshots-fade');

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
            <div class="desktop-destroyer-applet">
				<h2>Casual Desktop Game Screenshots</h2>
				
				<div class="desktop-destroyer-screenshots"></div>
				
				<div class="desktop-destroyer-link"><a href="https://www.casual-desktop-game.com" target="_blank">&gt;&gt; Download the game &lt;&lt;</a></div>
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
            wndHeight: '500px',
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
			
			.desktop-destroyer-link {
				margin-top: 20px;
				font-size: 1.2em;
			}
			
			.desktop-destroyer-link a {
				color: #a3b3ff;
				text-decoration: none;
			}
			
			.desktop-destroyer-link a:hover {
				color: #a3b3ff;
				text-decoration: underline;
			}
        `;
    }
}
