/**
 * Hampster Applet
 */
window.Hampster = class {
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
        document.getElementById('hampster-applet').innerHTML = `
			<video autoplay loop playsinline>
				<source src="` + window.location.origin + '/clips/hampster-dance.mp4' + `" type="video/mp4">
			</video>
		`;
    }

    onClose()
    {
        document.getElementById('hampster-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="hampster-applet"></div>
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
            name: 'Hampster',
            version: '1.0',
            icon: window.location.origin + '/img/icons/hampster.png'
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
			#column-window-hampster .window-body {
				width: 100%;
				height: 97%;
			}
		
			#hampster-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: -8px;
				left: -8px;
				overflow: hidden;
				display: flex;
			    align-items: center;
			    justify-content: center;
			}
			
			#hampster-applet video {
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
