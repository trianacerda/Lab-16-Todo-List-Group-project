export const USERS = 'users';
export function getLocalStorage() {
    const DATA = localStorage.getItem(USER);
    const arrUsers = JSON.parse(arrUsers);
    return arrUsers;
}

export function setLocalStorage(userName, pWord){
    let localData = getLocalStorage();
    let newUser = {'user-name':userName, 'pass-word': pWord, 'to-dos': []};
    localData.push(newUser); 
    localStorage.setItem(USERS, JSON.stringify(localData))
}

export function findByUser(items, id){
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}
