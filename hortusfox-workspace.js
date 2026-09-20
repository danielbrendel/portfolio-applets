/**
 * HortusFox Workspace Applet
 */
window.HortusfoxWorkspace = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
        window.hortusfoxQueryUrlIfNotSet = function() {
            let url = window.readSetting('hortusfox-workspace-url', '');
            if ((!url.length) || (!url.startsWith('https://'))) {
                url = prompt('Please enter your workspace URL', 'https://demo.hortusfox.com');
                window.saveSetting('hortusfox-workspace-url', url);
            }
        };
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
        window.removeSetting('hortusfox-workspace-url');
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
			const appwnd = document.querySelector('#column-window-hortusfox-workspace');
			
			appwnd.style.width = `${window.innerWidth - 10}px`;
			appwnd.style.height = `${window.innerHeight - 50}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 10}px`;
			appwnd.children[0].style.height = `${window.innerHeight - 50}px`;
			
			window.setWidgetCentered(appwnd);
		}

        window.hortusfoxQueryUrlIfNotSet();

		document.getElementById('hortusfox-workspace-applet').innerHTML = `<iframe 
			id="hortusfox-workspace-iframe"
			src="` + window.readSetting('hortusfox-workspace-url') + `">
		</iframe>`;
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		document.getElementById('hortusfox-workspace-applet').innerHTML = '';
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div id="hortusfox-workspace-applet"></div>
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
            name: 'Hortusfox Workspace',
            version: '1.0',
            icon: window.location.origin + '/img/icons/hortusfox-workspace.png'
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
			#column-window-hortusfox-workspace .window-body {
				width: 100%;
				height: 100%;
			}
		
			#hortusfox-workspace-applet {
			  position: relative;
			  top: -8px;
			  left: -8px;
			  width: 100%;
			  height: 97%;
			  overflow: hidden;
			}
			
			#hortusfox-workspace-applet iframe {
                width: 100%;
				height: 100%;
				border: none;
            }
        `;
    }
}
