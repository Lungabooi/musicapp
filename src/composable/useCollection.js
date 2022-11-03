import { ref } from 'vue'
import { projectFirestore } from '@/fire/config'
import { collection, doc } from 'firebase/firestore'

const useCollection = ( collection) => {
    const error =  ref(null)
 const addDoc = async (doc) =>{
    error.value = null
    try {
        await projectFirestore.collection(collection).add(doc)

    } catch (err) {
        console.log(err.message)
        error.value = 'Could not send the message'
    }
 }
 return { error, addDoc }
}

export default useCollection