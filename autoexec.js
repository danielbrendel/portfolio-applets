/**
 * Autoexec Applet
 */
window.Autoexec = class {
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
        const defaultCode = `//\n// Autoexec content\n// Enter auto-executed code here\n//\n\nfor (let key in navigator) {\n\tif (typeof navigator[key] !== 'function') {\n\t\tconsole.log(key + ': ' + navigator[key]);\n\t}\n}\n`;

        window.saveSetting('autoexec-content', defaultCode, false);
    }

    /**
     * Called when the applet is uninstalled
     * 
     * @return void
     */
    onRemove()
    {
        localStorage.removeItem('autoexec-content');
    }

    /**
     * Called when the applet is loaded
     * This happens everytime the page is loaded/refreshed, or when the applet is installed
     * 
     * @return void
     */
    onLoad()
    {
		window.noteAppletChangedText = false;

        const ec = window.readSetting('autoexec-content', '');
        if (ec.length > 0) {
            eval(ec);
        }
    }

    onShow()
    {
        const content = window.readSetting('autoexec-content', '');
		document.querySelector('#autoexec-applet').children[0].value = content;
		
		window.autoexecAppletSavingInterval = setInterval(function() {
			if (window.noteAppletChangedText) {
				window.noteAppletChangedText = false;
				
				const content = document.querySelector('#autoexec-applet').children[0].value;
				window.saveSetting('autoexec-content', content, false);
			}
		}, 1000);
    }

    onClose()
    {
		const content = document.querySelector('#autoexec-applet').children[0].value;
        window.saveSetting('autoexec-content', content, false);
		
		clearInterval(window.autoexecAppletSavingInterval);
		window.autoexecAppletSavingInterval = null;
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="autoexec-applet">
				<textarea oninput="if (!window.noteAppletChangedText) { window.noteAppletChangedText = true; }"></textarea>
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
            wndWidth: '370px',
            wndHeight: '450px',
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
            name: 'Autoexec',
            version: '1.0',
            icon: window.location.origin + '/img/icons/autoexec.png'
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
			#column-window-autoexec {
				text-align: center;
			}
			
			#column-window-autoexec .window {
				background-color: #3760d8;
			}
			
			#column-window-autoexec .window-body {
				position: relative;
				width: 100%;
				height: 95%;
				top: -8px;
				left: -8px;
			}
		
			#autoexec-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: 2px;
			}
			
			#autoexec-applet textarea {
				position: relative;
				width: 100%;
				height: 100%;
                color: rgb(255, 255, 255);
				background: transparent;
				resize: none;
				font-family: Courier New, Lucida Console, Verdana, Arial;
				font-size: 1.2em;
				padding: 10px;
			}
        `;
    }
}
