GridStudentView = Backbone.View.extend({
  
  template: _.template( $('#grid-template').text() ),

  // tagName: 'a',

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

  events: {
    "click #edit" : "edit",
    "click #delete" : "destroy",
    "click #save" : "save"
  },

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.append( this.template({student: this.model }) )
  },  

  edit: function() {
    $('.student-full').html('');
    var editTemplate = _.template($("#edit-template").text());
    this.$el.append(editTemplate({student: this.model}) );
  },

  destroy: function() {
    this.remove();
  },

  // save: function() {
  //   var editedName = this.$el.find('input#name').val();
  //   var editedEmail = this.$el.find('input#email').val();
  //   var editedGithub = this.$el.find('input#github').val();

  //   this.model.set('name', editedName);
  //   this.model.set('email', editedEmail);
  //   this.model.set('github', editedGithub);

  //   this.render();
  // }

});

// EditStudentView = Backbone.View.extend({
  
//   template: _.template( $('#edit-template').text() ),

//   className: 'edit-full',

//   events: {
//     "click #edit" : "edit",
//     "click #delete" : "destroy",
//     "click #save" : "save"
//   },

//   initialize: function(){
//     $('.container').append(this.el)
//     this.render()
//   },

//   render: function(){
//     this.$el.append( this.template({student: this.model }) )
//   },  

//   edit: function() {
//     $('.person-view').html('');
//     var editTemplate = _.template($("#edit-template").text());
//     this.$el.append(editTemplate({student: this.model}) );
//   },

//   destroy: function() {
//     this.remove();
//   },

//   save: function() {
//     var editedName = this.$el.find('input#name').val();
//     var editedEmail = this.$el.find('input#email').val();
//     var editedGithub = this.$el.find('input#github').val();

//     this.model.set('name', editedName);
//     this.model.set('email', editedEmail);
//     this.model.set('github', editedGithub);

//     this.render();
//   }

// })

// EditStudentView = Backbone.View.extend({
  
//   template: _.template( $('#edit-template').text() ),

//   className: 'student-edit',

//   events: {
//     "click #edit" : "edit",
//     "click #delete" : "destroy",
//     "click #save" : "save"
//   },

//   initialize: function(){
//     $('.container').append(this.el)
//     $(this.el).text(this.model.get("firstname"))
//     this.render()

//   },

//   render: function(){
//     this.$el.append( this.template({student: this.model }) )
//   },  

//   edit: function() {
//     $('.person-view').html('');
//     var editTemplate = _.template($("#edit-template").text());
//     this.$el.append(editTemplate({student: this.model}) );
//   },
// })

// make a PersonView constructor
// PersonView = Backbone.View.extend({
//   // Person.View is individual person and properties

//   // class of person view
//   className: "newman",

//   // events object
//   events: {
//     "click .delete": "destroy",
//     "click .edit": "edit"
//   },

//   initialize: function(){
//     console.log("I was born!!")
//     console.log("this is ", this)

//     // $(this.el).text("person view")
//     $(this.el).text(this.model.get("name"))

//     $(".hero-unit").append(this.el)
//   },

//   //destroy and edit are simply function names
//   // destroy: function(){

//   // },

//   edit: function(){
//     console.log("you clicked me")
//     this.remove() //deletes the view, all click, but not model
//     // $(this.el).html("<input />")  //takes out name and puts input when clicked
//     // $(this.el).html('<input value="'+ this.model.get('name') + '"/>') //put Katie Stewart into input
// }
// })