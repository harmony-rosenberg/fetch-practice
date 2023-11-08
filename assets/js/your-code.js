export function getAllDogs() {
    const url = "/dogs"
    return fetch(url)
}

export function getDogNumberTwo() {
    const url = '/dogs/2'
    return fetch(url)
}

export function postNewDog() {
    
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
