GridStudentView = Backbone.View.extend({
  
  template: _.template( $('#grid-template').text() ),

  tagName: 'a',

  className: 'student-grid-unit',

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.attr('href', "#/students/"+ this.model.get('id') )
    this.$el.append( this.template({student: this.model }) )
  }
})

FullStudentView = Backbone.View.extend({
  
  template: _.template( $('#full-template').text() ),

  className: 'student-full',

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.append( this.template({student: this.model }) )
  }  
})

// make a PersonView constructor
PersonView = Backbone.View.extend({
  // Person.View is individual person and properties

  // class of person view
  className: "newman",

  // events object
  events: {
    "click .delete": "destroy",
    "click .edit": "edit"
  },

  initialize: function(){
    console.log("I was born!!")
    console.log("this is ", this)

    // $(this.el).text("person view")
    $(this.el).text(this.model.get("name"))

    $(".hero-unit").append(this.el)
  },

  //destroy and edit are simply function names
  // destroy: function(){

  // },

  edit: function(){
    console.log("you clicked me")
    this.remove() //deletes the view, all click, but not model
    // $(this.el).html("<input />")  //takes out name and puts input when clicked
    // $(this.el).html('<input value="'+ this.model.get('name') + '"/>') //put Katie Stewart into input

  }

})