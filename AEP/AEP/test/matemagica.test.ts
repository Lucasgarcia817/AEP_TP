import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../src/atividades/TDD/Matemagica'
import { ErrorMessages } from '../src/atividades/TDD/errorMessages.enum'

describe('Sum', () => {
    test('Deve somar 2 números', () => {
        const matemagica = new Matemagica()
        matemagica.setA(1)
        matemagica.setB(2)
        
        expect(matemagica.getSomatoria()).toBe(3)
    })

    test('Deve retornar um erro ao tentar realizar uma soma passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setA(1)
        // @ts-ignore
        matemagica.setB('oi')
        expect(matemagica.getSomatoria()).toBe(ErrorMessages.SUM_OPERATOR_ERROR)
    })

})

describe('Div', () => {
    test('Divide 2 números', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        matemagica.setB(2)

        expect(matemagica.getDivisao()).toBe(5)
    })

    test('Divide um número por uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        // @ts-ignore
        matemagica.setB('c')

        expect(matemagica.getDivisao()).toThrow('não é possível dividir por uma String')
    })
        

    test('retorna um erro ao dividir por zero', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        matemagica.setB(0)

        expect(matemagica.getDivisao()).toBe(ErrorMessages.DIV_OPERATOR_ERROR);
    })
})

describe('Sub', () => {
    test('subtrai 2 números', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        matemagica.setB(5)

        expect(matemagica.getSubtracao()).toBe(5)
    })

    test('subtrai um número de uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        //@ts-ignore
        matemagica.setB('d')

        expect(matemagica.getSubtracao()).toBe(ErrorMessages.SUB_OPERATOR_ERROR)
    })
})

describe('Mult', () => {
    test('multiplica 2 números', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        matemagica.setB(5)

        expect(matemagica.getMultiplicacao()).toBe(50)
    })

    test('multiplica um número por uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setA(10)
        //@ts-ignore
        matemagica.setB('d')

        expect(matemagica.getMultiplicacao()).toBe(ErrorMessages.MULT_OPERATOR_ERROR)
    })
})