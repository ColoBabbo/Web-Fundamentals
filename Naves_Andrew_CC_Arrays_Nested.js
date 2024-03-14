// Construct an algorithm that takes an array of coordinates and returns an optimal taco truck location
// Test an algorithm written to solve a problem by running several test cases
// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to the locations of his customers. He also uses an array of [x,y] as coordinates corresponding to the location where he parks his truck. Customers walk from their location to his truck, but Joe wants to minimize the total distance from his truck to his customers, so he's looking for a better place to park. Feature request: given a customer coordinate array, return an optimal taco truck location.

// Here's what we know: City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location.

// Create a grid
// create a function to minimize distance between truck and several other points
// Brute force: check every grid coordinate for min avg distance between other points
// Exclude: coordinates further N, S, E, W, than the furthest other points
// New Working Theory: averaging x and y coordinates of customers might be the middle?

let array =[[2 ,9],
[9 ,7],
[8 ,0],
[3 ,2]]

let newArray = [
    [0 ,1],
    [7 ,3],
    [5 ,9],
    [5 ,9],
    [7 ,1],
    [4 ,8],
    [7 ,3],
    [0 ,9]]

let newwWWArray = [[1 ,8], [-2 ,-7], [-9 ,-3], [-5 ,-5], [-8 ,-8], [2 ,-3], [5 ,-8], [2 ,5]]

function averageOfXYCoords (arr) {
    let coordSum = [0, 0]
    // console.log (arr.length, arr[0].length)
    for (let column=0; column<arr[0].length; column++) {
            for (let row=0; row<arr.length; row++) {
            // console.log(column,row, arr[row][column])
            coordSum[column] += arr[row][column]
        }
    }
    let coordAvg = [Math.round(coordSum[0]/arr.length), Math.round(coordSum[1]/arr.length)]
    // console.log(coordAvg)
    return coordAvg
}

const optimalTacoTruckParking = (arr) => {return averageOfXYCoords(arr)}

console.log (optimalTacoTruckParking(newwWWArray))