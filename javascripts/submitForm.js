Parse.initialize("DTlgg5qm0fyJxShtYY2RzjX62KgO7jcx4Y3fUV8S", "GYABuByO1Kg8wx8isoHAKPixxzpJLlLtDkx37zhE");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();


testObject.save({foo: "bar"}).then(function(object) {
});

window.onload = function() {
    document.getElementById("submitButton").onclick = function fun() {
        var firstName = document.getElementById("first").value;
        var lastName = document.getElementById("last").value;
        var email = document.getElementById("email").value;
        alert(firstName + lastName + email)
        //validation code to see State field is mandatory.  
    }
}
