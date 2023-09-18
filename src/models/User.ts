export class User {

    public readonly id: Number;
    public name: string;
    public email: string;
    public password: string;
    constructor(props: Omit<User,'id'>,id?: number) {
<<<<<<< HEAD
        Object.assign(this,props);
=======
        
>>>>>>> c9ba9bff18341c425cf8f864b119d3ade3348e01
    }
}