# Fingerpose Rock Scissor Code

This is a modified version of Fingerpose (https://github.com/andypotato/fingerpose)
for making a PoC for "Rock Scissor Code", a gesture keyboard for refactoring code.

# Table of contents

- [How it works](#how-it-works)
- [Installation](#installation)
- [Credits](#credits)

## How it works

Gesture detection works in three steps:

 1. Detect the hands landmarks inside the video picture
 2. Estimating the direction and curl of each individual finger
 3. Comparing the result to a set of gesture descriptions

Step (1) is performed by MediaPipe Handpose, and Steps (2) and (3) are handled by this library.

### Configuration of Gestures and letter output

The following gestures with corresponding numerical codes are used:

| Code | Gesture                |
|------|------------------------|
| 0    | Rock ✊                 |
| 1    | Index Vertical Up ☝️   |
| 2    | Victory Vertical Up ✌️ |
| 5    | Paper Vertical Up ✋    |
| 6    | Pinky Vertical Up 🤙   |
| 7    | Horns Vertical Up 🤘   |
| 8    | Index Diagonal Up ☝️   |
| 9    | Victory Diagonal Up ✌️ |
| 12   | Paper Diagonal Up ✋    |
| 14   | Horns Diagonal Up  🤘  |

As this is still work in progress, the truth is always in the code:
[Letter encoding](./dist/index.html) (look at the constant `keyEncoding`)

The idea is to encode letters as progressions of two hand gestures (in the following G1 for "gesture 1" and G2 for "gesture 2).
For example "☝️✌️" = "A". (G1 = 1, G2 = 2 or (G1, G2) = (1,2))
To type the letter finish with "✊". The state "no gesture in memory" has (G1, G2) = (-1, -1).
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
