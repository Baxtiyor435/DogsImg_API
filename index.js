let body = document.getElementById('bod')
let skip = document.getElementById('skip')
skip.addEventListener("click",()=>{

    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange",()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            console.log(data);   
            img.src = data[0].url
    
    
    console.log(img);
    
    body.append(img)
    
        } else if(request.readyState === 4){
            console.log("404 NOT FOUND");
        }
    })
    
    request.open('GET','https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
    
    request.send()
    
    
    let img = document.createElement('img')
    img.classList.add("w-[900px]","h-[500px]","object-cover","m-auto","mt-[120px]","rounded-[30px]","duration-300","hover:w-[1000px]","hover:h-[600px]","hover:rounded-[15px]")
    

})    
