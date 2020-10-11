const options = {
    name: 'test',
    width: 1024,
    height :1024,
    colors: {
        border: 'black',
        background: 'red'
    }
};

console.log(Object.keys(options).length);

for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let key1 in options[key]){
            console.log(`Свойство:${key1},Значение:${options[key][key1]}`)
        }
    }else{
        console.log(`Свойство:${key},Значение:${options[key]}`);
    }
    
}