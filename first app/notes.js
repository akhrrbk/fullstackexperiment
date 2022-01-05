const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const container = document.querySelector('#container')
var counter = 0;
var counter2 = 0;

button1.addEventListener("click", () => {

    if(counter < 1){
    
        const seperatediv1 = document.createElement('div');
        seperatediv1.setAttribute('id', 'seperatediv1');
        document.body.appendChild(seperatediv1);

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'h1');
        h1.setAttribute('id', 'h1first');
        h1.innerHTML = 'Names from JSON file: ';
        seperatediv1.appendChild(h1);

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ulala');
        seperatediv1.appendChild(ul)

        var xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function (){
            if(this.readyState == 4 && this.status === 200){
                const datafromjson = JSON.parse(this.responseText)
                console.log("this is from json file")
                console.log(datafromjson)
                // console.log(datafromjson.users[0].firstName)

                for(let i = 0; i < datafromjson.users.length; i++){
                    const li = document.createElement('li')
                    li.innerHTML = datafromjson.users[i].firstName;
                    ul.appendChild(li)
                }
            }
        }
        
        xhttp.open("GET", "./secondfile.json", true)
        xhttp.send()

        counter += 1;
    }

})

button2.addEventListener('click', () => {
    // console.log("button2 working")
    
    if(counter2 < 1){

        const seperatediv2 = document.createElement('div');
        seperatediv2.setAttribute('id', 'seperatediv2');
        document.body.appendChild(seperatediv2);

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'h1');
        h1.setAttribute('id', 'h1second');
        h1.innerHTML = 'notes from 2nd JSON file: ';
        seperatediv2.appendChild(h1);

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ulala2');
        seperatediv2.appendChild(ul)


        var xhttp = new XMLHttpRequest()

            xhttp.onreadystatechange = function (){
                if(this.readyState == 4 && this.status === 200){
                    const datafromjson2 = JSON.parse(this.responseText)
                    // console.log("this is from json file")
                    // console.log(datafromjson2)
                    var lengthcountbooleon = false;

                    function lengthcount(){
                        if(datafromjson2.length <= 10){
                            return datafromjson2.length
                        } else {
                            lengthcountbooleon = true;
                            return 10
                        }
                    }

                    for(let j = 0; j < lengthcount(); j++){
                        const li = document.createElement('li');
                        // console.log(datafromjson2[j].content)
                        li.innerHTML = datafromjson2[j].content;
                        ul.appendChild(li)
                    }
                    
                    if(lengthcountbooleon){
                        const li = document.createElement('li');
                        li.innerHTML = '...';
                        ul.appendChild(li);
                    }
                }
            }

        xhttp.open("GET", "./notesdata.json", true)
        xhttp.send()

        counter2 += 1;
    }
})