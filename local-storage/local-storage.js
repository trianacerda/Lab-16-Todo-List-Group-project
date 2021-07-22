export const USERS = 'users';

export function getUser() {
    const DATA = localStorage.getItem(USERS || '[]');
    const arrUsers = JSON.parse(DATA);
    return arrUsers;
}



export function setUser(obj){
    const userString = JSON.stringify(obj);
    localStorage.setItem(USERS, userString);
}

export function searchUser(userName){
    const users = getUser();
    for (let user of users){
        if (user.username === userName){
        return user;}
    }

}

export function createUser(x, y){
    let user = getUser();
    const userName = x;
    const userPassword = y;
    const exist = searchUser(userName);
    if (!exist){
        const newUser = { username:userName, password:userPassword, todos:[] };
        user.push(newUser);
    }
    return newUser;
}
    setUser();

