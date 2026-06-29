/**
 * Blobby Volley Applet
 */
window.BlobbyVolley = class {
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
		document.getElementById('blobby-volley-applet').innerHTML = `<iframe 
			src="https://blobbyvolley.de/data/bv2browser/index.html">
		</iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('blobby-volley-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="blobby-volley-applet"></div>
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
            wndWidth: '803px',
            wndHeight: '627px',
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
            name: 'Blobby Volley',
            version: '1.0',
            icon: window.location.origin + '/img/icons/blobby-volley.png'
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
			#column-window-blobby-volley .window {
				background-color: #75C8FF;
			}
		
            #column-window-blobby-volley .window-body {
				width: 100%;
				height: 100%;
			}
		
			#blobby-volley-applet {
			  position: relative;
			  top: -5px;
			  left: -8px;
			  width: 100%;
			  height: 96%;
			  overflow: hidden;
			}
			
			#blobby-volley-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
