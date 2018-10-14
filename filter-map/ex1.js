/* Array.prototype.map ET filter - Exercice 1

Il s'agit d'écrire une fonction getJediNames, qui reçoit en argument un tableau
de personnages de Star Wars (objets), chacun ayant deux propriétés :
- name: nom du personnage
- side: le côté de la Force où il se situe ('light' ou 'dark')

En utilisant filter puis map, la fonction doit renvoyer les noms des Jedis, c'est-à-dire les personnages du côté lumineux (pour ceux qui auraient passé les 40 dernières années dans une caverne en Lozère !)

Tableau en entrée:
[
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]

Sortie attendue:
['Yoda', 'Obiwan Kenobi', 'Mace Windu']

*/

/*function getJedisNames(characters) {
}*/

const getJedisNames = (characters) => {
  return characters.filter((character)=>{
    return character.side === 'light'
  }).map((character)=>{
    return character.name
  })
    //return characters.filter((character)=>{
      
    }
  


/*const persons = [
  { name: 'Anthony Young', age: 7 },
  { name: 'Kieran Davis', age: 34 },
  { name: 'James Woods', age: 23 },
  { name: 'Khalil Sexton', age: 16 },
  { name: 'Beckett Turner', age: 42 },
];
const adultsNames = persons.filter(function(person) {
  return person.age >= 18;
})
.map(function(person) {
  return person.name;
});
console.log(adultsNames);*/



const characters = [
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]
/*const getJedisNames = characters.filter(function(character) {
  return character.side === 'light'})
.map(function(character){
  return character.name
})*/

console.log(getJedisNames(characters))

module.exports = getJedisNames;
