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


# Peer Review
<ol>
<li>De code is overzichtelijk en duidelijk. Wat mij opvalt is dat je een app en een game class hebt.</li>
<li>Ik zou daar een class van maken omdat het mij overbodig lijkt. Verder heb je een interface en gebruik je </li>
<li>overerving en encapsulation. Wat nog mist zijn de singleton class, een static method en stratergy pattern. </li>
<li>Ten slotte heb je denk ik in de class diagram wat foutjes gemaakt. Je overerft classen die niet overgeerft moeten worden.</li>
<li>Dit moeten waarschijnlijk pijlen voor associaties zijn. De classen Grid en GridNode moeten nog worden gemaakt</li>