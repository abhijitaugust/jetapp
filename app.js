$(document).ready(function(){
			$("form").submit(function(event){
				event.preventDefault();
				var name = $("#nameid").val() ;
				var email = $("#emailid").val() ;
				var gender = $("#genderid").val() ;
				var text = $("#textid").val() ;
				var submit = $("#submitid").val() ;
				
				$(".error_msg").load("mail_val.php", {
					name: name , email: email , gender: gender ,text: text ,
                    submit: submit					
					});
			});
		});
		