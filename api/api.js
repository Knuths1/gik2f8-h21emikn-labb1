const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}

async function getOne(id) {
  console.log(id)
  resultat = ""
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);
  
    result.forEach(element => {
      if (element.id == id){
        //console.log(element)
        resultat = element
        //console.log(resultat)
        //return resultat;
      }
      //console.log(resultat);
      return resultat;
    });

}

