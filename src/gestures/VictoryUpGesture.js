import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory up gesture ✌️
const victoryUpGesture = new GestureDescription('victoryUp');


// thumb:

// index:
victoryUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// middle:
victoryUpGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryUpGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);


// ring:
victoryUpGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
victoryUpGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky:
victoryUpGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
victoryUpGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default victoryUpGesture;
