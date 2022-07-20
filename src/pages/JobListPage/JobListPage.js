import React from "react";
import axios from  'axios'
import JobCard from "../../components/JobCard/JobCard";
import { BASE_URL, headers } from "../../constants/Url";

class JobListPage extends React.Component {
    state = {
        jobList: []
    }
    componentDidMount() {
        this.getJobs()
    }
    getJobs = () => {
        axios.get(`${BASE_URL}/jobs`, headers)
        .then((res)=> {
           this.setState({
            jobList: res.data.jobs
           })  
           console.log(this.state.jobList) // retorna array vazio
        })
        .catch((err)=>{
            console.log(err.response.data.message)
        })
    }

    render(){
      const jobComponents = this.state.jobList.map((item)=> {
        return <JobCard key={item.id} item={item} receberId={this.props.receberId}/>
      })
        return (
            <div>
                JobListPage
               {jobComponents}
            </div>
        )
    }
}
export default JobListPage;