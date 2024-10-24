"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guitar_1 = require("./Guitar");
test('Guitar plays sound with teh default strings', () => {
    const guitar1 = new Guitar_1.Guitar();
    expect(guitar1.strings).toEqual(['E', 'A', 'D', 'G', 'B', 'E']);
    expect(guitar1.play()).toBe('Playing chords on strings: E, A, D, G, B, E,');
});
test('Guitar plays sound with a different tuning', () => {
    const customTuning = ['D', 'A', 'D', 'G', 'B', 'E'];
    const guitar2 = new Guitar_1.Guitar(customTuning);
    expect(guitar2.strings).toEqual(customTuning);
    expect(guitar2.play()).toBe('Playing chords on strings: D, A, D, G, B, E,');
});
