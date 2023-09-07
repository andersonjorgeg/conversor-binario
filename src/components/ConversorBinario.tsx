import React, { useState } from 'react';
import InputField from './InputField';
import { binarioParaDecimal } from '@/utils/binarioParaDecimal';

const ConversorBinario = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [valorDecimal, setValorDecimal] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (valorBinario: string) => {
    setInputValue(valorBinario);

    if (/^[01]+$/.test(valorBinario)) {
      try {
        const decimal = binarioParaDecimal(valorBinario);
        setValorDecimal(decimal);
      } catch (error) {
        setValorDecimal(null);
        setErrorMessage('Entrada inválida. Use apenas 0s e 1s.');
      }
    } else {
      setValorDecimal(null);
      setErrorMessage('Entrada inválida. Use apenas 0s e 1s.');
    }
  }

  const handleConvertClick = () => {
    setErrorMessage('');
    handleChange(inputValue);
    setInputValue('');
  }

  return (
    <section className="grid grid-cols-3 bg-cor1 max-w-lg p-6 rounded-md space-y-4 mx-2">
      <h1 className="max-w-sm text-center font-bold text-3xl col-span-3">Conversor Binário para Decimal</h1>
      <InputField
        label='Digite o Binário (até 8 dígitos):'
        htmlFor='entradaBinaria'
        maxlength={8}
        value={inputValue}
        onChange={setInputValue}
      />
      <button className='py-2 px-3 bg-cor3 text-cor2 col-start-2 rounded-md hover:bg-cor4 font-medium'
        onClick={handleConvertClick}
      >
        Converter
      </button>
      <p className={`col-span-3 text-center text-lg font-semibold ${errorMessage ? 'text-red-400' : 'text-cor2'}`}>{errorMessage ? errorMessage : 'Equivalente Decimal:'}</p>
      <p className='col-span-3 text-center text-lg font-semibold text-cor2'>{valorDecimal !== null ? valorDecimal : '---'}</p>
    </section>
  )
}

export default ConversorBinario;
