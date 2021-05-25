
const makeOperation = ()=>{

    const regex = /x/ig;
    let data = {expresion: ''}

    const expresiontext = document.getElementById('expression').value;
    data.expresion = expresiontext.replace(regex,'*');
    console.log(expresiontext);
    
    console.log(data);

    document.getElementById('datasent').value = JSON.stringify(data);

    fetch(`http://localhost:3000/api/calc`,{
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('dataresponse').value = JSON.stringify(data, null, 2);
      })
      .catch(error => {
          
        document.getElementById('dataresponse').value = "Syntax error";
        console.log(`ERRRRRRRR: ${error}`)});
  


}


document.getElementById('evbtn').addEventListener('click', makeOperation)