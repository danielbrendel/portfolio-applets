/**
 * Notes Applet
 */
window.Notes = class {
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
        localStorage.removeItem('notes-applet-text');
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
    }

    onShow()
    {
        const content = window.readSetting('notes-applet-text', '');
		document.querySelector('#notes-applet').children[0].value = content;
		
		window.notesAppletSavingInterval = setInterval(function() {
			if (window.noteAppletChangedText) {
				window.noteAppletChangedText = false;
				
				const content = document.querySelector('#notes-applet').children[0].value;
				window.saveSetting('notes-applet-text', content, false);
			}
		}, 1000);
    }

    onClose()
    {
		const content = document.querySelector('#notes-applet').children[0].value;
        window.saveSetting('notes-applet-text', content, false);
		
		clearInterval(window.notesAppletSavingInterval);
		window.notesAppletSavingInterval = null;
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
			<div id="notes-applet">
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
            name: 'Notes',
            version: '1.0',
            icon: window.location.origin + '/img/icons/notes.png'
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
			#column-window-notes {
				text-align: center;
			}
			
			#column-window-notes .window {
				background-color: #fff5bc;
			}
			
			#column-window-notes .window-body {
				position: relative;
				width: 100%;
				height: 95%;
				top: -8px;
				left: -8px;
			}
		
			#notes-applet {
				position: relative;
				width: 100%;
				height: 100%;
				top: 2px;
			}
			
			#notes-applet textarea {
				position: relative;
				width: 100%;
				height: 100%;
				background: transparent;
				resize: none;
				font-family: Comic Sans MS, Verdana, Arial;
				font-size: 1.2em;
				padding: 10px;
			}
        `;
    }
}
