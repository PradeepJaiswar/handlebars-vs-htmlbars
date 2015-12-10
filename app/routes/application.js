import Ember from 'ember';
export default Ember.Route.extend({  
    model() {
	        let links = [
            {
                title: "#home",
                linkTo: 'home',
            },
            {
                title: "#syntax",
                linkTo: 'syntax',
            },
            {
                title: "#style",
                linkTo: 'style',
            },
            {
                title: "#interpolation",
                linkTo: 'interpolation',
            },
            {
                title: "#inlineIfHelper",
                linkTo: 'helper',
            },
            {
                title: "#writeHelper",
                linkTo: 'helpercode',
            },
            {
                title: "#compiledHTML",
                linkTo: 'compiledhtml',
            },
            {
               title: "#performance",
                linkTo: 'performance',
            },
            {
               title: "#each",
               linkTo: 'each',
            },
            {
               title: "#server",
               linkTo: 'server',
            },
            {
               title: "#animation",
               linkTo: 'animation',
            },
            {
               title: "#updateHierarchy",
               linkTo: 'updateHierarchy',
            },
            {
               title: "#comapare",
               linkTo: 'comapare',
            },
            {
               title: "#glimmer",
               linkTo: 'glimmer',
            }


        ];
        return links;
    },

   setupController: function(controller, model) {
    controller.set('links', model);
    controller.set('hello', 'a');
  }

});