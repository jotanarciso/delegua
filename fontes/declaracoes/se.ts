import { InterpretadorInterface } from '../interfaces';
import { Declaracao } from './declaracao';

export class Se extends Declaracao {
    condicao: any;
    caminhoEntao: any;
    caminhosSeSenao: any;
    caminhoSenao: any;

    constructor(
        condicao: any,
        caminhoEntao: any,
        caminhosSeSenao: any,
        caminhoSenao: any
    ) {
        super(condicao.linha, condicao.hashArquivo);
        this.condicao = condicao;
        this.caminhoEntao = caminhoEntao;
        this.caminhosSeSenao = caminhosSeSenao;
        this.caminhoSenao = caminhoSenao;
    }

    async aceitar(visitante: InterpretadorInterface): Promise<any> {
        return await visitante.visitarExpressaoSe(this);
    }
}
