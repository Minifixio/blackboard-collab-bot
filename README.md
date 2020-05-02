# Blackboard Collaborate BOT

## Background

During the lockdown, some schools, such as mine, decided to use [Blackboard Collaborate](https://www.blackboard.com/teaching-learning/collaboration-web-conferencing/blackboard-collaborate) to provide online classes.
The app delivers many options such as chatting, using the mic to speak, drawing on the board, etc... 

The whole idea of this BOT is to let you control a phamtom user over the classroom to play with the different tools of the app.
I first used Python to build a light version of this BOT and quickly switched over NodeJS especially because of the better compatibility with browser control related tools such as [Pupperteer](https://github.com/puppeteer/puppeteer)

<br/>

# Usage ?

## Requirements :

In order to run it you need :
  - NodeJS and npm (installed with Node) : [download](https://nodejs.org/en/)
  - A virtual audio driver such as :
    - MacOS : [Blackhole](https://github.com/ExistentialAudio/BlackHole)
    - Windows : [VB-Audio Virtual Cable](https://www.vb-audio.com/Cable/index.htm)
    - Linux : [PulseAudio](https://gitlab.freedesktop.org/pulseaudio/pulseaudio)
 
<br/>

# Setup the audio virutal server :

In order to let the BOT use the microphone input in Chromium to play sounds you need to setup a virtual audio server.
Then you need to bind **your sound output directly to your microphone input** such as a loop. 

Here is the *workflow diagram* :

![Workflow explanation](https://github.com/Minifixio/blackboard-collab-bot-js/blob/master/bot/models/sound_workflow.png)

<br/><br/>
To redirect the sound output to both your own user's audio output and mic input, you can use multi-output devices. 
Here is an [example](https://support.apple.com/guide/audio-midi-setup/ams7c093f372/mac) on MacOS<br/><br/>

<br/>

# Run it !

## **Locally using Node** :
 
Open your terminael, go to the **`/bot`** folder. Run **```npm install```**. It should install all the dependencies the project needs to work.
 
Then run **`node main.js`**, open your browser and go to **```http://localhost:3000/main```**.
 
You should see the dashboard. You can then start the BOT using it.
If the node process dies, the dashboard also quits.


<br/>

## Using a **virtual machine** :

*Coming soon*


<br/>

## Using **Docker** :
 
*Coming soon, having problems with PulseAudio config*
 
<br/><br/>

# Common issues :

- **Chromedriver missing** : 
  - if you have problems with Chromium see [Pupperteer](https://github.com/puppeteer/puppeteer) wiki to find out how to propely setup your environment.

- **Right access for [Say.js](https://github.com/marak/say.js/)** :
  - If you are launching your app in VSCode for example, the app may require the rights to use your system voices (on MacOS). Make sure to grant them.
  - If you are using Windows, you may have an issue with Powershell. See the [issue](https://github.com/Marak/say.js/issues/75)

Make sure to report any other issues.

<br/><br/>

# Customizing :

You can then add you own commands / drawings / sounds. 
  - See how commands are built in the ```bot/commands```folder
  - See how sound files are referenced in the ```bot/commands/Sound.js``` file
  - Drawings needs to be referenced in the ```bot/commands/Draw.js``` file and ```.json``` files of the coordinates need to be added in the ```/files/drawings/path``` folder. You can use tools such as [Coordinator](https://spotify.github.io/coordinator/) to convert ```.svg``` files of your own to coordinates

If you want to edit the dashboard, you can play with the Angular project inside the ```/dashboard``` folder.  
Then, make sure to run ```ng build --outputPath="../bot/dist"``` to replace the actual dashboard.

<br/><br/>

I'm really open to any suggestions / remarks / contributions :)

