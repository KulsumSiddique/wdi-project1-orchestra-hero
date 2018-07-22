# General Assembly WDI Project 1: Le Héros Orchestral

## Goal
To create a single-page web game, using HTML, CSS and JavaScript technologies learnt in the first three weeks of the WDI course.

## Game Description
Play some of the most famous classical music masterpieces in the world's finest concert halls with the world-renowned Orchestre Philharmonique d'Amiens! Just make sure you meet their strict standards and do not enrage their notoriously fierce conductor, Monsieur Enmarche...

## Technologies Used
* HTML5 with HTML5 audio
* CSS3 with animation
* JavaScript (ECMAScript 6)
* jQuery
* Git
* GitHub
* Google Fonts
* Photoshop
* Logic Pro with EastWest samples (for the audio)

## Approach Taken

### Initial Idea
Given that I have a degree in classical music, my favourite pieces of music are all orchestral. Unfortunately, few agree with me. Whilst there are many music games about featuring different popular music styles, classical music is underrepresented.

So I wanted to create a game that portrays orchestral music in a fun light, but I also wanted to be realistic about what it's like to play in an orchestra. So sometimes the user will be playing the melody, sometimes they will be playing in the background, and sometimes they will not be playing at all!

I envisaged this to be an educational game too, featuring info pop-ups about the composers, pieces, instruments and concert halls.

The piece I chose was a scene from Swan Lake, and I chose to pick out the first oboe part for the player to play. Not only is it a very famous piece of music, but it's also the same tempo and metre all the way through, with no complicated rhythms.

### Getting the Keypresses Working
There were several ways I could have laid out the fifteen keypresses I needed for the game to be possible. I went with doing it based on a piano keyboard, but with the highest note and lowest note on the lower row of the keyboard:

Diagram goes here

Initially, I used a long if else statement to connect my audio files up with my keypresses - so that when a key is pressed, its associated audio file is played. I ended up refactoring it into a series of objects.

### Working with Tempo and JavaScript
84 crotchets per minute is not the easiest tempo to divide, but I resisted the urge to speed it up to 90. After trying to get a steady metronome working with setInterval, I quickly realised that this wouldn't work in Vanilla JavaScript as it lags very quickly. The only way I could think of getting round this - using only the technologies we'd learnt so far on the course - was to use a series of setTimeout functions. This was good because it controlled each note independently, and so kept the appearing keypresses in time.

Because I had lots of these functions to do, with very precise units of milliseconds, I made a series of variables to store these in and add to the millisecs let variable.

Once the whole oboe part was hard coded, the screen looked like this. To test this was in time, I made a metronome test audio file, and had the relevant audio file play at its setTimeout function, where its key would appear.

Screenie goes here.


### Animating the Key Press Divs
