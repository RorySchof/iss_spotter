// index.js

const { nextISSTimesForMyLocation } = require('./iss');

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



/*

// index.js

// const { nextISSTimesForMyLocation } = require('./iss');

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });



const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss')

//1. Function FetchMyIP we are going to call. This function would return an IP to us.


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  //console.log('It worked! Returned IP:' , ip);

  //2. Call the Second function named FetchCoordsByIP and we will pass the IP Returned in the first function
  fetchCoordsByIP(ip, (err, coordinates)=>{
    if(err){
      return console.log("There was an error ", err);
    }
    if(coordinates){
      //console.log("test ", coordinates);
      //3. Call the Third Function FetchISSFlyOverTimes
      fetchISSFlyOverTimes(coordinates,(error, flyover)=>{ 
        if (error){
          console.log("It didn't work!" , error);
       return;
        }
        console.log(flyover)

      })
    }
  });
})




//module.exports = { fetchMyIP };
// */

// fetchCoordsByIP("174.91.156.49", (error, coordinates) =>{
//   if (error) {
//     console.log("This is an error" , error);
//     return;
//   }


//   console.log("this is your location" , coordinates);
  
// })

// fetchISSFlyOverTimes()

