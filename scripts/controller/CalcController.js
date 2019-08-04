class CalcController {
    constructor() {

        //this faz referencia ao objeto que estou instanciando lá em calculadora
        this._displayCalc = "0"; //forma de convensão de dizer que é um atributo privado, apenas a classe tem acesso
        this._dataAtual; 
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor; //set não tem return, atribuição do valor
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(data) {
        this._dataAtual = data;
    }
}