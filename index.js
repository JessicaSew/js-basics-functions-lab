// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
    let returnValue = distance - 42;
    return returnValue
}
    if (distance < 42 ) {
        let returnValue = 42 - distance;
        return returnValue;
    }
}
function distanceFromHqInFeet(distance) {
    if (distance > 42)
    {
        let returnValue = (distance - 42) * 264;
        return returnValue;
    }
    if (distance < 42) {
        let returnValue = (42 - distance) * 264;
        return returnValue;
    }
}
function distanceTravelledInFeet(startBlock, endBlock) {
        if (startBlock > endBlock) {
            let returnValue = (startBlock - endBlock) * 264;
            return returnValue;
     }
        if (startBlock < endBlock) {
            let returnValue = (endBlock - startBlock) *264;
            return returnValue;
        }
}
function calculatesFarePrice(start, destination) {
    let returnValue = (destination - start) * 264 
    let value = (start - destination) * 264 
    
    if(start < destination)
    {
        if (returnValue < 400) 
        {
            return 0;
        }
    }

    if (destination < start ) {
        

        if (value > 2500)
        {
            return 'cannot travel that far';
        }
        else
        {
            value = (value - 400) * .02;
            return value;
        }
    }

    if (returnValue > 2000 && returnValue <= 2500) {
        return 25;
    }

}


