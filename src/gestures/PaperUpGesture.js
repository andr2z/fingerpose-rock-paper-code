import {Finger, FingerCurl, FingerDirection} from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const PaperUpGesture = new GestureDescription('paper');

// no finger should be curled
for(let finger of Finger.all) {
    PaperUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

PaperUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default PaperUpGesture;
