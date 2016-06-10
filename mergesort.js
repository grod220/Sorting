function splitArray (arr) {
  if (arr.length%2 === 0) {
    return [arr.slice(0,arr.length/2),arr.slice(arr.length/2)]
  } else {
    return [arr.slice(0,(arr.length+1)/2),arr.slice((arr.length+1)/2)]
  }
}

//[2,43,34,12,4]
// merge (mergesort[2,43,34], mergesort[12,4])

// mergesort[2,43,34]
// merge(mergesort[2,43], mergesort[34])

// mergesort[2,43]
// merge(mergesort[2],mergesort[43] )
// [2,43]

// merge([2,43],[34])
// [2,34,43]
// merge ([2,34,43], mergesort[12,4])

// mergesort[12,4]
// merge ([12], [4])
// [4,12]

// merge ([2,34,43], [4,12])
// return [2,4,12,34,43]


function merge (arr) {
  var first = arr[0];
  var second = arr[1];
  var returnArr = [];

  while (first.length || second.length) {
    if (!first.length) {
      returnArr.push(second.shift())
    }
    else if (!second.length) {
      returnArr.push(first.shift());
    }
    else {
      if (first[0] > second [0]) {
        returnArr.push(second.shift());
      }
      else {
        returnArr.push(first.shift());
      }
    }
  }

  return returnArr;

}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr;
  }
  // } else if (arr.length===2) {
  //   if (!arr[0].length && !arr[1].length) {
  //   var splits = splitArray(arr)
  //   return merge(splits);
  //   }
    else {
      var splits = splitArray(arr)
      return merge([mergeSort(splits[0]), mergeSort(splits[1])])
    }
  // }
  // else {
  //   return mergeSort(splitArray(arr))
  // }

}


