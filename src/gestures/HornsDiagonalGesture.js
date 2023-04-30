import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe horns diagonal gesture 🤘
const HornsDiagonalGesture = new GestureDescription('hornsDiagonal');

// thumb:

// index:
HornsDiagonalGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// HornsDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
// HornsDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
HornsDiagonalGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
HornsDiagonalGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
HornsDiagonalGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
HornsDiagonalGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
HornsDiagonalGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
HornsDiagonalGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
HornsDiagonalGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default HornsDiagonalGesture;
