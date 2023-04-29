import AsyncStorage from '@react-native-async-storage/async-storage'
import { defaultTrigger } from '../utils/consts'
import { Phrase, TimeTrigger } from '../utils/interfaces'
import { compareTodayvsDate, getDateStr } from '../utils/utils'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp()
const db = getFirestore()
const notifications = db.collection('notifications')
