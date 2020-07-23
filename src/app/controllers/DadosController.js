import Dado from '../models/Dado';

class DadosController {

  async store(req, res) {

    const {
      firstname,
      lastname,
      participation
    } = await Dado.create(req.body)

    return res.json(
      firstname,
      lastname,
      participation
    );
  }
  async index (req,res) {
    const dados = await Dado.findAll({
    attributes:['id','firstname', 'lastname','participation'],
      
    }) 
    return res.json(dados)
    }


}

export default new DadosController();
