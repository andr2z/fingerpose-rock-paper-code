import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe pinky up gesture ☝
const PinkyUpGesture = new GestureDescription('pinkyUp');

// thumb:

// index:
PinkyUpGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
PinkyUpGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

// middle:
PinkyUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
PinkyUpGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
PinkyUpGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
PinkyUpGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
PinkyUpGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
PinkyUpGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default PinkyUpGesture;
