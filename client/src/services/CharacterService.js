const baseURL = 'https://irish-folklore-map.herokuapp.com/api/characters'

export default {
    getCharacters(){
        return fetch(baseURL)
        .then(res => res.json())
    }
    // postCharacter(payload){
    //     return fetch(baseURL, {
    //         method: 'POST',
    //         body: JSON.stringify(payload),
    //         headers: { 'Content-Type': 'application/json'}
    //     })
    //     .then(res => res.json())
    // },
    // updateCharacter(character) {
    //     return fetch(baseURL + character._id, {
    //       method: 'PUT',
    //       body: JSON.stringify(character),
    //       headers: { 
    //         'Content-Type': 'application/json' 
    //       }
    //     })
    //       .then(res => res.json());
    //   },
    // deleteCharacter(id){
    //     return fetch(baseURL + id, {
    //         method: 'DELETE'
    //     })
    // }
}