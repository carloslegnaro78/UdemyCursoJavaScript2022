let compararComThis = function (param) {
    console.log(this === param)
}

compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComThisArray = param => console.log(this === param)
compararComThisArray(global)