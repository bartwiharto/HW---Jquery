// const userForm = "This is meow first task";


// 	$('#submitButton').click(function (e){
// 		e.preventDefault();
// 		const content = $('#user-Input').val();

// 	$('#toDoPreview').html(content);
 
// });

	$('#btn_createList').click(function(){
    $('.listOfTasks').append($('<li>', {
         text: $('#inputTask').val()
    }));
});