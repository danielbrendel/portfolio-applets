/**
 * Sample Applet
 */
window.SampleApplet = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
        console.log('constructor');
    }

    /**
     * Called when the applet is installed
     * 
     * @return void
     */
    onInstall()
    {
        console.log('onInstall');
    }

    /**
     * Called when the applet is uninstalled
     * 
     * @return void
     */
    onRemove()
    {
        console.log('onRemove');
    }

    /**
     * Called when the applet is loaded
     * This happens everytime the page is loaded/refreshed, or when the applet is installed
     * 
     * @return void
     */
    onLoad()
    {
        console.log('onLoad');
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
        console.log('onShow');
		
		const wnd = document.querySelector('#column-window-sample-applet');
		const xpos = window.readSetting('sample-applet-position-x', null);
		const ypos = window.readSetting('sample-applet-position-y', null);
		
		if ((wnd) && (xpos) && (ypos)) {
			wnd.style.position = 'absolute';
			wnd.style.left = xpos;
			wnd.style.top = ypos;
		}
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
        console.log('onClose');
		
		const wnd = document.querySelector('#column-window-sample-applet');
		if (wnd) {
			const xpos = window.saveSetting('sample-applet-position-x', wnd.style.left, false);
			const ypos = window.saveSetting('sample-applet-position-y', wnd.style.top, false);
		}
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="sample-applet">
				<div class="sample-applet-info">
					Hey there! This is a sample applet.
				</div>
				
				<div class="sample-applet-button">
					<a class="btn" href="https://www.danielbrendel.com/applets/sample-applet.js" target="_blank">View source</a>
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
            wndWidth: '320px',
            wndHeight: '140px',
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
            name: 'Sample Applet',
            version: '1.0',
            icon: window.location.origin + '/img/icons/applet.png'
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
			#column-window-sample-applet .window-body {
				width: 100%;
				height: 100%;
			}
		
            .sample-applet {
                position: relative;
				text-align: center;
            }
			
			.sample-applet-info {
				margin-top: 20px;
				font-size: 1.4em;
			}
			
			@media screen and (min-width: 951px) {
				.sample-applet-info {
					font-size: 1.2em;
				}
			}
			
			.sample-applet-button {
				margin-top: 20px;
			}
			
			.sample-applet-button a.btn {
				width: 150px !important;
			}
        `;
    }
}
