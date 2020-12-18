function arrayPreviousLess(nums) {
  if (!Array.isArray(nums)) {
    throw new Error('Invalid input');
  }
  const { length } = nums;
  const arrayClone = [...nums];

  /* eslint-disable*/
  // Until figure out alternative to label
  outerLoop: for (let i = 0; i < length; i += 1) {
    if (typeof nums[i] !== 'number') {
      throw new Error('Invalid input');
    }
    for (let j = i - 1; j >= 0; j -= 1) {
      if (nums[i] > nums[j]) {
        arrayClone[i] = nums[j];
        continue outerLoop;
      }
    }
    arrayClone[i] = -1;
  }
  return arrayClone;
}

module.exports = { arrayPreviousLess };
