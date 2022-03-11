const apiusers = 'https://api.github.com/users/';

const searchval = document.getElementById("search");
const searchbtn = document.getElementById("btn");
const main = document.getElementById("main");
const form = document.getElementById("form");

async function getUser(user){
    const response = await fetch(apiusers + user);
    const responsedata = await response.json();
    console.log(responsedata );
    createUserCard(responsedata);

}

//to display user details
function createUserCard(user){

    const cardData = `
                    <div>
                    <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
                    </div>
                <div>
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>~Followers</strong></li>
                    <li>${user.following}<strong>~Following</strong></li>
                    <li>${user.public_repos}<strong>~Repos</strong></li>
                </ul>
    `;

    main.innerHTML = cardData;
    firstName = user.name;
    if(user.name == null ){
        main.innerHTML="Oops!! User Not Found!!";
    }

}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = searchval.value;

    if (user) {
        getUser(user);

        searchval.value = "";
    }
    
});