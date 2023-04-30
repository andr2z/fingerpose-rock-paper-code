import {Finger, FingerCurl, FingerDirection} from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const PaperDiagonalGesture = new GestureDescription('paperDiagonal');

// no finger should be curled
for(let finger of Finger.all) {
    PaperDiagonalGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

PaperDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
PaperDiagonalGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default PaperDiagonalGesture;
