/**
 * Doom Applet
 */
window.Doom = class {
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
		const gamecfg = { url: window.location.origin + '/games/DOOM.jsdos', autoStart: true, theme: 'night' };
		
		const head = document.querySelector('head');
		
		if (!document.getElementById('jsdos-stylesheet')) {
			let css = document.createElement('link');
			css.id = 'jsdos-stylesheet';
			css.rel = 'stylesheet';
			css.href = 'https://v8.js-dos.com/latest/js-dos.css';
			
			head.appendChild(css);
		}
		
		if (!document.getElementById('jsdos-script')) {
			let js = document.createElement('script');
			js.id = 'jsdos-script';
			js.src = 'https://v8.js-dos.com/latest/js-dos.js';
			js.onload = function() {
				window.doom = Dos(document.querySelector('#doom-applet'), gamecfg);
			};
			head.appendChild(js);
		} else {
			window.doom = Dos(document.querySelector('#doom-applet'), gamecfg);
		}
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		window.doom.stop();
		
		let applet = document.querySelector('#doom-applet');
		if (applet) {
			applet.innerHTML = '';
		}
		
		let css = document.getElementById('jsdos-stylesheet');
		if (css) {
			document.querySelector('head').removeChild(css);
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
            <div id="doom-applet"></div>
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
            name: 'Doom',
            version: '8',
            icon: window.location.origin + '/img/icons/doom.png'
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
			#column-window-doom .window-body {
				width: 100%;
				height: 100%;
			}
		
			#doom-applet {
			  position: relative;
			  top: -8px;
			  left: -8px;
			  width: 100%;
			  height: 97%;
			  overflow: hidden;
			}
        `;
    }
}
