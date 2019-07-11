/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/elyssiawid')
  .then(function (response) {
    const responseData = response.data;
    var array = [];
    array.push(responseData);
    array.forEach(data => {
      createCard (data);
    });
  })
  .catch(function (error) {
    console.log(error);
  });



 
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');


// function createCard(data) {
//   const card = document.createElement('div')
//   const image = document.createElement ('img')
//   image.setAttribute('src', data.avatar_url)
//   const cardInfo = document.createElement('div')
//   const name = document.createElement('h3')
//   const username = document.createElement('p')
//   const location = document.createElement('p')
//   const profile = document.createElement('p')
//   const followers = document.createElement('p')
//   const following = document.createElement('p')
//   const bio = document.createElement('p')
// }
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const user = [tetondan, dustinmyers, justsml, luishrd, bigknell];

axios.get('https://api.github.com/users/justsml/followers')
  .then(function (Response) {
    const followersArray = [];
    const ResponseData = Response.data;
    ResponseData.forEach(data => {
      createCard (data);
    });
  })
  .catch(function (error) {
    console.log(error);
  });



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function createCard(data) {
  //created elements
  console.log(data);
  const card = document.createElement('div')
  const image = document.createElement ('img')
  image.setAttribute('src', data.avatar_url)
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  //elements with classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  //append
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileLink);
    //add content
  name.textContent = `name: ${data.name}`;
  username.textContent = `username: ${data.login}`;
  location.textContent= `location: ${data.location}`;
  profileLink.src = `profileLink: ${data.html_url}`;
  profile.textContent= `profile: ${data.html_url}`;
  followers.textContent = `followers: ${data.followers}`;
  following.textContent = `following: ${data.following}`;
  bio.textContent = `bio: ${data.bio}`;
  //appending div to page
  cards.appendChild(card)

}


// add content to elements
fullName.textContent = data [name];
userName.textContent = data.data.login;
userLocation.textContent = 'Location: ${data[location]}'
userProfile.textContent = 'Profile: ${profileLink}';
userFollowers.textContent = 'Followers: ${data[followers_url]}';
userFollowing.textContent = 'Following: ${data[following_url]}';
userBio.textContent = 'Bio: ${data[bio]}';

// profileLink.href = data[html_url];
// userImage.src = data[avatar_url];
// userImage.alt  'Image or avatar of Github user';

// // return card;

// // // set up structure of the elements
// // card.appendChild(card);
// // card.appendChild(cardInfo);
// // cardInfo.appendChild(userName);
// // cardInfo