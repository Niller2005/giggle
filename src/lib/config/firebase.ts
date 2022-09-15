import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyCDDW9eqeZThmIvZgVgOSyDzMq_1UnSoqE',
	authDomain: 'giggle-ebb30.firebaseapp.com',
	projectId: 'giggle-ebb30',
	storageBucket: 'giggle-ebb30.appspot.com',
	messagingSenderId: '454218960810',
	appId: '1:454218960810:web:810b7cbe885428a650a5d3',
	measurementId: 'G-P4VPFTF25K'
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
