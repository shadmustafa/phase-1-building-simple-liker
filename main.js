// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll('.like-glyph')
for (let like of likes) {
  like.addEventListener('click', function(event) {
    
  mimicServerCall()
  .then((res) => {
    if(like.innerHTML === FULL_HEART) {
      like.innerHTML =EMPTY_HEART
    like.classList.remove("activated-heart")
    } 
    else {
         like.innerHTML = FULL_HEART
    like.classList.add("activated-heart")
    }
 
  })
  .catch((err) => {
    document.getElementById('modal').classList.remove('hidden')
    document.getElementById('modal-message').innerHTML = err
    setTimeout(() => {
      document.getElementById('modal').classList.add('hidden')
    }, 3000)
  })
})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}