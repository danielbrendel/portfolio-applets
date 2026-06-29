/**
 * Garden Fox Applet
 */
window.GardenFox = class {
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
		document.getElementById('garden-fox-applet').innerHTML = `<iframe 
			id="garden-fox-iframe"
			src="https://game.hortusfox.com">
		</iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('garden-fox-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="garden-fox-applet"></div>
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
            wndWidth: '1024px',
            wndHeight: '768px',
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
            name: 'Garden Fox',
            version: '1.0',
            icon: window.location.origin + '/img/icons/gardenfox.png'
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
			#column-window-garden-fox .window-body {
				width: 100%;
				height: 100%;
			}
		
			#garden-fox-applet {
			  position: relative;
			  top: -6px;
			  left: -8px;
			  width: 100%;
			  height: 97%;
			  overflow: hidden;
			}
			
			#garden-fox-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
