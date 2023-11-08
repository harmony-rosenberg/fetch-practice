export function getAllDogs() {
    const url = "/dogs"
    return fetch(url)
}

export function getDogNumberTwo() {
    const url = '/dogs/2'
    return fetch(url)
}

export function postNewDog() {
    let url = "/dogs"
        let headers =  {
            "Content-Type": "application/x-www-form-urlencoded"
        };

      const body = new URLSearchParams({
        name: "Tummy Rub",
        age: "7 months"
       });

       const options = {
        method: "POST",

       }
       return fetch (url, options)
      
    }
 // return fetch(url, {
    //     method: "POST",
    const options = {

    }
    


export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
