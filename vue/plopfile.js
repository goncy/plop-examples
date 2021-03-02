module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'crea un componente de Vue',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'nombre del componente'
    }, {
      type: 'confirm',
      name: 'style',
      message: 'debe tener estilos?'
    }, {
      type: 'list',
      name: 'lang',
      message: 'en que lenguaje deben ser los estilos?',
      choices: ['css', 'scss'],
      when: answers => answers.style
    }, {
      type: 'confirm',
      name: 'script',
      message: 'debe tener script?'
    }],
    actions: [{
      type: 'add',
      path: `./{{name}}.vue`,
      templateFile: 'templates/component.vue.hbs'
    }]
  });
};