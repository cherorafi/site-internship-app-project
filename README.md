# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Syeda Nahar

Time spent: 4-5 hours spent in total

Link to project: https://glitch.com/edit/#!/bejewled-tough-lan

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [X] Adds difficulty buttons which make the game longer and speeds up the game

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Part 1](https://media.giphy.com/media/CUHSHjuyX2pOfwR1Pa/giphy.gif)
![Part 2](https://media.giphy.com/media/guMraA4BFE35QkycQi/giphy.gif)
![Part 3](https://media.giphy.com/media/JQxHc7YTk0FxJUXDcK/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used W3schools to help me understand loops in JS for my new secret patterns and also other CSS components. 
I also used fullstack to understand a couple errors as to why I was having them.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I faced when creating this submission was fully trying to understand the code. When adding new things to the code 
already given to me, I needed to understand which feature does what and how it all really connects. When trying to add in new 
features it is really easy to break the existing ones since all the files rely on each other. This was the case for me when 
I was trying to add in a new pattern, as well as create unique patterns for each game. I had a hard time figuring out how to change 
the pattern each game and I decided to make a function that creates a new pattern, and I called that function inside the function 
that runs when the start button is pressed. I also decided to make new buttons which would change the difficulty of the game, 
and the length of the secret pattern would be based on the difficulty chosen by the user. So, including those in was a bit difficult 
at first but the experience had a learning curve. One problem I could not resolve was the sound of the tones. After I was done 
with the initial program, I realized the sound was not working but after researching about it I learned that the Google Chrome 
browser restricts sound from playing until there is user interaction, however, it works on other browsers. I could not fix this 
because I mostly copied the audio code from the code provided and did not have experience with it. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Since this was more of a front-end developing challenge, some questions I have are about back-end development. One idea I wanted to 
explore was how could we keep the memory game going until the user messes up, then storing the high-scores for any person 
who has played?

Another question I had is how do we create different pages using the same website? Such as going from one page to another using buttons. 

One thing I realized is, it is very easy for the user to open inspect element and using console.log() to find the pattern themselves. 
How do we keep this data away so the user cannot search for it? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a couple more hours to do this project, I would mostly work on understanding the audio. I have a good sense of the 
other aspects covered in this project but the audio tones were completely foreign to me. I would try to fix the Google Chrome 
error I had which would not start the audio until there was user interaction starting it. I would try reading more about it 
and also creating new sounds by messing around with the frequencies. After learning more about the audio, I would try to create more 
buttons that appear through difficulty settings, for example if the setting is hard, there could be 12 buttons instead of just 4 
or if the setting is medium there could be 8 buttons. I didn’t explore this path because I didn’t understand how to add new tones. 



## License

    Copyright [Syeda Nahar]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
