// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

// const getNeighbors = (row, col, matrix) => {
//   let node = [row, col];
//   let matrixLength = matrix[0].length - 1;
//   let matrixHeight = matrix.length - 1;

//   let neighbors = new Array();

//   //top
//   if (row > 0 && matrix[row - 1][col]) {
//     neighbors.push([row - 1, col]);
//   }
//   //bottom
//   if (row < matrixHeight && matrix[row + 1][col]) {
//     neighbors.push([row + 1, col]);
//   }
//   //left
//   if (col > 0 && matrix[row][col - 1]) {
//     neighbors.push([row, col - 1]);
//   }
//   //right
//   if (col < matrixLength && matrix[row][col + 1]) {
//     neighbors.push([row, col + 1]);
//   }
//   return neighbors;
// };




function getNeighbors(row, col, graph) {

  let neighbors = new Array();
  console.log(graph[row][col]);
  
  // Check top
  if (row > 0 && graph[row - 1][col]) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col]) {
    neighbors.push([row + 1, col]);
  } 
  // Check left
  if (col > 0 && graph[row][col - 1]) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }
  
  // Return neighbors
  return neighbors
}

console.log('----getNeighbors----');
console.log(getNeighbors(1, 1, grid));



const islandSize = (row, col, matrix) => {
  let visited = new Set();
  let stack = new Array();
  let node = [row, col];
  let perimeter = 0;

  visited.add(node.toString());
  stack.push(node);

  console.log(node);
  console.log(matrix[node[0]][node[1]]);

  while (stack.length) {
    let curr = stack.pop();

    console.log('curr', curr);
    console.log('matrix[curr]', matrix[curr[0]][curr[1]]);

    let neighbors = getNeighbors(curr[0], curr[1], matrix);
    console.log('neighbors', neighbors);
    console.log('neighbors.length', neighbors.length);


    if (neighbors.length === 4) {
      perimeter += 0;
    }
    if (neighbors.length === 3) {
      perimeter += 1;
    }
    if (neighbors.length === 2) {
      perimeter += 2;
    }
    if (neighbors.length === 1) {
      perimeter += 3;
    }

    neighbors.forEach(indexPair => {
      if (!visited.has(indexPair.toString())) {

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
        // Then push all the UNVISITED neighbors on top of the stack
        stack.push(indexPair);

        // and mark them as visited
        visited.add(indexPair.toString());
      }
    });
  }
  return perimeter;
};

//       neighbors.forEach((neighbor) => {
//     if (!visited.has(neighbor.toString())) {
//       // Then push all the UNVISITED neighbors on top of the stack
//       // and mark them as visited
//       // Then push all the UNVISITED neighbors on top of the stack
//       stack.push(neighbor);
//       // and mark them as visited
//       visited.add(neighbor.toString());
//     }
//   });

//     console.log('curr', curr);
//     console.log("My neighbors is " , neighbors)

//       for(let neighbor of neighbors){
//           if (!visited.has(neighbor.toString())){

//               stack.push(neighbor)
//               visited.add(neighbor.toString())
//           }
//       }
// }

// neighbors.forEach((neighbor) => {
//   if (!visited.has(neighbor.toString())) {
//     // Then push all the UNVISITED neighbors on top of the stack
//     // and mark them as visited
//     // Then push all the UNVISITED neighbors on top of the stack
//     stack.push(neighbor);
//     // and mark them as visited
//     visited.add(neighbor.toString());
//   }

//   if (matrix[curr] === 1) {
//     if (neighbors.length === 4) {
//       perimeter += 0;
//     }
//     if (neighbors.length === 3) {
//       perimeter += 1;
//     }
//     if (neighbors.length === 2) {
//       perimeter += 2;
//     }
//     if (neighbors.length === 1) {
//       perimeter += 3;
//     }
//   }
//   neighbors.forEach((neighbor) => {
//     if (!visited.has(neighbor.toString())) {
//       // Then push all the UNVISITED neighbors on top of the stack
//       // and mark them as visited
//       // Then push all the UNVISITED neighbors on top of the stack
//       stack.push(neighbor);
//       // and mark them as visited
//       visited.add(neighbor.toString());
//     }
//   });

//    for (let neighbor of neighbors){
//     if(!visited.has(neighbor.toString())){
//     stack.push(neighbor)
//     visited.add(neighbor.toString())
// }
// }
//   }

let grid2 = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];



// function islandSize(row, col, graph) {
//   // Initialize size to 0
//   let size = 0

//   // Create a visited set to store visited nodes

//   // Create a stack, put the starting node in the stack

//   // Put the stringified starting node in visited
//     // Create a visited set to store visited nodes
//     , visited = new Set([[row, col].toString()])

//   // Initialize size to 0
//     // Create a stack, put the starting node in the stack
//     , stack = [[row, col]];

//   // While the stack is not empty,
//   while (stack.length) {

//     // Pop the first node
//     let currNode = stack.pop();

//     // DO THE THING (increment size by 1)
//     if (graph[currNode[0]][currNode[1]] === graph[row][col]) size++;


//     let neighbors = getNeighbors(currNode[0], currNode[1], graph);
//     console.log('currNode', currNode);
//     console.log('neighbors', neighbors);

//     neighbors.forEach(indexPair => {
//       if (!visited.has(indexPair.toString())) {

//     // Then push all the UNVISITED neighbors on top of the stack
//     // and mark them as visited
//         // Then push all the UNVISITED neighbors on top of the stack
//         stack.push(indexPair);

//         // and mark them as visited
//         visited.add(indexPair.toString());
//       }
//     });
//     // HINT: This is what your helper function `getNeighbors` is for
//     // HINT: Remember, you're storing your visited nodes as strings!
//   } 

//   // return size

//   // Your code here
//   return size;
// }
console.log('----islandSize----');
console.log(islandSize(1, 1, grid2));
