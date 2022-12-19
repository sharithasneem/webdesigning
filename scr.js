$(document).ready(function() {
    $("#this_form").validate({
        rules:{
            fname:{
                required:true,
                minlength:5,
                maxlength:20,
            },            
            lname:{
                required:true,
                minlength:5,
                maxlength:20,
            },
            email_address:{
                required:true,
                email:true
            },
            password:{
                minlength:6,
                maxlength:8,
            },
            day:{
                required:true,
            },
            gender:{
                required:true,
            },
            day:{
                required:true
            },
            month:{
                required:true,
            }
         },
         messages:{
            fname:{required:'enter first name'},
            lname:{required:'enter last name'}
           
         }
        
    })
})