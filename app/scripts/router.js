AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.students = new StudentsCollection()
    this.students.add(  user  )
  },

  routes: {
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

  // new AddPersonView();

  //   $('#add').click(function(){
  //     var newName = $('input#student-name').val();
  //     var newEmail = $('input#student-email').val();
  //     var newGithub = $('input#student-github').val();

  //     var newClassmate = new Student({name: newName, id: newName, email: newEmail, github: newGithub});
  //     collection = new StudentCollection();
  //     collection.add(newClassmate);
  //     newClassmate.save({}, {
  //       success: function(classmate) {
  //         new CompleteDirectoryView ({model: classmate});
  //         $('input').val('');
  //       }
  //     })
  //   })
  });

var router = new AppRouter()
Backbone.history.start()