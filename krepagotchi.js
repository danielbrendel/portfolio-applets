/**
 * Krepagotchi Applet
 */
window.Krepagotchi = class {
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
        document.getElementById('krepagotchi-applet').innerHTML = `<iframe 
					id="krepagotchi-iframe"
					src="https://krepagotchi.danielbrendel.com">
				</iframe>`;
    }

    onClose()
    {
        document.getElementById('krepagotchi-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="krepagotchi-applet"></div>
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
            wndWidth: '360px',
            wndHeight: '640px',
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
            name: 'Krepagotchi',
            version: '1.0',
            icon: 'https://krepagotchi.danielbrendel.com/img/logo.png'
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
			#krepagotchi-applet {
				position: relative;
				width: 360px;
				height: 622px;
				top: -8px;
				left: -8px;
				overflow: hidden;
			}
		
            #krepagotchi-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
