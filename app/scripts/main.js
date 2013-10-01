function (){
  $.post('http://0.0.0.0:3000/collections/iystudents', {
  firstName: 'Tyler',
  lastName: 'Phillips',
  id: 'tyler',
  email: 'tylerfphillips@gmail.com',
  github: 'tylerphillips', 
  photo:'https://1.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=400'
});

// $.ajax({type:'PUT', 
//         url:'http://0.0.0.0:3000/collections/coolguys/5249faa17fdfd50709000025', 
//         data: {firstName: 'Logan'}})