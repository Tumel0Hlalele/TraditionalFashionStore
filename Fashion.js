const gallery = document.getElementbyId('gallery')
const search = document.getElementbyId('search')
console.log(search);
search.addEventListener('keyup',() {}
    console.log(e); { 

        } 
    

const loadCharacters = async () {}
    try {
        const res = await fetch(gallery)
        displayCharacters = await res.json();
        console.log(gallery);
    }catch (err) {
        console.error(err);
    }
}