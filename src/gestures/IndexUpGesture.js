import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe index up gesture ☝
const IndexUpGesture = new GestureDescription('indexUp');

// thumb:

// index:
IndexUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
IndexUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle:
IndexUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IndexUpGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

// ring:
IndexUpGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
IndexUpGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
IndexUpGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
IndexUpGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default IndexUpGesture;
