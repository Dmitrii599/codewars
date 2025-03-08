// assert.strictEqual(travelDistance(0, 0), 0);
// assert.closeTo(travelDistance(600, 60), 1111.2, 1);
// assert.closeTo(travelDistance(800, 60), 1481.6, 1);

// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*

function travelDistance(avgSpeed, travelTime) {
    const KM_PER_MILE = 1.852;
    const travelHours = travelTime / 60; // 1
    const travelKms = avgSpeed * travelHours * KM_PER_MILE; // 600*1*1.852

    return travelKms;
}

console.log(travelDistance(0,0));
console.log(travelDistance(600, 60));
console.log(travelDistance(800, 60));


