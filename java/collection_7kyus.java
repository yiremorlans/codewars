// Write a function that returns the number of vowels in a str
public class Vowels {

  public static int getCount(String str) {
    String vowels = "aeiou";
      int counter = 0;
      for (int i = 0; i< str.length(); i++){
        char currentCharAtIndex = str.charAt(i);
        if (vowels.indexOf(currentCharAtIndex) >= 0) {
          counter++;
        }
      }
    return counter;
  }
}

// Create a class that replaces all the vowels in a str with empty space. No regex
public class Troll {
    public static String disemvowel(String str) {

      String noVowels = "";
        
      for (int i = 0; i < str.length(); i++){
        char letter = str.charAt(i);
        letter = Character.toLowerCase(letter);
        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
          noVowels += "";
        else 
          noVowels += str.charAt(i);
      }
      return noVowels;
    }
}