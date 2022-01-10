import { Expr } from "./expr";


export class Logical extends Expr {
    esquerda: any;
    operador: any;
    direita: any;

    constructor(esquerda: any, operador: any, direita: any) {
        super();
        this.esquerda = esquerda;
        this.operador = operador;
        this.direita = direita;
    }

    aceitar(visitor: any) {
        return visitor.visitLogicalExpr(this);
    }
}