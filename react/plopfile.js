module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'crea un componente de React',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'nombre del componente'
    }, {
      type: 'confirm',
      name: 'container',
      message: 'debe tener un container?',
    }],
    actions: function (data) {
      const actions = [];

      if (data.container) {
        actions.push({
          type: 'add',
          path: './{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'templates/component.js.hbs'
        }, {
          type: 'add',
          path: './{{pascalCase name}}/{{pascalCase name}}Container.js',
          templateFile: 'templates/container.js.hbs'
        }, {
          type: 'add',
          path: './{{pascalCase name}}/index.js',
          templateFile: 'templates/index.js.hbs'
        });
      } else {
        actions.push({
          type: 'add',
          path: './{{pascalCase name}}.js',
          templateFile: 'templates/component.js.hbs'
        })
      }

      return actions;
    }
  });
};