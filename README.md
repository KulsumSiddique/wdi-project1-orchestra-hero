# General Assembly WDI Project 1: Le Héros Orchestral
[GitHub Pages](https://platypotomus.github.io/wdi-project1-orchestra-hero/)

[GitHub Repo](https://github.com/platypotomus/wdi-project1-orchestra-hero)

## Brief
To create a single-page web game, using HTML, CSS, and JavaScript technologies learnt in the first three weeks of the WDI course.

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
* PhotoShop
* Logic Pro with EastWest samples (for the audio)

## Approach Taken
Since I have a degree in classical music, I wanted to do a game about orchestral music - one that is both fun and educational. The piece I chose was a very famous scene from Tchiakovsky's Swan Lake. It's ideal because it sticks to the same tempo and metre, and doesn't feature complex rhythms. The player plays the oboe part along with an orchestral backing track.

### Functionality
The first thing was to get the keypresses working. I laid out the fifteen keypresses in the style of a piano keyboard, but with the lowest note and highest note elsewhere.

Each keypress command is shown in a div, which is created on cue. I couldn't use setInterval to trigger this, due to its propensity to lag. This would obviously have spelt disaster when playing with the backing track. The only way to get around this was to have a setTimeout function for every note and rest. To test these fired off in time, I attached the audio files to the setTimeouts and created a test metronome mp3.

#### Divs Created on Cue
![Divs being created on cue](screenshots/basic-divs.png)

I used CSS animation to move the divs along the screen. I decided to move them from right to left, and have them collide in the centre of the screen. As an experienced musician, this seemed the most intuitive from a UX point of view. Once the animation is complete, the divs are removed from the DOM.

Next, I worked on a bit of styling (to put the elements in the right place and make the game responsive) and did the collision. Since the divs would still be on the screen after the collision had happened, I couldn't check for this using an object or array. So instead, I gave each div a class equal to its keypress. After they pass the collision zone, they are immediately given a class of "dead." So I check for a collision between the central collision zone, and the first div with the class of whatever key the player pressed, that also doesn't have a class of "dead."

Once I'd added a basic scoring system and a page to show the score at the end, I'd hit MVP:

#### Gameplay
![Gameplay](screenshots/mvp-gameplay.png)

Next, I made the scoring and gameplay more interesting by adding surprise bonuses for hit streaks and penalties for miss streaks. Then I added extra features such as the introduction pages, including an "audition" page to get the player accustomed to the keypresses. Then I added the feature allowing the user to select the gameplay background by selecting the venue.

### Styling
I initially envisaged a classy gold and brown design for the game. Whilst editing my images in PhotoShop, I opted for a gold, black and white theme instead. I used two Google Fonts: Parisienne for the titles, and Calligraffitti for the rest of the text. Some gradient and more CSS animation was added for finishing touches.

I also used PhotoShop to create Monsieur Enmarche - who happens to be Emmanuel Macron shopped onto a stock image conductor.

## Final Product
#### Title
![Title](screenshots/welcome-final.png)

#### Setup
![Setup](screenshots/setup-final.png)

#### Introduction
![Introduction](screenshots/intro-final.png)

#### Audition
![Audition](screenshots/audition-final.png)

#### Gameplay
![Gameplay](screenshots/gameplay-final.png)

#### Result
![Result](screenshots/result-final.png)


## Wins and Blockers

A big win was building the game itself and really pushing the limits of what I had learnt so far, especially with more complex CSS3 and jQuery. I am also very happy with the styling and UX, and also how I dealt with the tempo issues.

The biggest blocker was definitely the collisions. Due to my design choice, I spent a lot more time trying to find a way to check for collisions, and nothing worked for a long time.

Overall, I am super proud and happy to have achieved something like this, after only coding full time for three weeks. I am proud to have made a game that is functional and also has clean design.

## Future Features
Along with adding in more pieces and instruments, I would like to look at the collision more, and add a feature that widens the collision target area if the player is not doing well, and to narrow it if the player is.

Once I have more pieces and instruments, I would like to add a "concert" or "tour" feature, where you can play more pieces in a row, perhaps with changing venues in between.
