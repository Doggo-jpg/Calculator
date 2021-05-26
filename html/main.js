
const makeOperation = ()=>{
    const regex = /x/ig;
    let data = {expresion: ''}

    const expresiontext = document.getElementById('expression').value;//gets expression from index
    data.expresion = expresiontext.replace(regex,'*');
    console.log(expresiontext);
    
    console.log(data);

    document.getElementById('datasent').value = JSON.stringify(data);//writes expresion in index

    fetch(`http://localhost:3000/api/calc`,{  //fetch post of api
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())      // pases the returned json to object variable
    .then(data => {                         //promise recives js object response 
        console.log(data)
        document.getElementById('dataresponse').value = JSON.stringify(data, null, 2);//writes json in view
      })
      .catch(error => {
          
        document.getElementById('dataresponse').value = "Syntax error";
        console.log(`ERRRRRRRR: ${error}`)});//if failed catch error
  


}
document.getElementById('evbtn').addEventListener('click', makeOperation) // executes makeOperation() on every click of the button