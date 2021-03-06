// API REQUEST

const data = document.getElementById('data');
const btn = document.querySelector('button');
let charName, species, charStatus, gender;
charName = document.querySelector('#name');
species = document.querySelector('#species');
charStatus = document.querySelector('#status');
gender = document.querySelector('#gender');
async function getCharacter(){
    try{
        // Type number of char you want to see
        const number = +(prompt('type id number'));
        if (number > 671){
            alert('Type number from range 0-670')
        }
        else if(!number){
                alert('Invalid number, try again')
            }
        
        // Get char
        const getSingleChar = await fetch(`https://rickandmortyapi.com/api/character/${number}`);
        const parseChar = await getSingleChar.json();
        const idChar = [
            parseChar.name,
            parseChar.status,
            parseChar.species,
            parseChar.gender,
        ]
        // Add char image
        const img = document.getElementById('img');
        const divs = document.querySelector('.box')
        img.src = parseChar.image;
        divs.append(img)
        charName.textContent = parseChar.name;
        if(parseChar.status === 'Alive'){
            charStatus.textContent = 'OHHH yeaaah';
        } else {
            charStatus.textContent = 'Unfortunately not';
        }
        species.textContent = parseChar.species;
        gender.textContent = parseChar.gender;
       
        return idChar;
    }
    catch(e){
        return console.log(e)
    }
}
btn.addEventListener('click', getCharacter)
