import React from 'react';

// Importamos los componentes
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';

//Actions
import {searchRepositories} from '../../actions/actions';

//React-redux
import {connect} from 'react-redux';
/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {
  /**
   * Conexion con API de github
   * la API.
   */
  onSubmit = value =>{
    this.props.dispatch(searchRepositories(value));
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <div>
      <SearchForm onSubmit={ this.onSubmit } search={ this.props.search } />
      <RepositoryList data={this.props.results} loading={this.props.loading}
      queried={this.props.queried} search={this.props.search} />
    </div>;
  }

}

const mapStateToProps = state =>{
  let {search, loading, results, queried} =state;
  return {search, loading, results, queried};
}

// Exportamos
export default connect(mapStateToProps)(SearchContainer);
