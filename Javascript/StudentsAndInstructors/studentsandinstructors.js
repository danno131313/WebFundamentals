var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function printPerson(people) {
    for (var i = 0; i < people.length; i++) {
        console.log(people[i].first_name, people[i].last_name);
    }
}

printPerson(students);
