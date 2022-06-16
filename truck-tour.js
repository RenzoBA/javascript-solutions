// By hackerRank

/* truckTour: Suppose there is a circle. There are "N" petrol pumps on that circle. Petrol pumps are numbered 0 to
(N-1) (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1)
the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the
next petrol pump.
Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol
pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the
truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol */

function truckTour(petrolpumps) {
    let pumps = petrolpumps.filter(pump => pump[0] > pump[1]);
    let correctPump;
    
    if (pumps.length === 1) {
        return petrolpumps.indexOf(...pumps)
    }
    
    for (let i = 0; i < pumps.length; i++) {
        let petrol = pumps[i][0] - pumps[i][1];
        let correct = true;
        
        for (let j = petrolpumps.indexOf(pumps[i]) + 1; j < petrolpumps.length; j++) {
            petrol = petrol + petrolpumps[j][0] - petrolpumps[j][1];
            
            if (petrol < 0) {
                correct = false;
                break;
            }
        }

        if (correct) {
            correctPump = petrolpumps.indexOf(pumps[i]);
            break;
        }

    }
    return correctPump;
}

console.log(truckTour([[6,3], [1,12], [1,2], [10,3], [2,10], [10,3], [2,1], [1,2], [5,2], [3,4]]))