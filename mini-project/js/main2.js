// На странице user-details.html:
const url = new URL(window.location.href);
const userID = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    .then(value => value.json())
    .then(user => {

        const generalDiv = document.createElement("div");
        const divUser = document.createElement("div");
        const h2 = document.createElement("h2");
        const divEmail = document.createElement("div");
        const divAddress = document.createElement("div");
        const divGeo = document.createElement("div");
        const divInfo = document.createElement("div");
        const divCompany = document.createElement("div");

        generalDiv.classList.add("generalDiv");
        divUser.classList.add("divUser");
        h2.classList.add("userName");
        divEmail.classList.add("divEmail");
        divAddress.classList.add("divAddress");
        divGeo.classList.add("divGeo");
        divInfo.classList.add("divInfo");
        divCompany.classList.add("divCompany");

        // 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
        h2.innerText = `${user.id}. ${user.name}, ${user.username}`;
        divEmail.innerText = ` 
           - - E M A I L - -
           email: ${user.email}`;
        divAddress.innerText = `
           - - A D D R E S S - -
           address: ${user.address.street},
           suite: ${user.address.suite},
           city: ${user.address.city},
           zipcode ${user.address.zipcode}`;
        divGeo.innerText = `
           - - G E O - - 
           geo.lat: ${user.address.geo.lat},
           geo.lng: ${user.address.geo.lng}`;
        divInfo.innerText = `
        - - I N F O - -
           phone: ${user.phone},
           website: ${user.website}`;
        divCompany.innerText = `
        - - C O M P A N Y - - 
           company: ${user.company.name},
           catchPhrase: ${user.company.catchPhrase},
           bs: ${user.company.bs}`;

        // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
        // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
        const divAllPosts = document.createElement("div");
        divAllPosts.classList.add("divAllPosts")

        const button = document.createElement("button");
        button.innerText = `post of current user`;
        button.classList.add("button");

        button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
                .then(value => value.json())
                .then(posts => {

                    for (const post of posts) {
                        if (post.userId === user.id) {
                            const divPost = document.createElement('div');
                            divPost.classList.add('divPost');
                            divPost.innerText = `
                        T I T L E: 
                        ${post.title}`;

                            // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
                            const a = document.createElement('a');
                            a.href = 'post-details.html?id=' + post.userId;
                            a.innerText = 'Детальніше';
                            a.classList.add('a');
                            button.disabled = true;
                            divAllPosts.append(divPost, a);
                        }
                    }

                })
        }
        divUser.append(h2, divEmail, divAddress, divGeo, divInfo, divCompany);
        generalDiv.appendChild(divUser);
        document.body.append(generalDiv, button, divAllPosts);
    })

