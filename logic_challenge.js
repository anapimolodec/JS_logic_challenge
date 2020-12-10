//submitted by @anapimolodec
// Question 1: 
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
//  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arr =[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


function SortArr(arr) {
  ans = [];
  array = arr.sort(function(a,b) {return a-b});
  console.log(array);
  for (i=0; i< array.length; i++) {
    if (array[i] !== array[i-1]) {
      ans.push(array[i]);
      console.log(ans);
    } else {
      if (ans[ans.length -1].length > 1) {
        ans[ans.length -1].push(array[i])
      } else {
      	ans[ans.length-1] = [ans[ans.length-1],array[i]]
      }
    }
  }
  return ans;
}

SortArr(arr);

// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]
function Que2(arr,target) {
	for (i = 0; i< arr.length; i++) {
		num1 = arr[i]
		for (u=0; i< u < arr.length; u++) {
			num2 = arr[u];
			if (num1+num2 === target) {
				return [num1,num2]
			}
		}
	}
	return "No such pair :("

}

Que2([1,2,3],4);


// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that 
// if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function RGBtoHex(r,g,b) {
	r =r.toString(16);
	g =g.toString(16);
	b= b.toString(16);
	if (r.length == 1) {
		r = "0" + r;
	}
	if (g.length == 1) {
		g = "0" + g;
	}
	if (b.length == 1) {
		b = "0" + b;
	}

	return "#"+r+g+b;
}

RGBtoHex(255,0,0);

function HextoRGB(hex) {
	let r=0,g=0,b=0;
	if (hex.length == 4) {
		r = parseInt(hex[1]+hex[1],16);
		g = parseInt(hex[2]+hex[2],16);
		b = parseInt(hex[3]+hex[3],16);
	} else if  (hex.length == 3){
		r = parseInt(hex[0]+hex[0],16);
		g = parseInt(hex[1]+hex[1],16);
		b = parseInt(hex[2]+hex[2],16);
	} else if (hex.length == 7) {
		r = parseInt(hex[1]+hex[2],16);
		g = parseInt(hex[3]+hex[4],16);
		b = parseInt(hex[5]+hex[6],16);
	} else if (hex.length == 6)  {
		r = parseInt(hex[0]+hex[1],16);
		g = parseInt(hex[2]+hex[3],16);
		b = parseInt(hex[4]+hex[5],16);
	}
	return `rgb(${r},${g},${b})`
}

HextoRGB("#ff0000");