/**
 * Minecraft Server Applet
 */
window.MinecraftServer = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
        window.mcsrvSetStatusBar = function(text) {
            document.querySelector('.status-bar-field').innerHTML = text;
        };

        window.mcsrvAddServer = function(addr, port, label = 'N/A') {
            const table = document.querySelector('.minecraft-server-content-list').children[0];
            const body = table.getElementsByTagName('tbody')[0];

            const row = body.insertRow(-1);
            const cellAddr = row.insertCell(0);
            const cellName = row.insertCell(1);

            cellAddr.textContent = addr + ':' + port;
            cellName.textContent = label;

            row.addEventListener('dblclick', function() {
                window.mcsrvQueryInfo(this.children[0].innerText, this.children[1]);
                window.playAudio('click.wav');
            });
        };

        window.mcsrvQueryInfo = function(address, retElem = null) {
            const addr = address.split(':')[0];
            const port = address.split(':')[1];

            window.mcsrvSetStatusBar('Trying to get server info for ' + address + ' ...');

            window.ajaxRequest('get', `https://mcsrvstatus.danielbrendel.com/mcstatus.php?address=${addr}&port=${port}`, {}, function(response) {
                console.log(response);

                if (response.online) {
                    document.querySelector('.minecraft-server-content-data').style.top = '-414px';
                    document.querySelector('.minecraft-server-content-data-header-icon').innerHTML = '<img src="' + response.icon + '" alt="icon"/>';
                    document.querySelector('.minecraft-server-content-data-header-label').innerHTML = response.motd.html;
                    document.querySelector('.minecraft-server-content-data-version').innerHTML = 'Version: ' + response.protocol.version + ' / ' + response.protocol.name;
                    document.querySelector('.minecraft-server-content-data-counts').innerHTML = 'Players: ' + response.players.online + '/' + response.players.max;

                    if (retElem !== null) {
                        retElem.innerText = response.motd.clean;
                    }

                    window.mcsrvSetStatusBar(address + ' | Server is online | Version: ' + response.version);
                } else {
                    window.mcsrvSetStatusBar('Server ' + address + ' is offline');
                }
            });
        };

        window.mcsrvLoadTable = function(table) {
            const data = JSON.parse(window.readSetting('mcsrv-table', '[]'));

            for (let item of data) {
                const address = item.addr.split(':')[0];
                const port = item.addr.split(':')[1];
                const label = item.label;

                window.mcsrvAddServer(address, port, label);
            }
        };

        window.mcsrvSaveTable = function(table) {
            let data = [];
            let skip = true;

            for (let row of table.rows) {
                const addr = row.cells[0].textContent;
                const label = row.cells[1].textContent;

                if (!skip) {
                    data.push({
                        addr: addr,
                        label: label
                    });
                }

                if (skip) {
                    skip = false;
                }
            }

            window.saveSetting('mcsrv-table', JSON.stringify(data), false);
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
        window.removeSetting('mcsrv-table');
    }

    /**
     * Called when the applet is loaded
     * This happens everytime the page is loaded/refreshed, or when the applet is installed
     * 
     * @return void
     */
    onLoad()
    {
        window.mcsrvLoadTable(document.querySelector('.minecraft-server-content-list').children[0]);
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		if (window.innerWidth < 500) {
			const appwnd = document.querySelector('#column-window-minecraft-server');
			
			appwnd.style.width = `${window.innerWidth - 50}px`;
			appwnd.style.height = `${window.innerHeight - 150}px`;
			appwnd.children[0].style.width = `${window.innerWidth - 50}px`;
			appwnd.children[0].style.height = `${window.innerHeight - 150}px`;
			
			document.querySelector('.minecraft-server-content').style.height = `${window.innerHeight - 235}px`;
			
			window.setWidgetCentered(appwnd);
		}
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
        window.mcsrvSaveTable(document.querySelector('.minecraft-server-content-list').children[0]);
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        return `
            <div class="minecraft-server-applet">
				<div class="minecraft-server-bar">
					<div class="minecraft-server-input">
						<div><input type="text" id="minecraft-server-address" placeholder="Enter server address"></div>
                        <div><input type="text" id="minecraft-server-port" placeholder="Enter server port"></div>
					</div>

                    <div class="minecraft-server-action">
                        <a class="btn" onclick="window.mcsrvAddServer(document.getElementById('minecraft-server-address').value, document.getElementById('minecraft-server-port').value); window.playAudio('click.wav');"><img src="` + window.location.origin +  `/img/icons/action-add.png" alt="icon"/></a>
                    </div>
				</div>
				
				<div class="minecraft-server-content">
					<div class="minecraft-server-content-list">
                        <table class="interactive">
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Name</th>
                                </tr>
                            </thead>

                            <tbody></tbody>
                        </table>
                    </div>

                    <div class="minecraft-server-content-data">
                        <div class="minecraft-server-content-data-header">
                            <div class="minecraft-server-content-data-header-icon"></div>
                            <div class="minecraft-server-content-data-header-label"></div>
                        </div>

                        <div class="minecraft-server-content-data-version"></div>
                        <div class="minecraft-server-content-data-counts"></div>

                        <div class="minecraft-server-content-data-players"></div>
                    </div>
				</div>

                <div class="minecraft-server-statusbar">
                    <div class="status-bar">
                        <p class="status-bar-field">Double-click a list-item to fetch server information</p>
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
            wndWidth: '950px',
            wndHeight: '630px',
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
            name: 'Minecraft Server',
            version: '1.0',
            icon: window.location.origin + '/img/icons/minecraft-server.png'
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
			#column-window-minecraft-server .window-body {
				width: 100%;
				height: 100%;
			}
		
            .minecraft-server-applet {
                position: relative;
            }
			
			.minecraft-server-bar {
				position: relative;
				top: -5px;
			}
			
			.minecraft-server-buttons {
				position: relative;
				display: inline-block;
				width: 12%;
			}
			
			@media screen and (max-width: 500px) {
				.minecraft-server-buttons {
					width: 32%;
				}
			}
			
			.minecraft-server-buttons div {
				display: inline-block;
			}
			
			.minecraft-server-buttons a.btn {
				min-width: 32px;
				min-height: 32px;
				border-radius: 15px;
				padding-left: 10px;
				padding-right: 10px;
			}
			
			.minecraft-server-input {
				position: relative;
				display: inline-block;
				width: 95.4%;
                top: 2px;
			}

            .minecraft-server-input div {
                position: relative;
				display: inline-block;
                width: 49%;
            }
			
			@media screen and (max-width: 500px) {
				.minecraft-server-input {
					width: 60%;
				}
			}
			
			.minecraft-server-input input {
				padding: 15px;
				font-size: 1.05em;
				width: 100%;
			}

            .minecraft-server-action {
                position: relative;
                display: inline-block;
                top: 12px;
            }

            .minecraft-server-action a.btn {
                min-width: 30px;
                height: 30px;
                cursor: pointer;
            }

            .minecraft-server-action img {
                position: relative;
                top: -5px;
                left: 5px;
                width: 20px;
                height: 20px;
            }
			
			.minecraft-server-content {
				position: relative;
				width: 100%;
				height: 530px;
				top: 5px;
				left: -8px;
				background-color: rgb(150, 150, 150);
				box-shadow: inset -1px -1px #fff, inset 1px 1px rgb(10, 10, 10), inset -2px -2px rgb(223, 223, 223), inset 2px 2px grey;
			}

            .minecraft-server-content-list {
                position: relative;
                display: inline-block;
                width: 48%;
                height: 100%;
            }

            .minecraft-server-content-list table {
                display: block;
                width: 100%;
                height: 99.5%;
                overflow-y: auto;
                background-color: rgb(200, 200, 200);
            }

            .minecraft-server-content-list table > tbody > tr > * {
                height: unset !important;
            }

            .minecraft-server-content-list thead th:first-child {
                width: 100%;
            }

            .minecraft-server-content-list td {
                height: unset !important;
            }

            .minecraft-server-content-list tbody tr:active {
                background-color: rgb(150, 150, 150);
            }

            .minecraft-server-content-data {
                position: relative;
                display: inline-block;
                width: 49.4%;
                height: 95.5%;
                top: -3px;
                left: -3px;
                background-color: rgb(100, 100, 100);
            }

            .minecraft-server-content-data-header {
                display: inline-block;
            }

            .minecraft-server-content-data-header-icon {
                display: inline-block;
            }

            .minecraft-server-content-data-header-label {
                position: relative;
                display: inline-block;
                top: -23px;
                font-size: 1.5em;
                margin-left: 10px;
            }

            .minecraft-server-statusbar {
                position: absolute;
                bottom: -32px;
                left: -8px;
                width: 100%;
            }
        `;
    }
}
