$lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],$upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],$alphaNumeric=[0,1,2,3,4,5,6,7,8,9],$specialCharacters=["!","@","#","$","%","^","&","*","~"];function createBaseArray(){return $baseArray=[],$baseArray.push($lowerCase),$baseArray.push($upperCase),$baseArray.push($alphaNumeric),$baseArray}function createFullArray(){return $fullArray=[],$fullArray.push($lowerCase),$fullArray.push($upperCase),$fullArray.push($alphaNumeric),$fullArray.push($specialCharacters),$fullArray}function getCharacterArray(a){var b=Math.floor;return $arrayNumber=b(Math.random()*a.length),$arrayNumber}function generatePassword(a,b){var c=Math.floor;for($password="",i=0;i<a;i++)$array=getCharacterArray(b),$arrayLength=b[$array].length-1,$index=c(Math.random()*$arrayLength),$character=b[$array][$index],$password+=$character;return $password}$(".copy-button").hide();function hideSaveForm(){$(".save-form").hide()}hideSaveForm();function showSaveForm(){$(".save-form").show()}$("#myPasswordsButton").click(function(){showSaveForm()}),$("#guestPassword").click(function(){$characters=createBaseArray(),$password=generatePassword(6,$characters),$(".password").html($password),$(".copy-button").show()}),new Clipboard(".copy-button"),$("#myPasswordsButton").click(function(){$passwordLength=$("#passwordLength option:selected").text(),0===$("#specialCharsCheckbox:checked").length?($passwordCharacters=createBaseArray(),$password=generatePassword($passwordLength,$passwordCharacters)):($passwordCharactersAll=createFullArray(),$password=generatePassword($passwordLength,$passwordCharactersAll)),$("#generatedPassword").val($password),$(".copy-button").show(),console.log($password)});var hamburgerMenu=document.querySelector(".nav-toggler"),navMenu=document.querySelector("#navbarNav");hamburgerMenu.addEventListener("click",function(){navMenu.classList.toggle("collapse")});var dateSpan=document.querySelector("footer span"),date=new Date().getFullYear();dateSpan.textContent="Copyright "+date+" | ";