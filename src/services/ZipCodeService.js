
import axios from "axios";

export default {
  async getZipCode(search) {
    search = search.replace(/[^0-9]/g, '');
        if (search.length !== 8) {
            return;
        }
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${search}/json/`);
        if (
            response.status === 200
            && response.data.erro !== true
        ) {
            return response.data;
        }
    } catch (error) {
      console.error('Erro ao obter o CEP:', error);
    }
  },
};

