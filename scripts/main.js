import { Post } from "./feed/post.js"
import {getNasaPost} from "./data/dataManager.js"

const postElement = document.querySelector(".postList");

const showPost = () => {
      getNasaPost().then((nasaPost) => { 
          let postHTML = Post(nasaPost)
          postElement.innerHTML = postHTML;
      })
  }
  showPost()

// function - show post, the responsibility was to get the data from the API
// then it will invoke post function to convert that data into html
// Then it takes that data and puts it on to  the DOM