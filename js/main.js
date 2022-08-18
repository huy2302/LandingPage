var number = 30;
var numbers = () => {
    return (Math.floor(Math.random() * 100) + 1)
}
for (let i = 0 ; i < 100 ; i++) {
    if (numbers() < number){
        console.log(1);
    }else {
        console.log(2);
    }
}