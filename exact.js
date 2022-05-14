function getTimeFromMinutes(time){
    if(time <= 0 || typeof(time) !=="number" || !Number.isInteger(time)){
       console.log("Wystapil blad"); 
        return 
    }
    let exactHours = time / 60;
    let exactMinutes = time % 60;
    let hour; 
    exactHours = exactHours.toString();
    for(let i = 0; i < exactHours.length; i++){
        if(exactHours[i] == '.'){
            let index = exactHours.indexOf(exactHours[i]);
            hour = exactHours.slice(0, index);
        }
    }
    console.log(`It's ${hour} hours and ${exactMinutes} minutes`);
}
getTimeFromMinutes(200);

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "wystapil blad";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'hours';
//             break;
//         case 1:
//             hoursStr = 'hour';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'hours';
//             break;
//         default:
//             hoursStr = 'hours';
//     }

//     return `It's ${hours} ${hoursStr} and ${minutes} minutes`;
// }