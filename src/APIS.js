// console.log(document.documentElement.scrollHeight)
// console.log(document.documentElement.scrollTop)
// console.log(document.documentElement.clientHeight)



// let page = 1
// let pgaeSize = 5
const url = `https://api.themoviedb.org/3/movie/120?api_key=112e39057db264c4517faf05ca2aac5b`

const api = fetch(url)


api.then((response)=>{
  console.log(response)
  return response.json()
}).then((data)=>{
  console.log(data)
      
    })
    
    
    
  // console.log(data["articles"])
  // return data["articles"]

// window.addEventListener('scroll',()=>{
//   const {scrollHeight , scrollTop , clientHeight} = document.documentElement;
  
//   if(scrollTop + clientHeight >= scrollHeight){
//     console.log("Hi i am a bottom");
//   }

// })