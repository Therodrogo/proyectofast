import axios from 'axios'
const url="http://localhost:3000/api/"

export default class API{

    //LLAMADAS USUARIO
    static async login(data){
        try {
            const res = await axios.post(url+"login",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async agregarVotacion(data){
        try {
            const res = await axios.post(url+"addvotacione",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getVotaciones(){
        try {
            const res = await axios.get(url+"getvotaciones")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async cambiarEstadoVotacion(data){
        try {
            const res = await axios.put(url+"cambiarestadovotacion",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async register(ID){
        try {
            const res = await axios.get(url+"getuserbyid/"+ID)
            //console.log(res.data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
}