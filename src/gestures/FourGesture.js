import { Finger, FingerCurl } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const FourGesture = new GestureDescription('four');

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    FourGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

FourGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

export default FourGesture;
