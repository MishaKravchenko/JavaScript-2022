// В index.html
const generalDiv = document.createElement("div");
generalDiv.classList.add("generalDiv");
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        value.forEach(user=>{
            const div = document.createElement("div");
            const h2 = document.createElement("h2");
            const h3 = document.createElement("h3");
            const a = document.createElement("a");

            div.classList.add("userDiv");
            h2.classList.add("userName");
            h3.classList.add("userID");
            a.classList.add("linkUserDetails");

            // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
            h2.innerText = `${user.name}`;
            h3.innerText = `${user.id}`;

            // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
            a.innerText = "Детальніше";
            a.href = "user-details.html?id="+ user.id;

            console.log(a.href);

            div.append(h2,h3,a);
            generalDiv.appendChild(div);
        })

    })
document.body.appendChild(generalDiv);