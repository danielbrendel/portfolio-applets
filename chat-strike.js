/**
 * Chat Strike Applet
 */
window.ChatStrike = class {
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
        document.getElementById('chat-strike-applet').innerHTML = `
			<iframe src="https://chatstrike.danielbrendel.com/"></iframe>
		`;
		
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-chat-strike');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}
		
    }

    onClose()
    {
        document.getElementById('chat-strike-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="chat-strike-applet"></div>
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
            wndWidth: '500px',
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
            name: 'Chat Strike',
            version: '1.0',
            icon: window.location.origin + '/img/icons/chat-strike.png'
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
			#column-window-chat-strike .window-body {
				position: relative;
				width: 100%;
				height: 97%;
				top: -8px;
				left: -8px;
				overflow: hidden;
			}
		
			#chat-strike-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: -8px;
				overflow: hidden;
			}
			
			#chat-strike-applet iframe {
				width: 100%;
				height: 100%;
			}
        `;
    }
}
