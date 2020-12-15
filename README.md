# Javascriptmas

This is a set of programming challenges from [scrimba.com](https://scrimba.com) dubbed [24 days of JavaScriptmas](https://scrimba.com/learn/adventcalendar). It runs from December 01, 2020 - December 24, 2020. Each day a JavaScript challenge is posted and participants are free to attempt and share their solution on twitter. If you want to contribute to this set of solutions, read the [contribution](/CONTRIBUTING.md) instructions.

## Challenges

### Candies

![candies challenge](questions/01-candies.png?raw=true "Candies challenge")

<details>
   <summary>Solution 1</summary>
   <p>
     
  ```js
   function candies(children, candy) {
     return Math.floor(candy / children) * children;
   }
  ```
    
   </p>
</details>

<details>
   <summary>Solution 2</summary>
   <p>
     
  ```js
   function candies(children, candy) {
      return candy - (candy % children);
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
   <summary>Solution 1</summary>

   <p>

   ```js
   function reverseAString(str) {
      return str.split('').reverse().join('');
   }
   ```

   </p>
</details>

<details>
   <summary>Solution 2</summary>

   <p>

   ```js
   function reverseAString(str) {
      let reversedString = ''; const { length } = str;

      for (let i = 0; i < length; i += 1) {
        reversedString = str[i] + reversedString;
      }

      return reversedString;
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

### Avoid obstacles

![avoid obstacles challenge](questions/11-avoid-obstacles.png?raw=true "Avoid obstacles challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   function avoidObstacles(nums) {
      if (!Array.isArray(nums) || !nums.length) {
         throw new Error('Requires integer array');
      }

      const largestObstacle = Math.max(...nums);
      /*
         OR:
         const largestObstacle = nums.reduce((prev, curr) => {
             return curr > prev ? curr : prev;
         });
      */

      for (let jump = 2; jump <= largestObstacle; jump += 1) {
         if (nums.every((obstacle) => obstacle % jump !== 0)) {
            return jump;
         }
      }
      return largestObstacle + 1;
   }
   ```

   </p>

</details>

**********

### Valid time

![valid time challenge](questions/12-valid-time.png?raw=true "Valid time challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   function validTime(str) {

      if (typeof str !== 'string' || !str.includes(':')) {
         return false;
      }

      let [hour, minutes] = str.trim().split(':');
      hour = hour.trim();
      minutes = minutes.trim();

      if (/\D/.test(hour) || /\D/.test(minutes)) {
         return false;
      }

      hour = parseInt(hour, 10);
      minutes = parseInt(minutes, 10);
      return hour >= 0 && hour < 24 && minutes >= 0 && minutes < 60;
   }
   ```

   </p>

</details>

**********

### Extract each kth element

![extract each kth element challenge](questions/13-extract-each-kth.png?raw=true "Extract each kth element challenge")


<details>

   <summary>Solution</summary>

   <p>
   
   ```js

   function extractEachKth(nums, index) {
     return nums.filter((__, i) => (i + 1) % index !== 0);
   }

   ```

   </p>

</details>

**********

### Array maximal adjacent difference

![array maximal adjacent difference challenge](questions/14-array-maximal-adjacent-diff.png?raw=true "Array maximal adjacent difference challenge")

<details>
  <summary>Solution</summary>

  <p>

  ```js
  function arrayMaximalAdjacentDifference(nums) {

      if (!Array.isArray(nums) || !nums.length) {
         throw new Error('Invalid argument');
      }

      if (nums.length < 2) return nums[0];

      let maxAbsoluteDiff = Math.abs(nums[0] - nums[1]);
      const lastIndex = nums.length - 1;

      for (let i = 1; i < lastIndex; i += 1) {
         const diff = Math.abs(nums[i] - nums[i + 1]);
         if (maxAbsoluteDiff < diff) {
            maxAbsoluteDiff = diff;
         }
      }

      return maxAbsoluteDiff;
   }
  ```
  </p>

</details>

**********

### JavaScript Carousel

![JavaScript Carousel challenge](questions/15-javascrpt-carousel.png?raw=true "JavaScript Carousel Challenge")

<detail>
   <summary>Solution</summary>

   <p>

   ```js
   const previousButton = document.querySelector('.previous');
   const nextButton = document.querySelector('.next');
   const allImages = document.querySelectorAll('img.card');
   const gallery = document.querySelector('.gallery');
   const imageCount = allImages.length;

   let visibleImageId = 0;

   function togglePreviousButtonBlur(action = 'INCREASE_OPACITY') {
      if (action === 'LOWER_OPACITY') {
         previousButton.style.opacity = 0.3;
         return;
      }
      previousButton.style.opacity = 1;
   }

   function toggleNextButtonBlur(action = 'INCREASE_OPACITY') {
      if (action === 'LOWER_OPACITY') {
         nextButton.style.opacity = 0.3;
         return;
      }
      nextButton.style.opacity = 1;
      }

      function translateGallery(visibleImageId) {
      const currentVisibleImage = document.querySelector('.current');

      currentVisibleImage.classList.remove('current');
      allImages[visibleImageId].classList.add('current');
      gallery.style.transform = `translateX(${visibleImageId * -220}px)`;
   }

   function previousButtonClickHandler() {
      if (visibleImageId === 0) return;

      translateGallery(--visibleImageId);

      if (visibleImageId === 0) {
         togglePreviousButtonBlur('LOWER_OPACITY');
         return;
      }

      togglePreviousButtonBlur();
      toggleNextButtonBlur();
   }

   function nextButtonClickHandler() {
      if (visibleImageId === imageCount - 1) return;

      translateGallery(++visibleImageId);

      if (visibleImageId === 4) {
         toggleNextButtonBlur('LOWER_OPACITY');
         return;
      }
      toggleNextButtonBlur();
      togglePreviousButtonBlur();
   }

   previousButton.addEventListener('click', previousButtonClickHandler);
   nextButton.addEventListener('click', nextButtonClickHandler);


   ```
   </p>

</detail>

**********