import React from "react";
import axios from 'axios'
import {BASE_URL, headers} from '../../constants/Url'
import {convertDate} from '../../utils/convertData'

class JobDetailPage extends React.Component {
    state = {
        job: {}
    }
    componentDidMount() {
        this.getJob()
    }
    getJob = () => {
      axios.get(`${BASE_URL}/jobs/${this.props.jobId}`, headers)
      .then((res)=>{
       this.setState({
        job: res.data
       })
      })
      .catch((err)=> {
        alert(err.response.data.message)
      })
    }
    render(){
        console.log(this.state.job)
        return (
            <div>
                {
                this.state.job.title && <h1>{this.state.job.title}</h1>
                }
                {               
                this.state.job.price  && <p>Preço R${this.state.job.price.toFixed(2)}</p>
                }
                {
                this.state.job.dueDate && <p>prazo {convertDate(this.state.job.dueDate)}</p>
                }
                {
                this.state.job.description &&  <p>{this.state.job.description}</p>
                }
                {
                this.state.job.paymentMethods && <p>{this.state.job.paymentMethods}</p>
                }

          
             
             <button onClick={()=> this.props.trocarTela('home')}>Voltar para home</button>
            </div>
        )
    }
}
export default JobDetailPage
;