export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.url}" />
        <p class="explanation">Explanation: ${postObject.explanation}</p>
        <p>Date: ${postObject.date}</p>
        <p>Copyright: ${postObject.copyright}</p>

      </section>
    `
  }