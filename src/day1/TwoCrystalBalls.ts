export default function two_crystal_balls(breaks: boolean[]): number {

    // sqrt of n - breaks.length 
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
//  find where it breaks 
    for(; i < breaks.length; i += jmpAmount) {
        if(breaks[i]) {
            break;
        }
    }
// jump back sqrt of n 
    i -= jmpAmount;

// linerally walk sqrt of n until we have a break - index which it breaks 
    for(let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if(breaks[i]) {
            return i;
        }
    }
    return -1;
}