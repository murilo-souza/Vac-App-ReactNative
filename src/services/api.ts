import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://vaccine-71554-default-rtdb.firebaseio.com/UsersData/9ifemwpVrQSW9S6CYe6DCgcNIIf1/readings/',
})
