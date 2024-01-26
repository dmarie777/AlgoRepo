export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i<breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;
    for (let j=0; j<jmpAmount && i<breaks.length; ++j, ++i) {
        if(breaks[i]) {
            return i;
        }
    }
    return -1;

//  Solution using do while___///////////////////////////
    // const jump = Math.floor(Math.sqrt(breaks.length));
    // let hi=0;
    // do {
    //     if (breaks[hi]) {
    //         hi -= 1;
    //         if (!breaks[hi]) {
    //             return hi+1;
    //         }
    //     } else {
    //         hi +=  jump;
    //     }
    // } while(hi < breaks.length)
    // return -1;
}