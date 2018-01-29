// Declare password character variables
$characters = [
                [
                  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                ],

                [
                  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                  'U', 'V', 'W', 'X', 'Y', 'Z'
                ],

                [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
                ]

              ];

// Declare Special Characters array
$specialCharacters = [
                      '!', '@', '#', '$', '%', '^', '&', '*', '~'
                     ]
// Create random index number for selecting random array from $characters
function getCharacterArray() {

  $arrayNumber = Math.floor(Math.random() * $characters.length);

  return $arrayNumber;

};

// Use random index to iterate over characters array and generate password
function generatePassword(length) {

  $password = ''

    for (i=0; i<length; i++) {
      //Determine which character array to use for each password character
      $array = getCharacterArray();

      // Get number of characters in array
      $arrayLength = $characters[$array].length - 1;

      // Generate index number for character's position in array
      $index = Math.floor(Math.random() * $arrayLength);

      // Find character within character array and append to password variable;
      $character = $characters[$array][$index];
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

  $password = generatePassword(6);

    $('.password').html($password);
    $('.copy-button').show();

});

// Create password for registered and logged in users
$('#myPasswordsButton').click(function() {

  $password = generatePassword(6);

    $('.password').html($password);
    $('.copy-button').show();

});
