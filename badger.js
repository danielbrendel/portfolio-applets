/**
 * Badger Applet
 */
window.Badger = class {
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

    onShow()
    {
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-badger');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.style.height = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerWidth - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}
		
        document.getElementById('badger-applet').innerHTML = `
			<video autoplay loop playsinline>
				<source src="` + window.location.origin + '/clips/badger-dance.mp4' + `" type="video/mp4">
			</video>
		`;
    }

    onClose()
    {
        document.getElementById('badger-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="badger-applet"></div>
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
            wndHeight: '360px',
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
            name: 'Badger',
            version: '1.0',
            icon: window.location.origin + '/img/icons/badger.png'
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
			#column-window-badger .window-body {
				position: relative;
				width: 100%;
				height: 94.5%;
				top: -8px;
				left: -8px;
				overflow: hidden;
			}
		
			#badger-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: -8px;
				left: -8px;
				overflow: hidden;
				display: flex;
			    align-items: center;
			    justify-content: center;
				transform: scale(1.3);
			}
			
			#badger-applet video {
				position: absolute;
			    top: 50%;
			    left: 50%;
			    width: 100%;
			    height: 100%;
			    object-fit: cover;
			    transform: translate(-50%, -50%);
			}
        `;
    }
}
