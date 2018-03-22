import React, { PropTypes } from 'react';

//Componentes
import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';
import Paginator from '../Paginator';
/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {
	static propTypes ={
		data: PropTypes.arrayOf(PropTypes.object).isRequired,
		loading: PropTypes.bool.isRequired,
		queried: PropTypes.bool.isRequired,
		search: PropTypes.string.isRequired,
	}

	renderMessage(){
		let text="", l= this.props.data.length;

		if(this.props.loading){
			text = <span>Searching results for <b>{this.props.search}</b></span>;
		}else if(l>0){
			text = <span>We found <b>{l}</b> repositories for <b>{this.props.search}</b></span>;
		}else if(l===0 && this.props.required){
			text = <span>We couldn't find any repositories matching <b>{this.props.search}</b></span>;
		}else{
			text = 'Type the name of a repository and click search';
		}

		return <HintMessage>{text}</HintMessage>;
	}

	renderTable(){
		if(this.props.data.length === 0){return null}
		else{
			return <table className="table">
				<thead>
					<tr>
						<th>Repository</th>
						<th>Owner</th>
						<th>Stars</th>
						<th>Forks</th>
						<th></th>				
					</tr>
				</thead>
				<tbody>
						{this.props.data.map(repo =>
							<RepositoryRow repo={repo} key={repo.id} />
						)}
				</tbody>
			</table>;
		}
	}
  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      {this.renderMessage()}
      {this.renderTable()}
    </section>;
  }
}

// Export the class
export default Paginator(RepositoryList);
