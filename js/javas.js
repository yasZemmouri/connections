
  //Phone validation and formating
  var filter = [];

  //since we're looking for phone numbers, we need
  //to allow digits 0 - 9 (they can come from either
  //the numeric keys or the numpad)
  const keypadZero = 48;
  const numpadZero = 96;
  
  //add key codes for digits 0 - 9 into this filter
  for(var i = 0; i <= 9; i++){
    filter.push(i + keypadZero);
    filter.push(i + numpadZero);  
  }
  
  //add other keys that might be needed for navigation
  //or for editing the keyboard input
  filter.push(8);     //backspace
  filter.push(9);     //tab
  filter.push(46);    //delete
  filter.push(37);    //left arrow
  filter.push(39);    //right arrow
  
  /*******************************************************
    * onKeyDown(e)
    * when a key is pressed down, check if it is allowed
    * or not. If not allowed, prevent the key event
    * from propagating further
  *******************************************************/
  function onKeyDown(e){  
    if(filter.indexOf(e.keyCode) < 0){
      e.preventDefault();
      return false;
    }  
  }
  /*******************************************************
  * formatPhoneText
  * returns a string that is in XXX-XXX-XXXX format
*******************************************************/
function formatPhoneText(value){
  value = this.replaceAll(value.trim(),"-","");
  
  if(value.length > 3 && value.length <= 6) 
    value = value.slice(0,3) + "-" + value.slice(3);
  else if(value.length > 6) 
    value = value.slice(0,3) + "-" + value.slice(3,6) + "-" + value.slice(6);
  
  return value;
}
/*******************************************************
  * validatePhone
  * return true if the string 'p' is a valid phone
*******************************************************/
function validatePhone(p){
  var phoneRe = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}
/*******************************************************
  * onKeyUp(e)
  * when a key is pressed up, grab the contents in that
  * input field, format them in line with XXX-XXX-XXXX
  * format and validate if the text is infact a complete
  * phone number. Adjust the border color based on the
  * result of that validation
*******************************************************/
function onKeyUp(e){
  console.log('keyup');
  var input = e.target;
  var formatted = formatPhoneText(input.value);
  var isError = (validatePhone(formatted) || formatted.length == 0);
  var color =  (isError) ? "gray" : "red";
  var borderWidth =  (isError)? "1px" : "3px";
  input.style.borderColor = color;
  input.style.borderWidth = borderWidth;
  input.value = formatted;
}
/*******************************************************
  * setupPhoneFields
  * Now let's rig up all the fields with the specified
  * 'className' to work like phone number input fields
*******************************************************/
function setupPhoneFields(id){
  var lstPhoneFields = document.getElementById(id);
  console.log(lstPhoneFields);
  
  for(var i=0; i < lstPhoneFields.length; i++){
    var input = lstPhoneFields[i];
    if(input.type.toLowerCase() == "text"){
      input.placeholder = "Enter a phone (XXX-XXX-XXXX)";
      input.addEventListener("keydown", onKeyDown);
      input.addEventListener("keyup", onKeyUp);
    }
  }
}

//MAIN
setupPhoneFields("phone");
console.log(document.getElementById('phone'));
const x = document.getElementById('top-bar');
console.log(x);