Parse.initialize("DTlgg5qm0fyJxShtYY2RzjX62KgO7jcx4Y3fUV8S", "GYABuByO1Kg8wx8isoHAKPixxzpJLlLtDkx37zhE");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();


testObject.save({foo: "bar"}).then(function(object) {
  var form = document.forms[0]
  var firstName = form.elements[0].value
  var lastName = form.elements[1].value
  var email = form.elements[2].value
});

window.onload = function() {
    document.getElementById("submitButton").onclick = function fun() {
        alert("hello");
        var firstName = $("#first").value
        var lastName = $("#last").value
        var email = $("#email").value
        alert(firstname + " " + lastname + " " + email)
        //validation code to see State field is mandatory.
        
    }
}
