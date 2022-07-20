import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import JobListPage from './pages/JobListPage/JobListPage'
import CreateJobPage from './pages/CreateJobPage/CreateJobPage'
import CartPage from './pages/CartPage/CartPage'
import JobDetailPage from './pages/JobDetailPage/JobDetailPage'
import Header from './components/Header/Header'
class App extends React.Component {
  state = {
    telaAtual: 'home',
    jobDetailId: ''
  }

  escolherTela= () => {
    switch(this.state.telaAtual){
      case 'home':
      return <HomePage trocarTela={this.trocarTela}/>
      case 'list':
        return <JobListPage receberId={this.receberId}/>
      case 'form':
        return <CreateJobPage/>
      case 'cart':
        return <CartPage/>
      case 'detail':
        return <JobDetailPage jobId={this.state.jobDetailId} trocarTela={this.trocarTela}/>
      default:
        return <HomePage trocarTela={this.trocarTela}/>
    }
  }
 trocarTela = (tela) => {
  this.setState({
    telaAtual:tela
  })
 }
 receberId = (jobId) => {
  this.setState({
    telaAtual: 'detail', jobDetailId: jobId
  })
 }
  render(){
  return (
   <div>
    <Header trocarTela={this.trocarTela}/>
    {this.escolherTela()}
   </div>
  );
  }
}

export default App;
