let container = [];

const requestURL = 'https://api.github.com/users/hiteshchoudhary';

const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL); 
console.log(xhr.readyState); // 1
xhr.onreadystatechange = function(){
    console.log(xhr.readyState); 
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers);
        console.log(data.id);
        console.log(data.avatar_url);
        container.push(data.login);
        container.push(data.id);
        container.push(data.avatar_url);
        container.push(data.followers);
        window.addEventListener('mouseover', (e) => {
            login.innerHTML = `
                <div>
                    <li><h1>Username: ${container[0]}</h1></li>
                </div>
                `;
            id.innerHTML = `
                <div>
                    <li><h1>UserId: ${container[1]}</h1></li>
                </div>
                `;
            avatar.innerHTML = `
                <div>
                    <li><h1>Avatar:</h1> <img src='${container[2]}' height = 400px></li>
                </div>
                `;
            followers.innerHTML = `
                <div>
                    <li><h1>Followers: ${container[3]}</h1></li>
                </div>
                `;
            })
    }
}
xhr.send();