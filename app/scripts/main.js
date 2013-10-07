// function (){
//   $.post('http://0.0.0.0:3000/collections/iystudents', {
//   firstName: 'Tyler',
//   lastName: 'Phillips',
//   id: 'tyler',
//   email: 'tylerfphillips@gmail.com',
//   github: 'tylerphillips', 
//   photo:'https://1.gravatar.com/avatar/f036b006d9a9ef19dc02a75a28defb53?d=https%3A%2F%2Fidenticons.github.com%2F6bbbe379ea34bb31d3e52ed80a1bc43d.png&s=400'
// });

// $.ajax({type:'PUT', 
//         url:'http://0.0.0.0:3000/collections/coolguys/5249faa17fdfd50709000025', 
//         data: {firstName: 'Logan'}})

(function() {

  // Create input element for testing
  var inputs = document.createElement('input');
  
  // Create the supports object
  var supports = {};
  
  supports.autofocus   = 'autofocus' in inputs;
  supports.required    = 'required' in inputs;
  supports.placeholder = 'placeholder' in inputs;

  // Fallback for autofocus attribute
  if(!supports.autofocus) {
    
  }
  
  // Fallback for required attribute
  if(!supports.required) {
    
  }

  // Fallback for placeholder attribute
  if(!supports.placeholder) {
    
  }
  
  // Change text inside send button on submit
  var send = document.getElementById('contact-submit');
  if(send) {
    send.onclick = function () {
      this.innerHTML = '...Sending';
    }
  }

})();