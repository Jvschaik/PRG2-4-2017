# Installeren

<ol>
<li>Download en installeer Yarn (https://yarnpkg.com/en/)</li>
<li>Download of fork deze repo</li>
<li>Open een terminal en ga naar de project folder root</li>
<li>Type in terminal: 'yarn install' om alle modules te installeren</li>
<li>Om het project te starten: 'yarn dev'</li>
<li>ga in je browser naar localhost:8080</li>
<li>Om het project te builden (alleen voor productie): 'yarn build'</li>
</ol>

# Webstorm configuratie

<ol>
<li>Om TSLint te configureren ga je naar <b>Preferences</b> (WebStorm -> Preferences of CMD + ,)</li>
<li>Dan navigeer je naar <b>Languages & Frameworks</b> -> <b>TypeScript</b> -> TSLint</li>
<li>Klik op <b>Enable</b></li>
<li>Check of de <i>Node interpreter</i> goed staat (als je Node global hebt geinstalleerd, zou er <b>/user/local/bin/node</b> moeten staan)</li>
<li>Check of TSLint package goed staat (zou moeten verwijzen naar tslint in de node_modules map van deze project folder)</li>
<li>Selecteer vervolgens <b>Configuration File</b> en klik op de <b>...</b> aan de rechterzijde om de file browser te openen</li>
<li>Zoek hier naar de <b>tslint.json</b> file in de root folder van dit project</li>
<li>Klik op Apply en OK.</li>
</ol>

# Snake 
<ol>
<li>Klik op Game om het spel te starten</li>
<li> Stuur de snake met de pijltjes toetsen</li>
<li>Probeer zoveel mogelijk muizen te pakken zonder af te gaan</li>
<li>Je bent af als je de muren raakt en jezelf</li>
<li>Om het spel te herstarten klik je op R</li>
</ol>


# Beoordeling

De code is op een andere manier dan in de lessen worden gegeven. Misschien komt het door dat je Typescript Lint gebruikt.
Ik zou de code een beetje houden aan de lessen van school. Voor de rest is wel goed leesbaar en staan geen rare benamingen op.

- Klassendiagram

De classes GridNode en Grid bestaan niet in de src folder, maar staan wel in de klassendiagram.
Volgens de klassendiagram overerf je bijna alles. Je geeft aan dat Game de class App overerft, Snake de class Game enz.
Ik denk dat je bedoelt dat de class App een Game heeft en een Game heeft een Snake.

- Onderdelen

Er is een interface, encapsulation en inheritance, maar geen singleton, strategy en static utillity method.
Ik zou een singleton op de class Game, net als de lessen van school. De rest moet nog gemaakt worden.



