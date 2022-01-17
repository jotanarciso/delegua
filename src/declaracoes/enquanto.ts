import { Stmt } from "./stmt";


export class Enquanto extends Stmt {
    condicao: any;
    corpo: any;

    constructor(condicao: any, corpo: any) {
        super();
        this.condicao = condicao;
        this.corpo = corpo;
    }

    aceitar(visitor: any): any {
        return visitor.visitarExpressaoEnquanto(this);
    }
}
