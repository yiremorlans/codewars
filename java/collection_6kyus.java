// Create a class that returns the sum of multiples of 3 and 5 up to a given number. If divisible by 3 & 5, count only once.
public class Solution {

  public int solution(int number) {
    // an int 
    // the sum of the multiples up to(not inclusive) given int number 
    // if number is divisible by 15, only sum it once
    
    // initialize accumulator value
    // loop up to int number
    // if current index is divisible by 3, 5, 15 then add to accumulator
    // return sum
    
    int sum = 0;
    
    for (int i = 0; i < number; i++){
      if (i % 15 == 0 || i % 5 == 0 || i % 3 == 0)
        sum += i;
    }
    return sum;
  }
}