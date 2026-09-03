/**
 * Bubbles Applet
 */
window.Bubbles = class {
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
        
    }

    onClose()
    {
        
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
		const MAX_BUBBLES = 192;
		
		let bubbles = '';
		
		for (let i = 0; i < MAX_BUBBLES; i++) {
			bubbles += `
				<div class="bubble-item">
					<a class="btn" href="javascript:void(0);" onmouseover="this.click();" onclick="if ((typeof this.fired !== 'undefined') && (this.fired == true)) { return false; } this.fired = true; this.classList.add('is-popped'); window.playAudio('pop' + window.random(1, 10) + '.ogg');">&nbsp;</a>
				</div>
			`;
		}
		
        return `
			<div id="bubbles-applet">
				<div id="bubble-container">
					` + bubbles + `
				</div>
				
				<div class="bubble-action">
					<a class="btn" href="javascript:void(0);" onclick="let items = document.querySelectorAll('.bubble-item'); for (let i = 0; i < items.length; i++) { const item = items[i].children[0]; item.fired = false; item.classList.remove('is-popped'); } window.playAudio('reset.wav');">Reset</a>
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
            wndWidth: '370px',
            wndHeight: '540px',
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
            name: 'Bubbles',
            version: '1.0',
            icon: window.location.origin + '/img/icons/bubbles.png'
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
			#column-window-bubbles {
				text-align: center;
			}
			
			#column-window-bubbles .window {
				background-color: #8d67d0;
			}
		
			#bubbles-applet {
				position: relative;
				width: 100%;
				height: 100%;
			}
			
			.bubble-container {
				position: relative;
				width: 100%;
				height: 100%;
			}
			
			.bubble-item {
				position: relative;
				display: inline-block;
				margin-bottom: 4px;
			}
			
			.bubble-item a.btn {
				min-width: 25px;
				min-height: 25px;
				padding-top: unset;
				padding-bottom: unset;
				background-color: #cbadff;
			}
			
			.bubble-item a.btn.is-popped {
				pointerEvents: none;
				cursor: default;
				background-color: #ba99e7;
				box-shadow: inset -1px -1px #fff, inset 1px 1px rgb(10, 10, 10), inset -2px -2px rgb(223, 223, 223), inset 2px 2px grey;
				text-shadow: 1px 1px #222;
			}
			
			.bubble-action {
				position: relative;
				margin-top: 5px;
			}
			
			.bubble-action a.btn {
				position: relative;
				width: 100%;
				text-align: center;
				background-color: #c3b8f4;
			}
        `;
    }
}
