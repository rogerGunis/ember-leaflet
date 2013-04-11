App = Ember.Application.create({
    rootElement: "#application"
});

App.Router = Ember.Router.extend({
    location : Ember.Location.create({
        implementation : 'none'
    })
});

App.IndexRoute = Ember.Route.extend({
    setupController : function(controller) {
        controller.set('content', ['red', 'yellow', 'blue']);
    }
});

App.Supermarket = Ember.Object.extend({
    popup : function(){
        return this.get('name');
    }.property('name')
});

App.IndexController = Ember.ObjectController.extend({
    zoom : 14,
    center : Ember.Object.create({
        lat: 41.276081,
        lng: -8.376861
    }),
    supermarkets : Ember.A([
        App.Supermarket.create({
            name: 'A',
            lat: 41.276081,
            lng: -8.356861
        }),
        App.Supermarket.create({
            name: 'B',
            lat: 41.276081,
            lng: -8.366861
        }),
        App.Supermarket.create({
            name: 'C',
            lat: 41.276081,
            lng: -8.376861
        }),
        App.Supermarket.create({
            name: 'D',
            lat: 41.276081,
            lng: -8.386861
        })
    ]),
    remove: function(s){
        this.get('supermarkets').removeObject(s);
    },
    zoomIn: function(){
        this.incrementProperty('zoom');
    },
    zoomOut: function(){
        this.decrementProperty('zoom');
    },
    add: function(){
        this.get('supermarkets').pushObject(App.Supermarket.create({
            lat: this.get('center.lat'),
            lng: this.get('center.lng')
        }));  
    }
});