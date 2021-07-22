export const USERS = 'users';

export function getUser() {
    const DATA = localStorage.getItem(USERS || '[]');
    const arrUsers = JSON.parse(DATA);
    return arrUsers;
}



// export function setUser(obj){
//     const userString = JSON.stringify(obj);
//     localStorage.setItem(USERS, userString);
// }

//create search user
//function input is a user
//getUser();
//loop through LS -- looking for user name/text entered matches object already there
//IF true-- return user object from LS

export function searchUser(userName){
    const users = getUser();
    for (let user of users){
        if (user.username === userName){
        return user;}
    }

}




//create a new user
//getUser(); -- getting it from LS
//need to check if the user already exists 
//if user does NOT exist, create a new user
//need to push new user to LS
//need to set a NEW LS 

export function createUser(){

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
