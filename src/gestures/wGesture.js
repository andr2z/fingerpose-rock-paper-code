import { Finger, FingerCurl  } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const wGesture = new GestureDescription('wGesture');

// thumb:
// wGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// wGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// wGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
wGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// wGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
// wGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// wGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
// wGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
// wGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
wGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// wGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// wGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
// wGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
// wGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
// wGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
wGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
// wGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
// wGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
// wGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
// wGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
// wGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
wGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
wGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default wGesture;
