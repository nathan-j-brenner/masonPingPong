(function(){
    var feelings = ["sensational", "stupendous", "obsessive compulsive"];

    var rand;

    for (var i = 0; i < 5; i++) {
        rand = Math.floor(Math.random()*(feelings.length+1));
        console.log(`I am feeling ${feelings[rand]}.`);
    }

})()
