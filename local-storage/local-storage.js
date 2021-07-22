export const USERS = 'users';

export function getUser() {
    const DATA = localStorage.getItem(USER);
    const arrUsers = JSON.parse(arrUsers);
    return arrUsers;
}



export function setUser(obj){

    const userString = JSON.stringify(obj);

    localStorage.push(USER, userString);
}


//this creates a new user 
//
export function createUser(){

    getUser();

    for(let item of array){

            if ( item.username === username ){

                return false;
            }
            else {
                
                setUser();

            }
    }

}






export function findByUser(){
  
}
