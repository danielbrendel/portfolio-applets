/**
 * Boredom Applet
 */
window.Boredom = class {
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
		window.objBoredom = this;
		window.cntBoredom = 50;
		
		document.querySelector('#column-window-boredom').children[0].children[0].children[0].innerText = 'Boredom';
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
    }
	
	/**
     * @return void
     */
	spawnMessages(quantity)
	{
		const body = document.querySelector('body');
		const field = document.querySelector('.widgets');
		
		const html = `
			<div class="window">
			  <div class="title-bar">
				<div class="title-bar-text">Boredom</div>
				<div class="title-bar-controls">
				  <button aria-label="Minimize"></button>
				  <button aria-label="Maximize"></button>
				  <button aria-label="Close" onclick="document.querySelector('body').removeChild(this.parentElement.parentElement.parentElement.parentElement); window.playAudio('close.wav');"></button>
				</div>
			  </div>
			  <div class="window-body">
				<div><p>This will keep you busy for a while.</p></div>
				
				<div><button class="btn" onclick="document.querySelector('body').removeChild(this.parentElement.parentElement.parentElement.parentElement); window.playAudio('close.wav');">Close</button></div>
			  </div>
			</div>
		`;
		
		for (let i = 0; i < quantity; i++) {
			const xpos = window.random(0, field.clientWidth - 350);
			const ypos = window.random(0, field.clientHeight - 10);
			
			let div = document.createElement('div');
			div.id = 'boredom-msgbox-' + i;
			div.classList.add('boredom-msgbox');
			div.style.left = `${xpos}px`;
			div.style.top = `${ypos}px`;
			div.innerHTML = html;
			
			body.appendChild(div);
		}
		
		window.setDraggableWindows();
		window.playAudio('notification.wav');
	}
	
	/**
     * @return void
     */
	closeSelf()
	{
		window.closeWidget('#column-window-boredom', this.onClose);
	}

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="boredom-applet">
				<div class="boredom-message-left">
					<img src="` + window.location.origin + '/img/icons/question.png' + `" alt="icon"/>
				</div>
				
				<div class="boredom-message-right">
					<div class="boredom-message-info">Are you currently bored?</div>
				
					<div class="boredom-message-button">
						<button class="btn" onclick="window.objBoredom.closeSelf(); window.objBoredom.spawnMessages(window.cntBoredom);">Yes</button>
						<button class="btn" onclick="window.objBoredom.closeSelf(); window.objBoredom.spawnMessages(window.cntBoredom);">No</button>
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
            wndHeight: '122px',
            btnClose: false,
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
            name: 'Boredom',
            version: '1.0',
            icon: window.location.origin + '/img/icons/boredom.png'
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
			#column-window-boredom {
				width: 100%;
				height: 100%;
			}
			
			@media screen and (max-width: 768px) {
				#column-window-boredom, #column-window-boredom .window {
					width: 355px !important;
				}
			}
			
			.boredom-applet {
				font-family: Courier New, Verdana, Arial;
			}
		
            .boredom-message-left {
				position: relative;
				display: inline-block;
				width: 14%;
			}
			
			.boredom-message-left img {
				position: relative;
				top: -5px;
				left: 8px;
			}
			
			.boredom-message-right {
				position: relative;
				display: inline-block;
				width: 80%;
			}
			
			.boredom-message-info {
				position: relative;
				top: 12px;
				font-size: 1.2em;
				margin-bottom: 10px;
			}
			
			.boredom-message-button {
				position: relative;
				top: 25px;
				left: -30px;
				text-align: center;
			}
			
			.boredom-message-button button {
				font-family: Courier New, Verdana, Arial;
			}
			
			.boredom-msgbox {
				position: fixed;
				z-index: 100;
			}
			
			.boredom-msgbox .window-body {
				text-align: center;
				font-family: Courier New, Verdana, Arial;
			}
        `;
    }
}
