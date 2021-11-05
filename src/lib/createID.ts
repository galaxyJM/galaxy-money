let id: number = parseInt(window.localStorage.getItem('id') || '0') || 0;

function createID() {
    id++;
    window.localStorage.setItem('id',id.toString());
    return id;
}

export default createID;