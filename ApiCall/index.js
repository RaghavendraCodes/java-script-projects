const postLists = document.querySelector(".posts-lists");

// fetch using XHR method. 

function fetchUsingXHR() {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); 
    xhr.responseType = 'json'; 
    xhr.send(); 
    xhr.onload = () => {
        if(xhr.status === 200) {
            displayResults(xhr.response)
            console.log(xhr.response);
        } else {
            console.log('some error occured');
        }
    }
}

// fetch using fetch method.

function fetchMethod() {
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET', 
    });
    fetchRequest.then((response) => response.json())
                .then((result) => displayResults(result))
                .catch((e) => console.log(e))
}

// fetch using async await method.

async function asyncMethod() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    }); 
    const result = await response.json();
    displayResults(result);
}

// fetch using all above. 

function helperMethod(method, url) {
    const promise = new promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); 
        xhr.open(method, url); 
        xhr.responseType = 'json'; 
        xhr.send(); 

        xhr.onload = () => {
            if(xhr.status === 200) {
                resolve(xhr.response); 
            } else {
                reject(xhr.response);
            }
        }
    })
    return promise;
}

async function advancedFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    }); 
    const result = await response.json(); 
    displayResults(result);
}

function displayResults(posts) {
    postLists.innerHTML = posts.map(item => 
        `
            <div class="post-item">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>
        `
    ).join(" ");
}

// fetchUsingXHR();
// fetchMethod();
// asyncMethod();
advancedFetch();
