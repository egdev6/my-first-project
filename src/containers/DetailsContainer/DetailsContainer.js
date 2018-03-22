import React, { PropTypes } from 'react';

import ReleaseList from '../../components/ReleaseList';
// Componentes

/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {

  static propTypes = {
    params:PropTypes.shape({
      user: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired
    }).isRequired
  };

  constructor(props){
    super(props);

    this.state = {
      data:[],
      loading:false
    }
  }

  componentDidMount(){
    this.setState({loading:true});

    fetch(`https://api.github.com/repos/${this.repoName}/releases`)
      .then(res=>{
        return res.json();
      })
      .then(json=>{
        this.setState({
          loading: false,
          data: json
        })
      });
  }

  get repoName(){
    return `${this.props.params.user}/${this.props.params.repo}`;
  }

  /**
   * UI del contenedor
   */
  render() {
    return <main className="container">
      <h2>Releases of <b>{this.repoName}</b></h2>
      <ReleaseList data={this.state.data} loading={this.state.loading}
      repoName={this.repoName} />
    </main>;
  }
}

// Export the class
export default DetailsContainer;
