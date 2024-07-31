import { db } from "../firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

// Get items for a selected event
export async function getEventItems(userId, eventId) {
    try {
      const items = [];
      const itemsCollectionReference = collection(db, "users", userId, "events", eventId, "items");
      const itemsSnapshot = await getDocs(itemsCollectionReference);
  
      itemsSnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
      });
  
      return items;
    } catch (error) {
      console.log('Error getting event items:', error);
      throw error;
    }
  }

  // Add an item to a selected event
export async function addEventItem(userId, eventId, item) {
    try {
      const itemsCollectionReference = collection(db, "users", userId, "events", eventId, "items");
      const addedItemPromise = await addDoc(itemsCollectionReference, item);
      return addedItemPromise.id;
    } catch (error) {
      console.log('Error adding event item:', error);
      throw error;
    }
  }

  export async function getEventDetails(userId, eventId) {
    try {
      const eventDocReference = doc(db, "users", userId, "events", eventId);
      const eventDoc = await getDoc(eventDocReference);
  
      if (eventDoc.exists()) {
        return { id: eventDoc.id, ...eventDoc.data() };
      } else {
        throw new Error("Event not found");
      }
    } catch (error) {
      console.log('Error getting event details:', error);
      throw error;
    }
  }

  // Add a new event
export async function addEvent(userId, event) {
    try {
      const eventsCollectionReference = collection(db, "users", userId, "events");
      const addedEventPromise = await addDoc(eventsCollectionReference, event);
      return addedEventPromise.id;
    } catch (error) {
      console.log('Error adding event:', error);
      throw error;
    }
  }

  export async function clearCheckoutItems(userId) {
    try {
      const itemsCollectionReference = collection(db, "users", userId, "currentCheckout");
      const itemsSnapshot = await getDocs(itemsCollectionReference);
  
      const deletePromises = itemsSnapshot.docs.map(doc => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
    } catch (error) {
      console.log('Error clearing checkout items:', error);
      throw error;
    }
  }




