/**
 * Quake Applet
 */
window.Quake = class {
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
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-quake');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.style.height = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerWidth - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}
		
		document.getElementById('quake-applet').innerHTML = `<iframe 
			scrolling="no"
			src="https://quake.danielbrendel.com/Quake3.htm?demo">
		</iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('quake-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="quake-applet"></div>
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
            name: 'Quake',
            version: '1.0',
            icon: window.location.origin + '/img/icons/quake.png'
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
			#column-window-quake .window {
				background-color: rgb(0, 0, 0);
			}
		
            #column-window-quake .window-body {
				width: 100%;
				height: 100%;
			}
		
			#quake-applet {
			  position: relative;
			  top: -5px;
			  left: -8px;
			  width: 100%;
			  height: 96%;
			  overflow: hidden;
			}
			
			#quake-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
