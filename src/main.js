(function () {

  let url = 'http://json-data.herokuapp.com/forms';

  // Fetch data and do something with it
  let promise = $.getJSON(url);
  promise.then( function (response) {
    doSomething(response);
  });

  // Templates
  let genericInput = function (obj) {
    let template = `
    <div class="text-input form-elem"> 
      <input type="${ obj.type }" placeholder="${ obj.label }" id="${ obj.id }">
    </div>`;
    return template;
  }

  // let selectInput = function (obj) {
  //   let template = `
  //   <div class="selectMenu form-elem">
  //     <${ obj.type } id="${ obj.id }">
  //       <option selected disabled>${ label }...</option>
  //       <option value="${ obj.value }"><${ obj.label }></option>
  //     </${ obj.type }>
  //   </div>`;
  //   return template;
  // }

  let textAreaTemplate = function (obj) {
    let template = `
    <div class=textAreaDiv>
      <${ obj.type } rows="5" cols="50" id=${ obj.id }>${ obj.label }</${ obj.type }>
    </div>`;
    return template;
  }


  // Our "do something" function
  let doSomething = function(arr) {
    _.each(arr, function (item) {
      var htmlBlock;
      if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {
        htmlBlock = genericInput(item);
      }
      // else if (item.type === 'select') {
      //   htmlBlock = selectInput(item);
      // }
      else if (item.type === 'textarea'){
        htmlBlock = textAreaTemplate(item);
      }
      else {
        alert('We dun gooft');
      }
      console.log(htmlBlock);
      $('.body').append(htmlBlock)
    });
  }

}());

     
// <i class="fa ${ obj.icon }"></i>



  // OR

  // let genericInput = _.template($('#generic-form').text());
