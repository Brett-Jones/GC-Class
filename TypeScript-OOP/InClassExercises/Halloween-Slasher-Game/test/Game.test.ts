
import { Slasher, Survivor } from "../src/characters";
import { Knife } from "../src/weapons";

describe('Slasher Class', () =>{
    it('should reduce health of survivor when attacked', () => {
        const knife = new Knife();
        const michael = new Slasher("Michael", 100, knife);
        const survivor = new Survivor('Jamie', 80, knife);

        michael.attack(survivor);
        expect(survivor.health).toBe(60);
    })
})







