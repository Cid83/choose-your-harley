// SET MODELS-1

let models=[
    { 
        name:"Street Bob 114",
        image:"images/street-bob-114-motorcycle-nav.webp",
        link:"https://www.harley-davidson.com/tr/tr/motorcycles/street-bob.html"
    },

    {
        name:"Fat Boy 114",
        image:"images/fat-boy-114-motorcycle-nav.webp",
        link:"https://www.harley-davidson.com/tr/tr/motorcycles/fat-boy.html"

    },

    {
        name:"Pan America 1250",
        image:"images/pan-america-1250-motorcycle-nav.webp",
        link:"https://www.harley-davidson.com/tr/tr/motorcycles/pan-america-1250.html"


    },

    {
        name:"Road Glide St",
        image:"images/road-glide-st-motorcycle-nav.webp",
        link:"https://www.harley-davidson.com/tr/tr/motorcycles/road-glide-st.html"


    },

    {
        name:"Sporster",
        image:"images/sportster-s-motorcycle-nav.webp",
        link:"https://www.harley-davidson.com/tr/tr/motorcycles/sportster-s.html"


    }


]


let index=0
let slaytCount= models.length
let interval

let settings={
    duration:"1000",
    random:true
}

init(settings)


// EVENTS-5

document.querySelector(".fa-arrow-circle-left").addEventListener
("click",function(){
    index--;
    showSlide(index)


})

document.querySelector(".fa-arrow-circle-right").addEventListener
("click",function(){
     index++;
     showSlide(index)

})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})



function init(settings){

   let prev

    interval=setInterval(function(){

        if(settings.random){
            do {
                index = Math.floor( Math.random()* slaytCount)
            } while (index==prev);
            prev= index
        
        }else{ 
            if(slaytCount==index+1){
                index=-1
            }
            showSlide(index)
            index++

        }

        showSlide(index)

    },settings.duration)

    

}



function showSlide(i){

    index=i

    if(i<0){
        index = slaytCount - 1
    }

    if(i>= slaytCount){
        index = 0
    }

// TITLES OF MODELS SELECTED-3

document.querySelector(".card-title").textContent = models[index].name

// IMAGES OF MODELS SELECTED-2

document.querySelector(".card-img-top").setAttribute("src" ,models[index].image)

// LINKS OF MODELS SET-4

document.querySelector(".card-link").setAttribute("href",models[index].link)

}






