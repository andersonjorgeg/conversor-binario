export const binarioParaDecimal = (binario: string): number => {

  if (!/^[01]+$/.test(binario)) {
    throw new Error('Entrada inválida. Use apenas 0s e 1s.');
  }

  let valorDecimal = 0;

  const binarioReverso = binario.split('').reverse().join('');

  for (let i = 0; i < binarioReverso.length; i++) {
    const digito = parseInt(binarioReverso[i], 10);

    valorDecimal += digito * Math.pow(2, i)
  }

  return valorDecimal
}
