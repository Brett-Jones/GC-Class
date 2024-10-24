
import { Instrument } from "../Instrument"

export class Guitar implements Instrument {
    strings: string[];

//"?" allows to use default value after the "||" as a backup value

    constructor(strings?: string[]){
        this.strings = strings || ['E', 'A', 'D', 'G', 'B', 'E']
    }
// .join will take an array and spit it out as a string with "," between each element
    play(): string {
        return `Playing chords on strings: ${this.strings.join(', ')}`;
    }
}


// const guitar = {
//     strings: [d,d,d,d,d,d],
//     play() {
//         return
//     }
// }



