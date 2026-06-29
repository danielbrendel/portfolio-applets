/**
 * Internet Explorer Applet
 */
window.InternetExplorer = class {
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
		document.querySelector('#column-window-internet-explorer').children[0].children[0].children[0].innerText = 'Internet Explorer';
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		window.playAudio('error.wav');
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
		let html = `
			<p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>

			<p>If this is the first time you've seen this Stop error screen,
			restart your computer. If this screen appears again, follow
			these steps:</p>

			<p>Check to make sure any new hardware or software is properly installed.
			If this is a new installation, ask your hardware or software manufacturer
			for any Windows updates you might need.</p>

			<p>If problems continue, disable or remove any newly installed hardware
			or software. Disable BIOS memory options such as caching or shadowing.
			If you need to use Safe Mode to remove or disable components, restart
			your computer, press F8 to select Advanced Startup Options, and then
			select Safe Mode.</p>

			<p>Technical Information:</p>

			<p>*** STOP: 0x000000D1 (0x0000000C, 0x00000002, 0x00000000, 0xF86B5A89)</p>

			<p>*** iexplore.exe - Forfeited coolness to other browsers</p>
		`;
		
		let div = document.createElement('div');
		div.id = 'internet-explorer-bluescreen';
		div.innerHTML = html;
		div.addEventListener('click', function() {
			body.removeChild(div);
			window.notify('Internet Explorer', 'Maybe you should start using a different browser...', 'warning', 15000);
		});
		
		let body = document.querySelector('body');
		body.appendChild(div);
		
		window.playAudio('error.wav');
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="internet-explorer-applet">
				<div class="internet-explorer-message-left">
					<img src="` + window.location.origin + '/img/icons/error.png' + `" alt="icon"/>
				</div>
				
				<div class="internet-explorer-message-right">
					<div class="internet-explorer-message-info">Internet Explorer has stopped working. Please close and try again.</div>
				
					<div class="internet-explorer-message-button">
						<button class="btn" onclick="window.playAudio('error.wav');">Retry</button>
					</div>
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
            wndWidth: '430px',
            wndHeight: '135px',
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
            name: 'Internet Explorer',
            version: '1.0',
            icon: window.location.origin + '/img/icons/iexplore.png'
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
			#column-window-internet-explorer {
				width: 100%;
				height: 100%;
			}
			
			@media screen and (max-width: 768px) {
				#column-window-internet-explorer, #column-window-internet-explorer .window {
					width: 355px !important;
				}
			}
			
			.internet-explorer-applet {
				font-family: Courier New, Verdana, Arial;
			}
		
            .internet-explorer-message-left {
				position: relative;
				display: inline-block;
				width: 14%;
			}
			
			.internet-explorer-message-left img {
				position: relative;
				top: -20px;
			}
			
			.internet-explorer-message-right {
				position: relative;
				display: inline-block;
				width: 80%;
			}
			
			.internet-explorer-message-info {
				position: relative;
				top: 9px;
				margin-bottom: 10px;
			}
			
			.internet-explorer-message-button {
				position: relative;
				top: 25px;
				left: -30px;
				text-align: center;
			}
			
			.internet-explorer-message-button button {
				font-family: Courier New, Verdana, Arial;
			}
			
			#internet-explorer-bluescreen {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1337;
				color: white;
				background-color: #0000AA;
				font-family: Courier New, Verdana, Arial;
			}
			
			#internet-explorer-bluescreen p {
				font-size: 1.5em;
				font-weight: bold;
				width: 40%;
				padding-left: 10px;
			}
			
			@media screen and (max-width: 768px) {
				#internet-explorer-bluescreen p {
					width: 90%;
					font-size: 1.0em;
				}

				.internet-explorer-message-info {
					font-size: 15px;
				}

				.internet-explorer-message-button {
					top: 15px;
				}
			}
        `;
    }
}
