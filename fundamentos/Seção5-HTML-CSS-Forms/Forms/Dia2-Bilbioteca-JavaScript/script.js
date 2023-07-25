const { default: JustValidate } = require("just-validate");

const validate = new JustValidate(
  '#main-form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red'
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      backgroundColor: 'red',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

validate 
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'Insira seu nome',
    },
    {
      rule:'maxLength',
      value: 40,
      errorMessage: 'O tamanho máximo é 40 caracteres',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O tamanho mínimo é 10 caracteres',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Insira seu email!',
    },
    {
      rule: 'email',
      errorMessage: 'Insira um email válido!'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O valor máximo é de 50 caracteres',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O valor mínimo é de 10 caracteres',
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
      errorMessage: 'Digite sua mensagem'
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O valor máximo é de 500 caracteres!',
    }
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Insira a data de sua viagem!',
    }
  ])