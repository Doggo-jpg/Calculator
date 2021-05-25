



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
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('dataresponse').value = JSON.stringify(data, null, 2);
  
        //document.getElementById('resultField').innerHTML = `= ${data.result}`;
      })
      .catch(error => {
          
        document.getElementById('dataresponse').value = "Syntax error";
        console.log(`ERRRRRRRR: ${error}`)});
  

   

}


document.getElementById('evbtn').addEventListener('click', makeOperation)