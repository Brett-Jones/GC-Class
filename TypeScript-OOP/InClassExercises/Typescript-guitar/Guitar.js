"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
class Guitar {
    //"?" allows to use default value after the "||" as a backup value
    constructor(strings) {
        this.strings = strings || ['E', 'A', 'D', 'G', 'B', 'E'];
    }
    // .join will take an array and spit it out as a string with "," between each element
    play() {
        return `Playing chords on strings: ${this.strings.join(', ')}`;
    }
}
exports.Guitar = Guitar;
// const guitar = {
//     strings: [d,d,d,d,d,d],
//     play() {
//         return
//     }
// }
