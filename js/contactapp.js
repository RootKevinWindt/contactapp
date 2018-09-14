let people;
fetch('https://randomuser.me/api').then(response => {
        return response.json();
    }).then(peopleResponse => {
    people = peopleResponse;
    peopleLength();
}).catch(err => {

    });

function peopleLength(){
    console.log(people);
    document.getElementById("first__name").innerText = `${people.results[0].name.first} ${people.results[0].name.last}`;
    document.getElementById("email").innerText = people.results[0].email;
    document.getElementById("work__email").innerText = people.results[0].email;
    document.getElementById("number").innerText = people.results[0].cell;
    document.getElementById("work__number").innerText = people.results[0].phone;
    document.getElementById("picture").src = people.results[0].picture.thumbnail;
}


