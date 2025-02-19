import { openDB } from 'idb';

const dbName = 'quizDB';
const storeName = 'quizAttempts';

// Initialize the database
const initDB = async () =>{
    return openDB(dbName, 1, {
        upgrade(db){
            if(!db.objectStoreNames.contains(storeName)){
                db.createObjectStore(storeName, {keyPath: 'id', autoIncrement: true});
            }
        }
    });
}


//save full quiz attempt
export const saveQuizAttempt = async (quizAttempt) =>{
    const db = await initDB();
    const tx = db.transaction(storeName, 'readwrite');
    await tx.store.put(quizAttempt);
    await tx.done;
}

//get all quiz attempts
export const getQuizAttempts = async () =>{
    const db = await initDB();
    return db.getAll(storeName);
}

//clear all quiz attempts
export const clearQuizAttempts = async () =>{
    const db = await initDB();
    await db.clear(storeName);
}
