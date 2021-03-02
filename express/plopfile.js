module.exports = function (plop) {
  plop.setGenerator('route', {
    description: 'crea una ruta de Express',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'nombre de la ruta'
    }, {
      type: 'checkbox',
      name: 'methods',
      message: 'que metodos debe contener?',
      choices: ['get', 'patch', 'post', 'delete'],
    }],
    actions: function (data) {
      const actions = [{
        type: 'add',
        path: `./{{name}}/index.js`,
        templateFile: 'templates/route.js.hbs'
      }];

      data.methods.forEach(method => {
        actions.push({
          type: 'add',
          path: `./{{name}}/${method}.js`,
          templateFile: 'templates/method.js.hbs'
        });
      })

      return actions;
    }
  });
};