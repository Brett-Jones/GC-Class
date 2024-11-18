
import { ObjectId } from "mongodb";

export interface Character {
    _id?: ObjectId | string;
    name: string;
    class: 'Barbarian' | 'Wizard' | 'Mage' | 'Rogue' | 'Paladin' | 'Sorcerer' | 'Assassin';
    alignment: 'Good' | 'Neutral' | 'Evil';
}









