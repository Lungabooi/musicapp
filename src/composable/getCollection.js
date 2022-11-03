import { ref, watchEffect } from 'vue'
import { projectFirestore } from '@/fire/config'
import { collection } from 'firebase/firestore'

const getCollection = ( collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection
       ) .orderBy('createAt')

       const unsub = collectionRef.onSnapshot(snap => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().creadAt && results.push({...doc.data(), id:doc.id})
        });
        documents.value = results
        error.value = null
       }, err => {
        console.log(err.message)
        documents.value =null
        error.value = 'could not fetch data '
       })
}