const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCZGBua-dvwfSdcF9AskDIgw&part=snippet%2Cid&order=date&maxResults=50';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8d66dd89f0msh860b465ffa457ffp1ab5c9jsn9cddca44432a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '8d66dd89f0msh860b465ffa457ffp1ab5c9jsn9cddca44432a',
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// };

// fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UCZGBua-dvwfSdcF9AskDIgw&part=snippet%2Cid&order=date&maxResults=4', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


const content = null||document.getElementById('content');

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


(async ()=>{
    try {
        
        const videos = await fetchData(API);
        console.log(videos);
        //EL MAP ES PARECIDO AL FOREACH
        let view = `${videos.items.map(video=>
            
            `
        
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <a target="_blank" href="https://www.youtube.com/watch?v=${video.id.videoId}">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </a>
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}`;
        content.innerHTML = view;
    } catch (error) {
        // alert('Ups hubo un error, mira la consola')
        console.log(error);
    }
})();