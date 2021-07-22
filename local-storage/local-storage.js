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

export function searchUser(userName){
    const users = getUser();
    for (let user of users){
        if (user.username === userName){
        return user;}
    }

}



export function createUser(formData){
    // if this doesn't check line 35 const = user
    const user = getUser();
    const userName = formData.get('user-name');
    const userPassword = formData.get('password');
    const exist = searchUser(userName);
    if (!exist){
        const newUser = { username:userName, password:userPassword, todos:[] };
        user.push(newUser);
    }
    const userString = JSON.stringify(user);
    localStorage.setItem(USER, userString);
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
