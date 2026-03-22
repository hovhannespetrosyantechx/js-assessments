const btn1 = document.getElementById('with-header');
const btn2 = document.getElementById('without-header');
const output = document.getElementById('output');

function wait() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

async function getUser(withHeader) {
    
    const response = await fetch('https://reqres.in/api/users?page=2', {
        
        headers: {
            "x-api-key" : "reqres_463a5269f47a4220aa80db185e679cbc"
        }

    });

    const data = await response.json();

    console.log(data)
}

btn1.onclick = () => getUser(true);
btn1.onclick = () => getUser(false);
