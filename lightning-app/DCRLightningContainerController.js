({   
  handleMessageFromReact: function(component, event, helper) {
      var payload = event.getParams().payload;
      console.log(payload.message);
  } 
})