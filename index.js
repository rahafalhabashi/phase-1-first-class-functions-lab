const returnFirstTwoDrivers = function() {
    ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return ['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function() {
    ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(){
        return fare * 5;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
}