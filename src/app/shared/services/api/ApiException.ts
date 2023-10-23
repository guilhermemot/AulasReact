export class ApiException extends Error{
    public readonly message: string = '';
    constructor(messege: string){
        super();

        this.message = messege;

    }
}
