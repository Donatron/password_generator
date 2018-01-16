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
                ],

                [
                  '!', '@', '#', '$', '%', '^', '&', '*', '~'
                ]
              ];

// Create random index number for selecting random array from $characters
function getCharacterArray() {

  $arrayNumber = Math.floor(Math.random() * $characters.length);

  return $arrayNumber;

};

$('#password-btn').click(function generatePassword() {

  $password = ''

    for (i=0; i<8; i++) {
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

    $('#password').html($password);

});
