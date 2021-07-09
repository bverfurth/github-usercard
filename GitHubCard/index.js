/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from "axios";
const cards = document.querySelector(".cards");

axios.get(`https://api.github.com/users/bverfurth`).then((res) => {
  githubUsercard(res.data);
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

const followersArray = [
  "JamariaSims",
  "BrandonWorobi",
  "ShariqAli-Dev",
  "SethBlakley",
  "omtmn",
];

followersArray.forEach((item) => {
  axios.get(`https://api.github.com/users/${item}`).then((res) => {
    githubUsercard(res.data);
  });
});

/*
      STEP 3: Create a function that accepts a single object as its only argument.
        Using DOM methods and properties, create and return the following markup:
    
        <div class="card">
          <img src={image url of user} />
          <div class="card-info">
            <h3 class="name">{users name}</h3>
            <p class="username">{users user name}</p>
            <p>Location: {users location}</p>
            <p>Profile:
              <a href={address to users github page}>{address to users github page}</a>
            </p>
            <p>Followers: {users followers count}</p>
            <p>Following: {users following count}</p>
            <p>Bio: {users bio}</p>
          </div>
        </div>
    */

function githubUsercard(singleObj) {
  console.log(singleObj);
  const card = document.createElement("div");
  card.classList.add("card");

  const userPicture = document.createElement("img");
  userPicture.setAttribute("src", singleObj.avatar_url);
  card.appendChild(userPicture);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = singleObj.name;
  cardInfo.appendChild(name);

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = singleObj.login;
  card.appendChild(userName);

  const location = document.createElement("p");
  location.textContent = `Location: ${singleObj.location}`;
  cardInfo.appendChild(location);

  const profile = document.createElement("p");
  profile.textContent = `Profile:`;

  const profileLink = document.createElement("a");
  profileLink.setAttribute("href", singleObj.html_url);
  profile.appendChild(profileLink);
  cardInfo.appendChild(profile);

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${singleObj.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${singleObj.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${singleObj.bio}`;
  cardInfo.appendChild(bio);

  cards.appendChild(card);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
