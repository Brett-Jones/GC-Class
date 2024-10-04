
const postsContainer = document.getElementById("posts-container");

fetch("https://www.reddit.com/r/aww/.json")
    .then(response => response.json())
    .then(redditData => {
        const posts = redditData.data.children;

        posts.forEach(post => {

            const postData = post.data;

            const postDiv = document.createElement("div");
            const postTitle = document.createElement("h2");
            const postImage = document.createElement("img");
            const postLink = document.createElement("a");

            postTitle.textContent = postData.title;
            postImage.src = postData.thumbnail;
            postLink.href = `https://www.reddit.com${postData.permalink}`;

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postImage);
            postDiv.appendChild(postLink);
        
            postsContainer.appendChild(postDiv);

        });
    })

    .catch(error =>{
        console.log(error);
    })







