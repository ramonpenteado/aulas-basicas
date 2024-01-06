const user = [
    {
        name: 'John',
        surename: 'Mac',
        age: 30,
        email: 'johnmac@doe.com',
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native', {
            name: 'JavaScript',
            specialty: 'Backend'
        }]
    },
    {
        name: 'John',
        surename: 'Doe',
        age: 30,
        email: 'johndoe@doe.com',
        password: '123456',
        techs: ['Node.js', 'NextJS', 'React Native', {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }]
    },
    {
        name: 'John',
        surename: 'Doe 2',
        age: 30,
        email: 'johnmac@doe.com',
        password: '123456',
        techs: ['Node.js', 'NextJS', 'React Native', {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }]
    }
]

function findUserByEmail(email) {
    return user.filter(user => user.email === email)
}

function findUSersByTech(tech) {
    return user.filter(user => user.techs.includes(tech))
}


console.log(findUserByEmail('johnmac@doe.com'))

//console.log(findUSersByTech('NextJS'))