/**
 * IRC Chat Applet
 */
window.IrcChat = class {
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
		document.getElementById('irc-chat-applet').innerHTML = `<iframe src="https://kiwiirc.com/nextclient/?settings=433b0c9001339ed84d6302da530ffc16"></iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('irc-chat-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="irc-chat-applet"></div>
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
            wndWidth: '930px',
            wndHeight: '600px',
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
            name: 'Irc Chat',
            version: '1.0',
            icon: window.location.origin + '/img/icons/irc-chat.png'
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
            #column-window-irc-chat .window-body {
				width: 100%;
				height: 100%;
			}
		
			#irc-chat-applet {
			  position: relative;
			  top: -8px;
			  left: -8px;
			  width: 100%;
			  height: 96%;
			  overflow: hidden;
			}
			
			#irc-chat-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
