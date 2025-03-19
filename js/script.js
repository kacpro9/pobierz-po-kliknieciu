console.log("Sprawdzenie poprawnego podpięcia");

let btnGetData = document.getElementById('get-data');

const getData = () => {



    fetch(`https://akademia108.pl/api/ajax/get-post.php`, {
        mode: 'cors',
        method: 'GET',
    }).then(res => res.json()).then(resJSON => {

        let pId = document.createElement('p');
        let pUser = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

        pId.innerText = `Post ID: ${resJSON.id}`;
        pUser.innerText = `User ID: ${resJSON.userId}`;
        pTitle.innerText = `Title: ${resJSON.title}`;
        pBody.innerText = `Body: ${resJSON.body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUser);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);

    }).catch((error) => {
        console.error('Error', error);
    });

}
btnGetData.addEventListener('click', getData);