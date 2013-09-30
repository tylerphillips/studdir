AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new ItemsCollection()
    this.items.add(  user  )
  },

  routes: {
    "about"     : "about",
    "items"     : "showItems",
    "items/:id" : "showItem"
  },

  showItems: function(){
    $('.container').html('')
    this.items = new ItemsCollection()
    this.items.add(  user  )
  },

  showItem: function(id) {
    $('.container').html('')
    var itemToShow = this.items.get(id)
    new FullItemView({model: itemToShow})
  }

})

var router = new AppRouter()
Backbone.history.start()