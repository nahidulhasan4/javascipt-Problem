// here i will practice about fatch api

// const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
            // fatch api er khetre amra akta promise return kore jeta amra then use kore data access korte pari
            // then use kore data access korte pari
            // catch use kore error handle korte pari
            // fatch api er khetre amra akta promise return kore jeta amra then use kore data access korte pari
            // then use kore data access korte pari
            // catch use kore error handle korte pari                                   

            // fatch api er khetre amra akta promise return kore jeta amra then use kore data access korte pari
            // then use kore data access korte pari
            // catch use kore error handle korte pari
            // fatch api er khetre amra akta promise return kore jeta amra then use kore data access korte pari
            // then use kore data access korte pari
            // catch use kore error handle korte pari



            let url = 'https://jsonplaceholder.typicode.com/posts';

            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
