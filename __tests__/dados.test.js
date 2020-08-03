import request from 'supertest';
import app from '../src/app'
const MOCK_CADASTRO = {
  firstname:'jose',
  lastname:'ali',
  participation:45
}
const MOCK_UPDATE = {
  firstname:'jose',
  lastname:'ali',
  participation:49
}
const MOCK_UPDATE_FAIL = {
  firstname:'jose',
  lastname:'ali',
  participation:'49'
}

const MOCK_ID = 4

function soma(a, b){
  return a + b
}

test('soma function it shoud return nine',()=>{
  const result = soma(4,5);

  expect(result).toBe(9)
})
describe('Dados', ()=>{
  it('deve ser cadastrado',async () =>{
    const response = await request(app)
    .post('/dados')
    .send(MOCK_CADASTRO);
    
    //se cadastrou espera que retorne id
    expect(response.body).toEqual(MOCK_CADASTRO.firstname)
  });
  it('deve ser cadastrado',async () =>{
    const response = await request(app)
    .post('/dados')
    .send(MOCK_CADASTRO);
    
    //se cadastrou espera que retorne id
    expect(response.body).toEqual(MOCK_CADASTRO.firstname)
  });

  it('deve listar itens',async () =>{
    const response = await request(app)
    .get('/dados')
    const {id} = response.body
    console.log(id)
    
    
    expect(response.body)
  });
  it('deve listar apenas 1 item',async () =>{
    const response = await request(app)
    .get('/dados/1')
    const {id} = response.body
    console.log(id)
    
    
    expect(response.body)
  });

  it('deve deletar item cadastrado',async () =>{
    const response = await request(app)
    .delete(`/dados/${MOCK_ID}`)
    .send({});
    
    //se cadastrou espera que retorne id
    expect({})
  });

  it('deve atualizar item cadastrado',async () =>{
    const response = await request(app)
    .put(`/dados/1`)
    .send(MOCK_UPDATE);
    
    
    //se cadastrou espera que retorne id
    expect(MOCK_UPDATE)
});

it('nao deve atualizar item cadastrado se participation for string',async () =>{
 try{ const response = await request(app)
  .put(`/dados/1`)
  .send(MOCK_UPDATE_FAIL);
 }catch(e){
   console.error('falhou',e.message) 
 } 
  
  //se cadastrou espera que retorne id
  expect('falhou')
});
});