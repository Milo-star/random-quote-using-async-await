    let btn = document.getElementById('btn');

    btn.addEventListener("click", function() {
        const reqListener = response => {
            let temp =JSON.parse(response.currentTarget.response) ;
            
            document.getElementById('qte').innerHTML = temp.quote
            document.getElementById('author').textContent = temp.author
            document.getElementById('image').src = temp.photo
            
          };
    
        
        const loadData = () => {
            const req = new XMLHttpRequest();
            req.onload = reqListener;
            req.open("get", "https://thatsthespir.it/api", true);
            req.send();
        };


        window.onload = () => {
            btn.onclick = loadData;
        };
        loadData()

    })