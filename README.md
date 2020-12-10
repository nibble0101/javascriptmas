# Javascriptmas

This is a set of programming challenges from [scrimba.com](https://scrimba.com) dubbed [24 days of JavaScriptmas](https://scrimba.com/learn/adventcalendar). It runs from December 01, 2020 - December 24, 2020. Each day a JavaScript challenge is posted and participants are free to attempt and share their solution on twitter. On how to contribute, read the [contribution](/CONTRIBUTING.md) instructions.

## Challenges

### Candies

![candies challenge](questions/01-candies.png?raw=true "Candies challenge")

<details>
   <summary>Solution</summary>
   <p>
     
  ```js
     function candies(children, candy) {
      return Math.floor(candy / children) * children;
    }
  ```
    
   </p>
</details>

**********

### Deposit profit

![deposit profit challenge](questions/02-deposit-profit.png?raw=true "Deposit profit challenge")

<details>
   <summary>Solution</summary>
   <p>

  ```js
   function depositProfit(deposit, rate, threshold) {
    const years = Math.log(threshold / deposit) / Math.log(1 + rate / 100);
    return Number.isInteger(years) ? years + 1 : Math.ceil(years);
  }
  ```

   </p>
</details>

**********

### Chunkey monkey

![chunkey monkey challenge](questions/03-chunky-monkey.png?raw=true "Chunky monkey challenge")

<details>
  <summary>Solution</summary>
  <p>

  ```js
  function chunkyMonkey(values, size) {
    const chunkedArray = [];
    const arrayLength = values.length;
    for(let i = 0; i < arrayLength; i += size){
        chunkedArray.push(values.slice(i, i + size));
    }
    return chunkedArray;
  }
  ```

  </p>

</details>

**********

### Century from year

![century from year challenge](questions/04-century-from-year.png?raw=true "Century from year challenge")

<details>
   <summary>Solution</summary>

   <p>

   ```js

   function centuryFromYear(num) {
      return num % 100 ? Math.ceil(num/100): num/100;
   }

   ```

   </p>

</details>

***********

### Reverse a string

![reverse a string challenge](questions/05-reverse-string.png?raw=true "Reverse a string challenge")

<details>
   <summary>Reverse a string</summary>

   <p>

   ```js
   function reverseAString(str) {
      return str.split('').reverse().join('');
   }
   ```

   </p>
</details>

**********

### Sort by length

![sort by length challenge](questions/06-sort-by-length.png?raw=true "Sort by length challenge")

<details>

   <summary>Solution</summary>
   <p>

   ```js
     function sortByLength(strs) {
       return strs.sort((a, b) => a.length - b.length);
     }
   ```
   </p>
</details>

**********

### Count Vowel Consonant

![count vowel consonant challenge](questions/07-count-vowel-consonant.png?raw=true "Count Vowel Consonant challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js
   function countVowelConsonant(str) {
     return str.split('').reduce((count, char) => ('aeiou'.indexOf(char) === -1 ? count + 2 : count + 1), 0);
   }
   ```

   </p>

</details>

**********

### Sum odd fibonacci numbers

![sum odd fibonacci numbers challenge](questions/09-sum-odd-fibonacci-numbers.png?raw=true "Sum odd fibonacci numbers challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js

     function sumOddFibonacciNumbers(num) {
        if (num < 2) return 2;

        const cache = [1, 1];
        let sumOfOddFibNums = 2;
         
         while (cache[0] + cache[1] <= num) {
            const nextFibNum = cache[0] + cache[1];
            if (nextFibNum % 2) {
               sumOfOddFibNums += nextFibNum;
            }
            cache[0] = cache[1];
            cache[1] = nextFibNum;
         }

         return sumOfOddFibNums;

      }

   ```

   </p>

</details>

***********

### Adjacent elements product

![adjacent elements product challenge](questions/10-adjacent-elements-product.png?raw=true "Adjacent elements product challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js

      function adjacentElementsProduct(nums) {

         if (nums.length < 2) return nums[0];

         let product = nums[0] * nums[1];
         const lastIndex = nums.length - 1;

         for (let i = 1; i < lastIndex; i++) {
            if (nums[i] * nums[i + 1] > product) {
               product = nums[i] * nums[i + 1];
            }
         }
         return product;
      }

   ```


   </p>

</details>

**********