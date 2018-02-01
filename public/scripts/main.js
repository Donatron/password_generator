// Declare password character variable arrays
$lowerCase = [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
              ];

$upperCase = [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'
              ];

$alphaNumeric = [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
                ];

$specialCharacters = [
                      '!', '@', '#', '$', '%', '^', '&', '*', '~'
                     ]

// Create function to get base character array
function createBaseArray() {
  //create empty array to hold character arrays
  $baseArray = [];

  // Add character arrays
  $baseArray.push($lowerCase);
  $baseArray.push($upperCase);
  $baseArray.push($alphaNumeric);

  return $baseArray;
}

// Create function to get all characters array
function createFullArray() {
  //create empty array to hold character arrays
  $fullArray = [];

  // Add character arrays
  $fullArray.push($lowerCase);
  $fullArray.push($upperCase);
  $fullArray.push($alphaNumeric);
  $fullArray.push($specialCharacters);

  return $fullArray;
}

// Create random index number for selecting random array from $characters
function getCharacterArray(characters) {

  $arrayNumber = Math.floor(Math.random() * characters.length);

  return $arrayNumber;

};

// Use random index to iterate over characters array and generate password
function generatePassword(length, characters) {

  $password = ''

    for (i=0; i<length; i++) {
      //Determine which character array to use for each password character
      $array = getCharacterArray(characters);

      // Get number of characters in array
      $arrayLength = characters[$array].length - 1;

      // Generate index number for character's position in array
      $index = Math.floor(Math.random() * $arrayLength);

      // Find character within character array and append to password variable;
      $character = characters[$array][$index];
      $password += $character;
    }
      return $password;
  };

// Hide copy password button
$('.copy-button').hide();

// Function to hide save form
function hideSaveForm() {
  $('.save-form').hide();
}

hideSaveForm();

// Function to show save form
function showSaveForm() {
  $('.save-form').show();
}

$('#myPasswordsButton').click(function() {
  showSaveForm();
});

// Create password for non-registered users
$('#guestPassword').click(function() {

  $password = generatePassword(6, $characters);

    $('.password').html($password);
    $('.copy-button').show();

});

// Create password for registered and logged in users
$('#myPasswordsButton').click(function() {

  // Find length of password to be generated
  $passwordLength = $('#passwordLength option:selected').text();

  // Check to see if user wants special characters included
  if($('#specialCharsCheckbox:checked').length !== 0) {
    $passwordCharactersAll = createFullArray();

    // Generate password
    $password = generatePassword($passwordLength, $passwordCharactersAll);
  } else {

    $passwordCharacters = createBaseArray();

    // Generate password
    $password = generatePassword($passwordLength, $passwordCharacters);
  }

  $('.password').html($password);
  $('.copy-button').show();
});
