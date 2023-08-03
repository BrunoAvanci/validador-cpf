/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test('validar CPF', function() {
    var resultado = validarCPF('22159758060');

    expect(resultado).toBe(true);
})

test('invalidar CPF', function() {
    var resultado = validarCPF('12312312312');

    expect(resultado).toBe(false);
})