Parse.initialize("DTlgg5qm0fyJxShtYY2RzjX62KgO7jcx4Y3fUV8S", "GYABuByO1Kg8wx8isoHAKPixxzpJLlLtDkx37zhE");
var Users = Parse.Object.extend("users");
var user = new Users();



//testObject.save({foo: "bar"}).then(function(object) {
//});

window.onload = function() {
    document.getElementById("submitButton").onclick = function fun() {
        var firstName = document.getElementById("first").val();
        var lastName = document.getElementById("last").val();
        var email = document.getElementById("email").val();
        user.set("firstName", firstName)
        user.set("lastName", lastName)
        user.set("email", email)
        alert(firstName + lastName + email)
        
        user.save(null,{
            success: function(user){
                alert("Submittion complete. We look forward to seeing you soon")
            },
            error: function(user, error){
                alert("Failed to submit, error code: " +error.message)
            }
        });
        //validation code to see State field is mandatory.  
    }
}
