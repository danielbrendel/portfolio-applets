/**
 * Fireworks Applet
 */
window.Fireworks = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
        window.fireworksObject = null;
    }

    /**
     * Called when the applet is installed
     * 
     * @return void
     */
    onInstall()
    {
        window.saveSetting('fireworks-show-enable', '0', false);
        window.saveSetting('fireworks-sound-enable', '0', false);
    }

    /**
     * Called when the applet is uninstalled
     * 
     * @return void
     */
    onRemove()
    {
        localStorage.removeItem('fireworks-position-x');
        localStorage.removeItem('fireworks-position-y');
        localStorage.removeItem('fireworks-show-enable');
        localStorage.removeItem('fireworks-sound-enable');

        window.fireworksObject.stop();

        const container = document.getElementById('fireworks-container');
        if (container) {
            container.children[0].remove();
            document.body.removeChild(container);
        }

        const js = document.getElementById('fireworks-script');
        if (js) {
            document.head.removeChild(js);
        }
    }

    /**
     * Called when the applet is loaded
     * This happens everytime the page is loaded/refreshed, or when the applet is installed
     * 
     * @return void
     */
    onLoad()
    {
        window.fireworksInit = function(container) {
            window.fireworksObject = new Fireworks.default(container);
            window.fireworksUpdateSettings();
        };

        window.fireworksUpdateSettings = function() {
            const fireworksShowEnable = (parseInt(window.readSetting('fireworks-show-enable'))) ? true : false;
            const fireworksSoundEnable = (parseInt(window.readSetting('fireworks-sound-enable'))) ? true : false;

            const options = {
                sound: {
                    enabled: fireworksSoundEnable,
                    volume: {
                        min: 75,
                        max: 100
                    },
                    files: [
                        window.location.origin + '/sounds/fireworks1.wav',
                        window.location.origin + '/sounds/fireworks2.wav',
                        window.location.origin + '/sounds/fireworks3.wav'
                    ]
                }
            };

            window.fireworksObject.updateOptions(options);

            if (fireworksShowEnable) {
                window.fireworksObject.start();
            } else {
                window.fireworksObject.stop();
            }

            document.getElementById('fireworks-show-enable').checked = fireworksShowEnable;
            document.getElementById('fireworks-sound-enable').checked = fireworksSoundEnable;
        };

        let container = document.getElementById('fireworks-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'fireworks-container';
            container.classList.add('fireworks-container');
            document.body.appendChild(container);
        }

        if (!document.getElementById('fireworks-script')) {
			let js = document.createElement('script');
			js.id = 'fireworks-script';
			js.src = 'https://unpkg.com/fireworks-js@2.x/dist/index.umd.js';
			js.onload = function() {
				window.fireworksInit(container);
			};
			document.head.appendChild(js);
		} else {
			window.fireworksInit(container);
		}
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		const wnd = document.querySelector('#column-window-fireworks');
		const xpos = window.readSetting('fireworks-position-x', null);
		const ypos = window.readSetting('fireworks-position-y', null);
		
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
		const wnd = document.querySelector('#column-window-fireworks');
		if (wnd) {
			const xpos = window.saveSetting('fireworks-position-x', wnd.style.left, false);
			const ypos = window.saveSetting('fireworks-position-y', wnd.style.top, false);
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
            <div class="fireworks">
				<div class="fireworks-settings">
                    <div class="field-row">
                        <input type="checkbox" id="fireworks-show-enable" onclick="window.saveSetting(this.id, ((this.checked) ? '1' : '0'), false); window.fireworksUpdateSettings();"/>
                        <label for="fireworks-show-enable">Enable show</label>
                    </div>
                    
                    <div class="field-row">
                        <input type="checkbox" id="fireworks-sound-enable" onclick="window.saveSetting(this.id, ((this.checked) ? '1' : '0'), false); window.fireworksUpdateSettings();"/>
                        <label for="fireworks-sound-enable">Enable sound</label>
                    </div>
				</div>

                <div class="fireworks-icon">🎇</div>
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
            wndWidth: '220px',
            wndHeight: '100px',
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
            name: 'Fireworks',
            version: '1.0',
            icon: window.location.origin + '/img/icons/fireworks.png'
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
			#column-window-fireworks .window-body {
				width: 100%;
				height: 100%;
			}

            #column-window-fireworks .window {
                background-color: rgb(0, 0, 0);
				color: rgb(255, 255, 255);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-image: url('` + window.location.origin + `/applets/fireworks/stars.png');
            }
		
            .fireworks {
                position: relative;
				text-align: center;
            }
			
			.fireworks-settings {
                position: relative;
                display: inline-block;
                width: 63%;
				margin-top: 17px;
				font-size: 1.4em;
			}

            .fireworks-icon {
                position: relative;
                display: inline-block;
                font-size: 2.5em;
                margin-right: 10px;
            }

            .fireworks-container {
                position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 9999;
				background: transparent;
                pointer-events: none;
            }
        `;
    }
}
