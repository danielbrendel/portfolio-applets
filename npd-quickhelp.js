/**
 * NPD Quickhelp Applet
 */
window.NpdQuickhelp = class {
    /**
     * Construct class object instance
     */
    constructor()
    {
        window.oNPDQuickHelpTopics = [
            {
                ident: 'inadequacy',
                label: '🚀 Inadequacy',
                help: `Are you currently engaging in things such as
                <ul>
                    <li>Excessively promoting your projects</li>
                    <li>Bragging about your achievements</li>
                    <li>Overcompensate by lecturing others</li>
                </ul>

                Your value as a person is <strong>not</strong> defined by accomplishments! You are currently trying to fill your piggy-bank with wrong coins. However, these coins cannot cure any broken self-esteem. Other people cannot be a mirror!

                Here is a list of actions you can do immediately:
                <ul>
                    <li>Sit down in a preferably calm place</li>
                    <li>Close your eyes and inhale/exhale 10 times</li>
                    <li>Think of at least 5 personal traits you love about yourself that are independent of other people</li>
                    <li>Think of a situation as a children/adolescent when you did something for the sheer joy of it</li>
                    <li>Describe the feelings and actions in that situation in detail</li>
                    <li>Write down your thoughts below</li>
                </ul>
                `
            },

            {
                ident: 'defensiveness',
                label: '👿 Defensiveness',
                help: `Are you currently engaging in things such as
                <ul>
                    <li>Counter-attacking someone in response?</li>
                    <li>Devaluing someone in response?</li>
                    <li>Belittling someone in response?</li>
                </ul>

                Other people have no authority over your self-worth! Engaging in overcompensational, aggressive defense mechanisms are a waste of energy. You are defending against something that isn't an actual threat in the first place.

                Here is a list of actions you can do immediately:
                <ul>
                    <li>Sit down in a preferably calm place</li>
                    <li>Close your eyes and inhale/exhale 10 times</li>
                    <li>Realize: No one has any authority over your self-worth</li>
                    <li>If they have authority, it's because you give it to them</li>
                    <li>However, if you did this, you can take it back at any time</li>
                    <li>Act sovereign: You know your value, no one can take it away from you</li>
                    <li>Write down your thoughts below</li>
                </ul>`
            },

            {
                ident: 'envy',
                label: '😤 Envy',
                help: `Are you currently feeling envy because someone
                <ul>
                    <li>Seems more successful in terms of money or status?</li>
                    <li>Seems more popular because of their attractiveness?</li>
                    <li>Seems more 'valueable' because of being in a happy social group?</li>
                </ul>

                These things don't define someone's worth as a person. Everyone has flaws. There is a whole lot more about a person than we may percieve at first glance.

                <ul>
                    <li>A wealthy person can be unhappy because they lack true connection</li>
                    <li>An attractive person can have an invisible illness</li>
                    <li>That one person laughing in a social group might just feel lonely again once they get home</li>
                </ul>

                Remember: There are rarely truly happy people. Everyone has their problems to deal with. 

                Here is a list of actions you can do immediately:
                <ul>
                    <li>Sit down in a preferably calm place</li>
                    <li>Close your eyes and inhale/exhale 10 times</li>
                    <li>Realize: This envy comes from the past. The people you are envious at are proxies.</li>
                    <li>Realize: Competition is a lack of unconditional love</li>
                    <li>Act: Count as many traits and talents you have</li>
                    <li>Act: Reflect on your strengths and abilities</li>
                    <li>Act: Think of at least 3 times where you engaged in passionate activities</li>
                    <li>Write down your thoughts below</li>
                </ul>`
            },

            {
                ident: 'emptiness',
                label: '😞 Emptiness',
                help: `Are you currently feeling empty because
                <ul>
                    <li>You feel disconnected from yourself?</li>
                    <li>Thus feeling disconnected from your surroundings?</li>
                    <li>Have the feeling that nothing matters?</li>
                    <li>Was this after a recent 'grandiose high'?</li>
                </ul>

                It's okay. After a grandiose high you feel like that because the high doesn't last. The grandiose high is like a drug you need to feel good with yourself. But at some point you get used to the amount and need more. However, this feeling can be managed.

                Here is a list of actions you can do immediately:
                <ul>
                    <li>Take a walk in nature</li>
                    <li>During warm seasons, try to observe animals. What are they doing?</li>
                    <li>During cold seasons, try to observe woods, trees and the sky.</li>
                    <li>Take a break, and try to feel your surroundings. Breathe the air.</li>
                    <li>Nature unconditionally accepts your presence. How comforting is it to just be, right?</li>
                    <li>How about a cup of coffee? How about taking a bath, or playing a favorite video game?</li>
                    <li>You will make it through this episode, like you always did!</li>
                    <li>Write down your thoughts below</li>
                </ul>`
            },

            {
                ident: 'shame',
                label: '😶‍🌫️ Shame',
                help: `Are you currently facing thoughts of shame?
                
                People do make mistakes. Everyone. No one can be perfect. You are valid. You are okay. You don't need others seeing you as flawless.

                Here is a list of actions you can do immediately:
                <ul>
                    <li>Sit down in a preferably calm place</li>
                    <li>Close your eyes and inhale/exhale 10 times</li>
                    <li>Realize: No one is perfect.</li>
                    <li>Realize: Everyone has flaws</li>
                    <li>Realize: Everyone makes mistakes, it's inevitable</li>
                    <li>Realize: Your self-worth does not depend on perfection</li>
                    <li>Write down your thoughts below</li>
                </ul>`
            },
        ];

        window.oNPDQuickHelpMemes = [
            'genius-meme-1.jpg',
            'imperfect-comment.jpg',
            'narcissistic-dog.jpg',
            'no-one-notices.png',
            'npd-arrogance-inner-dialogue.jpg',
            'npd-is-cool.png',
            'npd-naturally-perfect-disorder.jpg',
            'npd-profoundly-wholesome-naturally-perfect-deity.png',
            'npd-self-worth-tlk-meme.png',
            'npd-splitting.png',
            'self-talk-translater.png',
            'startup-success-npd.png'
        ];

        window.showNPDQuickHelp = function(ident) {
            const info = document.querySelector('.npd-quickhelp-applet-info');
            const target = document.querySelector('.npd-quickhelp-applet-topics');
            if ((target) && (info)) {
                window.oNPDQuickHelpOldInfo = info.innerHTML;
                window.oNPDQuickHelpOldContent = target.innerHTML;
                const restoreOld = `document.querySelector('.` + target.className + `').innerHTML = window.oNPDQuickHelpOldContent; document.querySelector('.` + info.className + `').innerHTML = window.oNPDQuickHelpOldInfo;`;
                
                for (let i = 0; i < window.oNPDQuickHelpTopics.length; i++) {
                    if (window.oNPDQuickHelpTopics[i].ident === ident) {
                        const customRemarks = `<div class="npd-quickhelp-applet-textarea"><textarea id="custom-remarks-` + window.oNPDQuickHelpTopics[i].ident + `" oninput="window.saveSetting(this.id, this.value, false);">` + window.readSetting('custom-remarks-' + window.oNPDQuickHelpTopics[i].ident, '') + `</textarea></div>`;
                        target.innerHTML = `<div class="npd-quickhelp-applet-helptext">` + window.oNPDQuickHelpTopics[i].help.replaceAll("\n", "<br/>") + `</div>` + customRemarks + `<div class="npd-quickhelp-applet-button"><a class="btn" href="javascript:void(0);" onclick="` + restoreOld + `; document.querySelector('.npd-quickhelp-applet').scrollTop = 0; window.playAudio('click.wav');">Go back</a></div><br/><br/>`;
                        info.innerHTML = window.oNPDQuickHelpTopics[i].label;
                        return;
                    }
                }

                target.innerHTML = 'Topic not found.';
            }
        };

        window.showAnotherNPDMeme = function() {
            const meme = window.oNPDQuickHelpMemes[window.random(0, window.oNPDQuickHelpMemes.length - 1)];
            document.querySelector('.npd-quickhelp-applet-memes').children[0].src = window.location.origin + '/img/npd-memes/' + meme;
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
        for (let i = 0; i < window.oNPDQuickHelpTopics.length; i++) {
            localStorage.removeItem('custom-remarks-' + window.oNPDQuickHelpTopics[i].ident);
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
    }

    /**
     * Called when the applet is shown, e.g. when launching via desktop
     * 
     * @return void
     */
    onShow()
    {
		const wnd = document.querySelector('#column-window-sample-applet');
		const xpos = window.readSetting('sample-applet-position-x', null);
		const ypos = window.readSetting('sample-applet-position-y', null);
		
		if ((wnd) && (xpos) && (ypos)) {
			wnd.style.position = 'absolute';
			wnd.style.left = xpos;
			wnd.style.top = ypos;
		}

        window.showAnotherNPDMeme();
    }

    /**
     * Called when the applet is closed, e.g. via the close action button in the title bar
     * 
     * @return void
     */
    onClose()
    {
        console.log('onClose');
		
		const wnd = document.querySelector('#column-window-npd-quickhelp-applet');
		if (wnd) {
			const xpos = window.saveSetting('npd-quickhelp-applet-position-x', wnd.style.left, false);
			const ypos = window.saveSetting('npd-quickhelp-applet-position-y', wnd.style.top, false);
		}
    }

    /**
     * Return the HTML content which is rendered into the applet window
     * 
     * @return string
     */
    view()
    {
        let topicButtons = ``;
        for (let i = 0; i < window.oNPDQuickHelpTopics.length; i++) {
            topicButtons += `
                <div class="npd-quickhelp-applet-button">
                    <a class="btn" href="javascript:void(0);" onclick="window.showNPDQuickHelp('` + window.oNPDQuickHelpTopics[i].ident + `'); window.playAudio('click.wav');">` + window.oNPDQuickHelpTopics[i].label + `</a>
                </div>
            `;
        }

        return `
            <div class="npd-quickhelp-applet">
				<div class="npd-quickhelp-applet-info">
					<div>👑 Having a narcissistic injury? 👑</div>
                    <div>➡️ There is help! ⬅️</div>
				</div>
				
				<div class="npd-quickhelp-applet-topics">
					` + topicButtons + `
				</div>

                <div class="npd-quickhelp-applet-memes">
                    <img src="" onclick="window.showAnotherNPDMeme(); window.playAudio('click.wav');" alt="meme"/>
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
            wndWidth: '450px',
            wndHeight: '700px',
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
            name: 'Npd Quickhelp',
            version: '1.0',
            icon: window.location.origin + '/img/icons/npd-quickhelp.png'
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
			#column-window-npd-quickhelp .window-body {
				width: 98%;
				height: 100%;
			}

            #column-window-npd-quickhelp .window {
				background-color: rgb(32, 32, 30) !important;
                color: rgb(200, 200, 200) !important;
			}
		
            .npd-quickhelp-applet {
                position: relative;
                overflow-y: auto;
                height: 95%;
				text-align: center;
                font-size: 1.2em;
                font-family: Bahnschrift, Arial, Verdana, sans-serif;
            }
			
			.npd-quickhelp-applet-info {
				margin-top: 20px;
                margin-bottom: 25px;
				font-size: 1.5em;
			}
			
			@media screen and (min-width: 951px) {
				.npd-quickhelp-applet-info {
					font-size: 1.2em;
				}
			}
			
			.npd-quickhelp-applet-topics {
				position: relative;
			}

            .npd-quickhelp-applet-topics ul {
                margin-top: 5px;
                margin-bottom: -30px;
                font-style: italic;
            }
			
			.npd-quickhelp-applet-button {
				margin-top: 20px;
			}
			
			.npd-quickhelp-applet-button a.btn {
				width: 90% !important;
                background: #3a3a3a !important;
                color: #bcbcbc !important;
                box-shadow: inset -1px -1px rgb(10, 10, 10), inset 1px 1px #000, inset -2px -2px gray, inset 2px 2px rgb(172, 172, 172) !important;
			}

            .npd-quickhelp-applet-button a.btn:not(:disabled):active {
                color: #bcbcbc !important;
				box-shadow: inset -1px -1px #000, inset 1px 1px rgb(10, 10, 10), inset -2px -2px rgb(223, 223, 223), inset 2px 2px gray !important;
			}

            .npd-quickhelp-applet-helptext {
                position: relative;
                margin-bottom: 20px;
                padding: 10px;
                text-align: left;
            }

            .npd-quickhelp-applet-textarea {
                position: relative;
                margin-bottom: 50px;
            }

            .npd-quickhelp-applet-textarea textarea {
                width: 90%;
                height: 200px;
                color: rgb(250, 250, 250);
                background-color: rgb(35, 35, 35);
                font-size: 1.2em;
            }

            .npd-quickhelp-applet-memes {
                position: relative;
                width: 90%;
                margin-top: 30px;
                margin-left: 20px;
                cursor: pointer;
            }

            .npd-quickhelp-applet-memes img {
                width: 100%;
            }
        `;
    }
}
