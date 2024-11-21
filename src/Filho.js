class Filho extends Pai {
    #escola;


    constructor(nomeDoPai, nomeDaMae, nomeDoAvo, nomeDaAvo, sexo, escola) {
        super(nomeDoPai, nomeDaMae, nomeDoAvo, nomeDaAvo, sexo);
        this.#escola = escola;
        this._nomeDoPai = nomeDoPai;
        this._nomeDaMae = nomeDaMae;
        this._nomeDoAvo = nomeDoAvo;
        this._nomeDaAvo = nomeDaAvo;
        this._sexo = sexo;
        this._escola = escola;
    }


    get nomeDoPai() {
        return this._nomeDoPai;
    }

    set nomeDoPai(value) {
        this._nomeDoPai = value;
    }

    get nomeDaMae() {
        return this._nomeDaMae;
    }

    set nomeDaMae(value) {
        this._nomeDaMae = value;
    }

    get nomeDoAvo() {
        return this._nomeDoAvo;
    }

    set nomeDoAvo(value) {
        this._nomeDoAvo = value;
    }

    get nomeDaAvo() {
        return this._nomeDaAvo;
    }

    set nomeDaAvo(value) {
        this._nomeDaAvo = value;
    }

    get sexo() {
        return this._sexo;
    }

    set sexo(value) {
        this._sexo = value;
    }

    get escola() {
        return this._escola;
    }

    set escola(value) {
        this._escola = value;
    }
}