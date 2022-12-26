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