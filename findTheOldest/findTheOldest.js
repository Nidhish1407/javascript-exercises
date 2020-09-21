let findTheOldest = function(people) {
   return people.reduce((oldest,person)=>{
          oldestage  = (oldest.yearOfDeath?oldest.yearOfDeath:(new Date()).getFullYear()) - oldest.yearOfBirth;
          currage = (person.yearOfDeath?person.yearOfDeath:(new Date()).getFullYear()) - person.yearOfBirth;
          
          return oldestage<currage?person:oldest;
    })
}

module.exports = findTheOldest
