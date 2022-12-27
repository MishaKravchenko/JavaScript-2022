// На странице post-details.html:
const generalDiv = document.createElement("div");
generalDiv.classList.add("generalDiv");

const url = new URL(window.location.href);
const userID = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
    .then(value => value.json())
    .then(posts => {
        posts.forEach(post => {

            const divPost = document.createElement("div");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");

            divPost.classList.add("divPost");
            h2.classList.add("h2");
            p.classList.add("p");

            // 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
            h2.innerText = `${post.id}. - (${post.userId}) - ${post.title}`;
            p.innerText = `${post.body}`;

            divPost.append(h2, p);
            generalDiv.appendChild(divPost);
        })

        // 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}/comments`)
            .then(value => value.json())
            .then(posts => {
                posts.forEach(post => {
                    const divComment = document.createElement("div");
                    const h2 = document.createElement("h2");
                    const p = document.createElement("p");

                    divComment.classList.add("divComment");
                    h2.classList.add("h2");
                    p.classList.add("p");

                    h2.innerText = `${post.id}. - (${post.postId}) - ${post.name}`;
                    p.innerText = `
                E M A I L 
                ${post.email}
                ${post.body}`;

                    divComment.append(h2, p);
                    generalDiv.appendChild(divComment);
                    document.body.append(generalDiv);

                })

            })

    })