/**
 * Webamp Applet
 */
window.Webamp = class {
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
        document.getElementById('webamp-wrapper').innerHTML = `<iframe
					id="webamp-iframe"
					src="https://www.danielbrendel.com/applets/webamp-wrapper.html"
				</iframe>`;
    }

    onClose()
    {
        document.getElementById('webamp-wrapper').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="webamp-wrapper"></div>
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
            wndWidth: '275px',
            wndHeight: '367px',
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
            name: 'Webamp',
            version: '1.0',
            icon: 'https://www.danielbrendel.com/img/icons/webamp.png'
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
			#column-window-webamp {
				background: transparent;
				height: 100%;
			}
			
			#column-window-webamp .window {
                width: 100%;
                height: 100%;
				background: transparent;
				box-shadow: unset;
			}

            #column-window-webamp .window-body {
				width: 100%;
                height: 100%;
			}
		
			#webamp-wrapper {
				position: relative;
				width: 100%;
				height: 100%;
				top: -8px;
				left: -8px;
				overflow: hidden;
			}
		
            #webamp-wrapper iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
