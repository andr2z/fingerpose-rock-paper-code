import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe index diagonal gesture ☝
const IndexDiagonalGesture = new GestureDescription('indexDiagonal');

// thumb:

// index:
IndexDiagonalGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
IndexDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
IndexDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// middle:
IndexDiagonalGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IndexDiagonalGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
IndexDiagonalGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
IndexDiagonalGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
IndexDiagonalGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
IndexDiagonalGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default IndexDiagonalGesture;
