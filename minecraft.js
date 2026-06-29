/**
 * Minecraft Applet
 */
window.Minecraft = class {
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
		document.getElementById('minecraft-applet').innerHTML = `<iframe 
			id="minecraft-iframe"
			src="https://classic.minecraft.net">
		</iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('minecraft-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="minecraft-applet"></div>
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
            wndWidth: '1280px',
            wndHeight: '720px',
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
            name: 'Minecraft',
            version: '0.0.23a_01',
            icon: window.location.origin + '/img/icons/minecraft.png'
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
			#column-window-minecraft .window-body {
				width: 100%;
				height: 100%;
			}
		
			#minecraft-applet {
			  position: relative;
			  top: -6px;
			  left: -8px;
			  width: 100%;
			  height: 97%;
			  overflow: hidden;
			}
			
			#minecraft-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
