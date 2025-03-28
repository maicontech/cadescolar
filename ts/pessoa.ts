namespace escola{
    export abstract class Pessoa{
        public _nome:string;
        public _anoNasc:number;
        public _cpf: number;
        public _endereco: string;
        public _tel: string;

        constructor(nome:string, anoNasc:number, cpf:number, endereco:string, tel:string){
            this._nome = nome;
            this._anoNasc = anoNasc;
            this._cpf = cpf;
            this._endereco = endereco;
            this._tel = tel;
        }

        get nome(){
            return this._nome;
        }

        set nome(nome:string){
            this._nome=nome;
        }

        get anoNasc(){
            return this.anoNasc;
        }

        set anoNasc(anoNasc:number){
            this._anoNasc=anoNasc;
        }

        get cpf(){
            return this._cpf;
        }

        set cpf(cpf:number){
            this._cpf=cpf;
        }

        get endereco(){
            return this._endereco;
        }

        set endereco(endereco:string){
            this._endereco=endereco;
        }

        get tel(){
            return this._tel;
        }

        set tel(tel:string){
            this.tel=tel;
        }

        public calcularIdade(anoAtual:number){
            return anoAtual - this._anoNasc;
        }
}
}