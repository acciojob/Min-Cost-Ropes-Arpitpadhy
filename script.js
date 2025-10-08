function mincost(arr)
{ 
//write your code here
	if (arr.length <= 1) return 0;

  // Simulate a min-heap using a sorted array
  arr.sort((a, b) => a - b);
  let cost = 0;

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift();
    let second = arr.shift();
    let sum = first + second;
    cost += sum;

    // Insert the new rope back and keep array sorted
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }

  return cost;
// return the min cost
  
}

module.exports=mincost;
