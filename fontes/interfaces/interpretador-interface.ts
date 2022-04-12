import { Ambiente } from "../ambiente";
import { Construto } from "../construtos";

export interface InterpretadorInterface {
    diretorioBase: any;
    global: Ambiente;
    ambiente: Ambiente;
    locais: Map<Construto, number>;

    visitarExpressaoLiteral(expressao: any): any;
    avaliar(expressao: any): any;
    visitarExpressaoAgrupamento(expressao: any): any;
    eVerdadeiro(objeto: any): boolean;
    verificarOperandoNumero(operador: any, operand: any): void;
    visitarExpressaoUnaria(expressao: any): any;
    eIgual(esquerda: any, direita: any): boolean;
    verificarOperandosNumeros(operador: any, direita: any, esquerda: any): void;
    visitarExpressaoBinaria(expressao: any): any;
    visitarExpressaoDeChamada(expressao: any): any;
    visitarExpressaoDeAtribuicao(expressao: any): any;
    procurarVariavel(nome: any, expressao: any): any;
    visitarExpressaoDeVariavel(expressao: any): any;
    visitarDeclaracaoDeExpressao(declaracao: any): any;
    visitarExpressaoLogica(expressao: any): any;
    visitarExpressaoSe(declaracao: any): any;
    visitarExpressaoPara(declaracao: any): any;
    visitarExpressaoFazer(declaracao: any): any;
    visitarExpressaoEscolha(declaracao: any): any;
    visitarExpressaoTente(declaracao: any): any;
    visitarExpressaoEnquanto(declaracao: any): any;
    visitarExpressaoImportar(declaracao: any): any;
    visitarExpressaoEscreva(declaracao: any): any;
    executarBloco(declaracoes: any, ambiente: any): void;
    visitarExpressaoBloco(declaracao: any): null;
    visitarExpressaoVar(declaracao: any): null;
    visitarExpressaoContinua(declaracao?: any): void;
    visitarExpressaoSustar(declaracao?: any): void;
    visitarExpressaoRetornar(declaracao: any): void;
    visitarExpressaoDeleguaFuncao(expressao: any): any;
    visitarExpressaoAtribuicaoSobrescrita(expressao: any): void;
    visitarExpressaoAcessoIndiceVariavel(expressao: any): any;
    visitarExpressaoDefinir(expressao: any): any;
    visitarExpressaoFuncao(declaracao: any): any;
    visitarExpressaoClasse(declaracao: any): any;
    visitarExpressaoAcessoMetodo(expressao: any): any;
    visitarExpressaoIsto(expressao: any): any;
    visitarExpressaoDicionario(expressao: any): any;
    visitarExpressaoVetor(expressao: any): any;
    visitarExpressaoSuper(expressao: any): any;
    paraTexto(objeto: any): any;
    executar(declaracao: any, mostrarResultado: boolean): void;
    interpretar(declaracoes: any, locais: Map<Construto, number>): void;
}