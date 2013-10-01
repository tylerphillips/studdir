Student = Backbone.Model.extend({
  initialize: function(){
  }
})

StudentsCollection = Backbone.Collection.extend({
  initialize: function(){

    this.on('add', function(student){
      new GridStudentView( {model: student} )
    })
  },

  model: Student
})


var user = [


  {
    firstName: 'Mason',
    lastName: 'Stewart',
    id: 'mason',
    email: 'masondesu@theironyard.com',
    github: 'masondesu',
    photo: 'https://2.gravatar.com/avatar/091bc95204caaf52b0d299bd9ac59540?d=https%3A%2F%2Fidenticons.github.com%2F4373bf90ad58c8e2f43bec7394a4aade.png&s=400'

  },

  {
    firstName: 'Eric',
    lastName: 'Dodds',
    id: 'dodds',
    email: 'ericdodds@theironyard.com',
    github: 'ericdodds',
    photo: 'https://1.gravatar.com/avatar/decdfffd46013c1d5940b689d0bb4cf1?d=https%3A%2F%2Fidenticons.github.com%2F28281e400bf79e37d4f21c9a91587157.png&s=400'

  },  

  {
    firstName: 'Tyler',
    lastName: 'Phillips',
    id: 'tyler',
    email: 'tylerfphillips@gmail.com',
    github: 'tylerphillips',
    photo: 'https://1.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=400'
  },

  {
    firstName: 'Daniel',
    lastName: 'Jeffords',
    id: 'dan',
    email: 'daniel.jeffords@gmail.com', 
    github: 'DJSrA',
    photo: 'http://image.shutterstock.com/display_pic_with_logo/332257/332257,1291233136,41/stock-photo-male-opera-singer-hold-skeleton-in-full-singing-mode-on-isolated-white-background-illustration-66352207.jpg'
  },


  {
    firstName: 'Caleb',
    lastName: 'Bradley',
    id: 'caleb-bradley',
    email: 'calebbradley30@yahoo.com',
    github: 'calebbradley',
    photo: 'https://0.gravatar.com/avatar/6e1409c2af985ad17320157ffd13b67c?d=https%3A%2F%2Fidenticons.github.com%2F5b515ef064cf164fa1bd61f03eb6d9fa.png&s=400'

  },

  {
    firstName: 'Andy',
    lastName: 'Flack',
    id: 'andy-flack',
    email: 'flack.ap@gmail.com',
    github: 'FlackAP',
    photo: 'https://1.gravatar.com/avatar/b05691109d08ca754b4d92984b53b23a?d=https%3A%2F%2Fidenticons.github.com%2F1f05bde9094f992be5264d254dc63842.png&s=400'

  },

  {
    firstName: 'Jake',
    lastName: 'Hendley',
    id: 'jake-hendley',
    email: 'jhendley25@gmail.com',
    github: 'jhendley25',
    photo: 'https://identicons.github.com/9745e271f4fb0ac83b37286d6ac03942.png'

  },

  {
    firstName: 'Keeron',
    lastName: 'Marc',
    id: 'keeron-marc',
    email: 'keeronmarc@gmail.com',
    github: 'keeronmarc',
    photo: 'https://0.gravatar.com/avatar/df54465365bd3da38d5bf73dd066ee67?d=https%3A%2F%2Fidenticons.github.com%2Fd6b54b90ab365523f9fe803ff79220a9.png&s=400'

  },

  {
    firstName: 'Alison',
    lastName: 'Miller',
    id: 'alison-miller',
    email: 'alisonmllr20@gmail.com',
    github: 'alisonelizabeth',
    photo: 'https://0.gravatar.com/avatar/813a803a55adc044dcfd8d2b2b199850?d=https%3A%2F%2Fidenticons.github.com%2F98bd02ede9382c4aaa7dbe198f57a3f3.png&s=400'

  },

  {
    firstName: 'Brandon',
    lastName: 'Miller',
    id: 'brandon-miller',
    email: 'bmiller@gmail.com',
    github: 'BrandonEMiller',
    photo: 'https://0.gravatar.com/avatar/fde9536a0b1ce7a6508f7343ea321074?d=https%3A%2F%2Fidenticons.github.com%2Fac01ab7bdce94d899fcb1828416cf54d.png&s=400'

  },

  {
    firstName: 'Ari',
    lastName: 'Picker',
    id: 'ari-picker',
    email: 'picker10024@yahoo.com',
    github: 'Pickra',
    photo: 'https://0.gravatar.com/avatar/79185f7299489ac6b12e5e53134d2b2d?d=https%3A%2F%2Fidenticons.github.com%2F75ebb9f3853403af8fd0e2aa59768174.png&s=400'

  },

  {
    firstName: 'Ryan',
    lastName: 'Ponce',
    id: 'ryan-ponce',
    email: 'ryanponce@gmail.com',
    github: 'ryanponce',
    photo: 'https://2.gravatar.com/avatar/88b0fab1e3c5ca7be992583b5901c78e?d=https%3A%2F%2Fidenticons.github.com%2Fa9d62848402941aedeb651541aa76930.png&s=420'

  },

  {
    firstName: 'Ryan',
    lastName: 'Poplin',
    id: 'ryan-poplin',
    email: 'mobileupstate@gmail.com',
    github: 'ryanpoplin',
    photo: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=400'

  },

  {
    firstName: 'Joe',
    lastName: 'Tamburro',
    id: 'joe-tamburro',
    email: 'joetamburro38@gmail.com',
    github: 'joetamburro',
    photo: 'https://2.gravatar.com/avatar/68832c35b4a14e91197ebc989d70694b?d=https%3A%2F%2Fidenticons.github.com%2Fab95055bbcfd4dcb4725994058c98e0c.png&s=400'

  },

  {
    firstName: 'Joe',
    lastName: 'Vanleeuwen',
    id: 'joe-vanleeuwen',
    email: 'jvnlwn@gmail.com',
    github: 'joe-vanleeuwen',
    photo: 'https://2.gravatar.com/avatar/9630334f86049b7af41ae84c5c52a166?d=https%3A%2F%2Fidenticons.github.com%2Fd8ffb2214e1db5dd70ebac58b9c6bdde.png&s=400'

  }
];

// $.post('http://0.0.0.0:3000/collections/coolguys', {firstName: 'Tyler Phillips',lastName: 'Phillips',id: 'tyler',email: 'fylerfphillips@gmail.com',github: 'tylerphillips', photo:'https://1.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=400'})
