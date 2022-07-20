import axios from "axios";
import React from "react";
import { BASE_URL, headers } from "../../constants/Url";

class CreateJobPage extends React.Component {
    state = {
        titulo: '',
        descricao: '',
        preco: '',
        pagamento:'',
        prazo: ''
    }
    onChangeTitulo = (event) => {
        this.setState({
            titulo: event.target.value    
        })
    }
    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        })
    }
    onChangePreco = (event) => {

        this.setState({
            preco: event.target.value
        })
    }
    onChangePagamento = (event) => {
        this.setState({
            pagamento: [event.target.value]
        })
    }
    onChangePrazo = (event) => {
        this.setState({
            prazo: event.target.value
        })
    }

    createJob = ()=> {
        const body = {
            title: this.state.titulo,
            description: this.state.descricao,
            price: +this.state.preco,
            paymentMethods: this.state.pagamento,
            dueDate: this.state.prazo
        }
        axios.post(`${BASE_URL}/jobs`, body, headers)
        .then((res)=>{
         alert('cadastrado')
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <p>Criar Job</p>
                <input placeholder="titulo" value={this.state.titulo} onChange={this.onChangeTitulo}/>
                <input placeholder="Descrição" value={this.state.descricao} onChange={this.onChangeDescricao}/>
                <input placeholder="Preço" value={this.state.preco} onChange={this.onChangePreco}/>
                <select value={this.state.pagamento} onChange={this.onChangePagamento}>
                    <option>Pagamento</option>
                    <option value='A vista'>A vista</option>
                    <option value='Debito'>Cartão de crédito</option>
                    <option value='Credito'>Cartão Débito</option>
                    <option value='Boleto'>Boleto</option>
                </select>
                <input type='date' value={this.state.prazo} onChange={this.onChangePrazo}/>
                <button onClick={this.createJob}>Adicionar Job</button>
            </div>
        )
    }
}
export default CreateJobPage;