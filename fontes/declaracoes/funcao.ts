import { InterpretadorInterface, SimboloInterface } from '../interfaces';
import { Declaracao } from './declaracao';

export class FuncaoDeclaracao extends Declaracao {
    simbolo: SimboloInterface;
    funcao: any;

    constructor(simbolo: SimboloInterface, funcao: any) {
        super(Number(simbolo.linha), simbolo.hashArquivo);
        this.simbolo = simbolo;
        this.funcao = funcao;
    }

    async aceitar(visitante: InterpretadorInterface): Promise<any> {
        return Promise.resolve(visitante.visitarExpressaoFuncao(this));
    }
}
