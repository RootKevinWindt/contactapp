let people;
fetch('https://randomuser.me/api/?results=5&format=json').then(response => {
        return response.json();
    }).then(peopleResponse => {
    people = peopleResponse;
    peopleLength();
}).catch(err => {

    });

function peopleLength(){
    let persons;

}


