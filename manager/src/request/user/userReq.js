import axios from '@/axios/axios.config.js'
console.log(axios)
export function signUpReq(params){
  return axios.get('/users/signUp',params)
}
export function signInReq(params){
  return axios.get('/users/signIn',params)
}