# Exercícios

## Nível básico

### Construa Arrays
a) Considerando o conjunto númerico de 0 a 100, construa uma lista que contenha esses números ordenadamente na forma crescente.
b) Considerando dois conjuntos numéricos, 0 a 4 e 5 a 10, construa uma lista que contenha ambos conjuntos, unidos, ordenadamente na forma crescente.

### Manipule Arrays
a) Dado o conjunto numérico de 0 a 10, remove TODOS os números que estiverem em índice par.
b) Dada a lista [0,1,2,3,5,7,10], complete com os números faltantes.

## Nível Intermediário
a) Considenrando a matriz:
```
    0  1  2  3
    4  5  6  7
    8  9  10 11
    12 13 14 15
```
Crie uma função que forneça o valor da soma das diagonais.

b) Considerando a mesma matriz anterior, crie uma função que realize a soma de todas as colunas e todas as linhas.

## Nível avançado
Considere o seguinte conjunto de dados:
```
const user = [
    {
        name: 'John',
        surename: 'Mac',
        age: 30,
        email: 'johnmac1@doe.com',
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
            specialty: 'Web'
        }]
    }
]
```
a) Altere o campo `surename` do usuário cujo email é `johnmac@doe.com` para `Doe 3` e retorne o resultado dessa alteração.
b) No campo `techs` localize o usuário que possuí a `speciality` configurada unicamente como `Web`, e retorne o resultado.