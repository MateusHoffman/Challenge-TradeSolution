import axios from 'axios'

const api = {
  async getDetailsCep(cep: string) {
    const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    return response;
  }
}


export default api
