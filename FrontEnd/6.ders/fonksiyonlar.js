//Primitive function
// function fonksiyonIsmi1(){
//     console.log('fonksiyonIsmi1')
// }

// // Arrow function
// const fonksiyonIsmi2=()=>{
//     console.log('fonksiyonIsmi2')
// }

// fonksiyonIsmi1()
// fonksiyonIsmi2()




const array=[100,200,300]

//primitive
array.forEach(function(eleman){
    console.log(eleman)
})

//arrow-1
array.forEach(eleman=>console.log(eleman))

//arrow-2
array.forEach(eleman=>{
    console.log(eleman)
})

//arrow-3
array.forEach((eleman,index)=>{
    console.log(index,eleman)
})