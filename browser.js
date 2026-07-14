/**
 * Browser Applet
 */
window.Browser = class {
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
		document.getElementById('browser-iframe').src = window.location.origin;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('browser-iframe').src = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="browser-applet">
				<div class="browser-bar">
					<div class="browser-buttons">
						<a class="btn" href="javascript:void(0);" onclick="document.getElementById('browser-iframe').src = window.location.origin;"><img src="` + window.location.origin + '/img/icons/home.png' + `" alt="icon"/></a>
						<a class="btn" href="javascript:void(0);" onclick="document.getElementById('browser-iframe').src += '';"><img src="` + window.location.origin + '/img/icons/refresh.png' + `" alt="icon"/></a>
					</div>
					
					<div class="browser-input">
						<input id="browser-input-prompt" type="text" onkeydown="if (event.key === 'Enter') { if ((!this.value.includes('http://')) && (!this.value.includes('https://'))) { this.value = 'https://' + this.value; }; document.getElementById('browser-iframe').src = this.value; }"
					</div>
				</div>
				
				<div class="browser-content">
					<iframe id="browser-iframe" onload="document.getElementById('browser-input-prompt').value = this.src;"></iframe>
				</div>
			</div>
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
            wndWidth: '950px',
            wndHeight: '630px',
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
            name: 'Browser',
            version: '1.0',
            icon: window.location.origin + '/img/icons/browser.png'
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
			#column-window-browser .window-body {
				width: 100%;
				height: 100%;
			}
		
            .browser-applet {
                position: relative;
            }
			
			.browser-bar {
				position: relative;
				top: -5px;
			}
			
			.browser-buttons {
				position: relative;
				display: inline-block;
				width: 12%;
			}
			
			.browser-buttons a.btn {
				min-width: 32px;
				min-height: 32px;
				border-radius: 15px;
				padding-left: 10px;
				padding-right: 10px;
			}
			
			.browser-input {
				position: relative;
				display: inline-block;
				width: 87%;
				top: -8px;
			}
			
			.browser-input input {
				padding: 20px;
				border-radius: 20px;
				font-size: 1.05em;
				width: 95%;
			}
			
			.browser-content {
				position: relative;
				width: 100%;
				height: 546px;
				top: 5px;
				left: -8px;
				background-color: rgb(150, 150, 150);
				box-shadow: inset -1px -1px #fff, inset 1px 1px rgb(10, 10, 10), inset -2px -2px rgb(223, 223, 223), inset 2px 2px grey;
			}
			
			.browser-content iframe {
				width: 100%;
				height: 100%;
				border: 0;
			}
        `;
    }
}
