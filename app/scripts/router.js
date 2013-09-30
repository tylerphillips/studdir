AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.students = new StudentsCollection()
    this.students.add(  user  )
  },

  routes: {
    "about"     : "about",
    "students"     : "showStudents",
    "students/:id" : "showStudent"
  },

  showStudents: function(){
    $('.container').html('')
    this.students = new StudentsCollection()
    this.students.add(  user  )
  },

  showStudent: function(id) {
    $('.container').html('')
    var studentToShow = this.students.get(id)
    new FullStudentView({model: studentToShow})
  }

})

var router = new AppRouter()
Backbone.history.start()