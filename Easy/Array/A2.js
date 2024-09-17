//Search Insert Position==>
//    Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
let nums = [1, 3, 5, 6];
let target = 2;

function SearchPos() {
  if (nums.indexOf(target)) {
    console.log(target);
  } else if (!nums.indexOf(target)) {
    console.log("not found");
  }
}
SearchPos();
