const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const jokes = document.getElementById('Jokes');
const btn = document.querySelector('.btn');
const getJokes =()=>{
    fetch(url)
    .then(item=>item.json())
    .then((value) =>{jokes.innerHTML=`${value.joke}`})
    .catch((error)=>{console.log(error.Message)});
};
getJokes();
btn.addEventListener('click',()=>{
getJokes()
})