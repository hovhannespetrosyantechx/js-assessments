const btn1 = document.getElementById('with-header');
const btn2 = document.getElementById('without-header');
const output = document.getElementById('output');

function delay() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

async function getUser(withHeader) {
    output.textContent = 'Loading...';
    console.log('Fetching users...');

    let options = {};

    if(withHeader) {
        options.headers = {
            "x-api-key": "reqres_463a5269f47a4220aa80db185e679cbc"
        };
    }

    const response = await fetch('https://reqres.in/api/users?page=2', options);


    const data = await response.json();
    await delay()
    console.log(data)

    output.textContent = '';

    data.data.map(user => user.first_name + ' ' + user.last_name)
        .forEach(name => {
            const p = document.createElement('p');
            p.textContent = name;
            output.appendChild(p);
        });
    console.log('Done');
}

btn1.onclick = () => getUser(true);
btn2.onclick = () => getUser(false);
