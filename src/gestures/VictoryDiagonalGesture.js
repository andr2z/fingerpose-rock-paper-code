import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory up gesture ✌️
const victoryDiagonalGesture = new GestureDescription('victoryDiagonal');


// thumb:

// index:
victoryDiagonalGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
victoryDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
victoryDiagonalGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryDiagonalGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
victoryDiagonalGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);


// ring:
victoryDiagonalGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
victoryDiagonalGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
victoryDiagonalGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
victoryDiagonalGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default victoryDiagonalGesture;
