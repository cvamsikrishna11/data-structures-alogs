// Constant time, total element size doesnt matter, we are going to perform only one operation every time

const giftBoxes = [1, 2, 3, 4, 5];

function compressFirstBox(boxes) {
  console.log(boxes[0]); // O(1)
}

function compressTwoBox(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

compressFirstBox(giftBoxes);  // O(1) - Constant Time

compressTwoBox(giftBoxes); // O(1) - Constant Time