import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe horns gesture 🤘
const HornsUpGesture = new GestureDescription('hornsUp');

// thumb:

// index:
HornsUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
// HornsUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle:
HornsUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
HornsUpGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
HornsUpGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
HornsUpGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
HornsUpGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
HornsUpGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default HornsUpGesture;
