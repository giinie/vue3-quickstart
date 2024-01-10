const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var num = Math.random();
        if (num >= 0.8) {
            reject("Error: num is greater than 0.8 - " + num);
        }
        resolve(num);
    }, 2000);
});

p.then((result) => {
    console.log("Success: " + result);
}).catch((error) => {
    console.log(error);
});

console.log("## Promise 객체 생성!");