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
  async index(req, res) {
    const dados = await Dado.findAll({
      attributes: ['id', 'firstname', 'lastname', 'participation'],

    })
    return res.json(dados)
  }
  async index1(req, res) {
    const dados = await Dado.findOne({
      where: {id : req.params.id}

    })
    return res.json(dados)
  }

  async update(req, res) {
    const dados = await Dado.findOne({
      where: { id: req.params.id }
    })
    const { firstname, lastname, participation } = await dados.update(req.body);
    return res.json({
      firstname,
      lastname,
      participation
    })
  }

  async delete(req,res){
    const dados = await Dado.findOne({
       where: { id: req.params.id } 
    })
    const {firstname,lastname,participation} = await dados.destroy(req.body);
    res.json({})
  }
}

export default new DadosController();
