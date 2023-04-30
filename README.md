# Fingerpose Rock Scissor Code

This is a modified version of Fingerpose (https://github.com/andypotato/fingerpose)
for making a PoC for "Rock Scissor Code", a gesture keyboard for refactoring code.

# Table of contents

- [How it works](#how-it-works)
- [Installation](#installation)
- [Credits](#credits)

## How it works

Gesture detection works in three steps:

 1. Detect the hands' landmarks inside the video picture
 2. Estimating the direction and curl of each individual finger
 3. Comparing the result to a set of gesture descriptions

Step (1) is performed by MediaPipe Handpose, and Steps (2) and (3) are handled by this library.

### Configuration of Gestures and letter output

The following gestures with corresponding numerical codes are used:
0: Rock ✊
1: Index Up ☝️
2: Victory ✌️
5: Paper ✋
6: I 🤙
7: Horns Up 🤘
8: Diagonal Up Index ☝️
9: Diagonal Up ✌️
12: Diagonal Up Paper ✋
14: Diagonal Up Horns

As this is still work in progress, the truth is always in the code:
[Letter encoding](./dist/index.html) (look at the constant `keyEncoding`)

The idea is to encode letters as progressions of 2 hand gestures.
For example "☝️✌️" = "A".
To type the letter finish with "✊".
If the first gesture was wrong, make the gesture "✊" to erase the "short term memory" of the program and start again with the gesture you wanted to make initially. 

For debugging, run the code in a terminal and open [Letter encoding](./dist/index.html) in a browser.
The letters are displayed in the browser developer console, after "typing".

## Installation

You need
- Npm 8.1.0
- Node.js 16.13.0
installed.

To run the code in the dev-profile, run
```
npm run dev
```

## Credits

Copyright owner of Fingerpose is Andreas Schallwig, see https://github.com/andypotato/fingerpose/blob/master/LICENSE
