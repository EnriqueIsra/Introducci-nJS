// arreglos o arrays

const numeros = [10, 20, 30, 40, 50]
console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
console.log(meses)

//acceder a los valores de un arreglo
console.log(meses[4])
console.log(numeros[4])

meses.forEach(function(mes){
    console.log(mes)
})
numeros.forEach(function(numero){
    console.log(numero)
})

//conocer la extensión de un arreglo
console.log(meses.length)