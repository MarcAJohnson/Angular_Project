export class Ingredient {
    /* Not necessary with public accessor in constructor parameters
    public name: string;
    public amount: number;  */

    constructor(public name: string, public amount: number) {
        /* Not necessary with public accessor in constructor parameters
        this.name = name;
        this.amount = amount;   */
    }
}