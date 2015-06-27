var newMessText = document.getElementById("enterFild"); //enterFild


// Create new massage in History window
var createHistoryElement = function (taskString) {
   console.log("Creating new message in history fild.....");
   
   var listItem = $('<li class="oneLogMess"></li>');
   var label = $('<label class="message-text">' + newMessText.value +'</label>');
   //var editInput = document.createElement("input"); // text
   var editButton = $('<button type="submit" class="logEdit">Edit</button>');
   var deleteButton = $('<button type="submit" class="logDel">Delete</button>')
  
   label.innerText = newMessText.value;
     
   //Each element needs appending
   listItem.append(label);
   //listItem.appendChild(editInput);
   listItem.append(deleteButton);
   listItem.append(editButton);
   
   $(deleteButton).click(function() {
        deleteMessage(deleteButton);
    });

   
   return listItem;
};

//Delete an existing task
var deleteMessage = function (button) {
   console.log("Delete task...");
   $(button).parent().remove();
}


var addHistioryElement = function () {
   if (newMessText.value !== "") {
      console.log("addHistioryElement");
      $("#logFild").append(createHistoryElement());
   } else {
      alert("Put some text firstly");
   }
};

$("#sendButton").click(function () {
   //if (event.which === 13 || event.type === 'click') {
   addHistioryElement();
   $('#enterFild').val('');
});

$("#enterFild").keypress(function () {
        if (event.keyCode == 13) {
            $("#sendButton").trigger('click');
        }
});
