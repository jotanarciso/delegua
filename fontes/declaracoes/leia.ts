import { Construto } from '../construtos';
import { InterpretadorInterface } from '../interfaces';
import { Declaracao } from './declaracao';

/**
 * Declaração que pede a leitura de uma informação da entrada
 * configurada no início da aplicação.
 */
export class Leia extends Declaracao {
    argumentos: Construto[];

    constructor(linha: number, hashArquivo: number, argumentos: Construto[]) {
        super(linha, hashArquivo);
        this.argumentos = argumentos;
    }

    async aceitar(visitante: InterpretadorInterface): Promise<any> {
        return await visitante.visitarExpressaoLeia(this);
    }
}
