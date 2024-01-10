enum CardinalDirections {
    North=1,
    East,
    South=5,
    West
}
let currentDirection = CardinalDirections.East;
console.log(currentDirection);
console.log(typeof currentDirection);

//currentDirection = 'North'; //Error

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(StatusCodes.NotFound);