export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h3 class="postTitle">${postObject.title}</h3>
        </header>
        <img class="postImage" src="${postObject.url}" />
        <p class="explanation">Explanation: ${postObject.explanation}</p>
        <p>Date: ${postObject.date}</p>
        <p>Copyright: ${postObject.copyright}</p>

      </section>
    `
  }