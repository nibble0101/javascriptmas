# Javascriptmas

This is a set of programming challenges from [scrimba.com]() which is running from December 01, 2020 - December 23, 2020.

## Challenges

### Chunkey monkey

![chunkey monkey challenge](03-chunky-monkey.png?raw=true "Title")

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