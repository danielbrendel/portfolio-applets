/**
 * Sound Life Applet
 */
window.SoundLife = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
		window.playSound = function(asset) {
			if (typeof asset === 'string') {
				window.playAudio(asset);
			} else if (Array.isArray(asset)) {
				const rnd = window.random(0, asset.length - 1);
				window.playAudio(asset[rnd]);
			} else {
				console.error('Invalid asset type: ' + typeof asset);
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
		document.getElementById('soundboard-applet').style.backgroundImage = `url('${window.location.origin}/img/uploads/lambda-bg.jpg')`;
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
        return `
			<div id="soundboard-applet">
				<div class="soundboard-column">
					<div class="soundboard-item" onclick="window.playSound('sprayer.wav');">
						Sprayer
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['duty.wav', 'openfire.wav', 'laterbeer.wav', 'badfeeling.wav', 'youtalkmuch.wav', 'anotherone.wav']);">
						Barney
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['greetings.wav', 'donuts.wav', 'administrator.wav', 'fine.wav', 'farestgo.wav', 'refusestep.wav']);">
						Scientist
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('computalk.wav');">
						Computalk
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['hev_logon.wav', 'biohazard_detected.wav', 'falert.wav', 'communications_on.wav', 'warning.wav']);">
						FVox
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('choose.wav');">
						Choose
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('houndeye.wav');">
						Houndeye
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['rotor1.wav', 'rotor2.wav']);">
						Rotor
					</div>
				</div>
				
				<div class="soundboard-column soundboard-column-right">
					<div class="soundboard-item" onclick="window.playSound('crowbar.wav');">
						Crowbar
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('freeman.wav');">
						Freeman
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('alert.wav');">
						Alert
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['headcrab1.wav', 'headcrab2.wav', 'headcrab3.wav', 'headcrab4.wav', 'headcrab5.wav', 'headcrab6.wav', ]);">
						Headcrab
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('flashlight.wav');">
						Flashlight
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('wise.wav');">
						Wisely
					</div>
					
					<div class="soundboard-item" onclick="window.playSound('tentacle.wav');">
						Tentacle
					</div>
					
					<div class="soundboard-item" onclick="window.playSound(['horror1.wav', 'horror2.wav', 'horror3.wav', 'horror4.wav']);">
						Horror
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
            wndWidth: '350px',
            wndHeight: '640px',
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
            name: 'Sound Life',
            version: '1.0',
            icon: window.location.origin + '/img/icons/lambda.png'
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
			#column-window-sound-life .window-body {
				width: 100%;
				height: 100%;
				margin: 0;
			}
		
			#soundboard-applet {
				position: relative;
				display: inline-block;
				width: 100%;
				height: 97%;
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			
			.soundboard-column {
				position: relative;
				display: inline-block;
				width: 49%;
				top: 10px;
			}
			
			.soundboard-column-right {
				float: right;
				text-align: right;
			}
		
            .soundboard-item {
                font-weight: 900;
				font-size: 1.0em;
				text-transform: uppercase;
				letter-spacing: 1px;
				color: #FFA500; /* Original HL1 Orange */
				cursor: pointer;
				text-decoration: none;
				display: inline-block;
				margin-bottom: 15px;
				padding: 20px;
				
				text-shadow: 
				  2px 2px 0px rgba(0, 0, 0, 0.8),
				  0 0 4px rgba(255, 165, 0, 0.4);
				
				transition: all 0.1s ease-in-out;
            }
			
			.soundboard-item:hover {
				color: #FFD700;
				text-shadow: 
				  2px 2px 0px rgba(0, 0, 0, 0.9),
				  0 0 8px rgba(255, 215, 0, 0.6);
				transform: scale(1.02);
			  }
        `;
    }
}
