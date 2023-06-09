import { ErrorMessages } from "./errorMessages.enum"


export class Matemagica {
    private a: Number
    private b: Number

    public constructor(){}

    private somatoria(): Number | String {
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.SUM_OPERATOR_ERROR
        }
        return Number(this.a) + Number(this.b)
    }

    private multiplicacao(): Number | String {
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.MULT_OPERATOR_ERROR
        }
        return Number(this.a) * Number(this.b)
    }

    private divisao(): Number | String {
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.MULT_OPERATOR_ERROR
        }
        return Number(this.a) / Number(this.b)
    }

    private subtracao(): Number | String {
        if(typeof this.getA() !== 'number' || typeof this.getB() !== 'number') {
            return ErrorMessages.MULT_OPERATOR_ERROR
        }
        return Number(this.a) - Number(this.b)
    }

    public getSomatoria() {
        return this.somatoria()
    }

    public getMultiplicacao() {
        return this.multiplicacao()
    }

    public getDivisao() {
        return this.divisao()
    }

    public getSubtracao() {
        return this.subtracao()
    }

    public setA(a: Number): void  {
        this.a = a
    }
    
    public setB(b: Number): void {
        this.b = b
    }

    public getA() {
        return this.a
    }

    public getB() {
        return this.b
    }
}
