import React, {PropTypes} from 'react';
import './Paginator.css';

export default PaginatedComponent =>
	class extends React.Component{
		static propTypes ={
			itemsPerPage: PropTypes.number.isRequired,
			data:PropTypes.arrayOf(PropTypes.object).isRequired
		}

		static defaultProps ={
			itemsPerPage: 5
		}


		constructor(props){
			super(props);

			this.onClick = this.onClick.bind(this);

			this.state ={
				page: 0
			}
		}

		componentWillReceiveProps(nextProps){
			let page =this.state.page;

			if(nextProps.data.length/this.props.itemsPerPage < page){
				page = 0;
			}

			if(page !== this.state.page){
				this.setState({page});
			}
		}

		onClick(e, page){
			e.preventDefault();

			if(page !== this.state.page){
				this.setState({page});
			}
		}

		renderPagination(){
			let numberPages = Math.ceil(this.props.data.length/this.props.itemsPerPage),
			pages = [];

			if(numberPages > 1){
				for(let i=0;i < numberPages; i++){
					let cssClass;
					if(i===this.state.page){
						cssClass = "Paginator__Page--active";
					}else{
						cssClass = "Paginator__Page";
					}


					pages.push(
						<a href="#" className={cssClass} key={i} 
						onClick={(e) => this.onClick(e, i)}>
							{ i + 1 }
						</a>
					)
				}
			}
			return (
				<div className="Paginator__Pagination">
					{pages}
				</div>
			)
		}

		pageData(){
			let data = [];

			if(this.props.data.length >0){
				data = this.props.data.slice(this.state.page * this.props.itemsPerPage,
					(this.state.page + 1) * this.props.itemsPerPage);
			}

			return data;
		}

		render(){
			let newProps = Object.assign({}, this.props,{
				data:this.pageData()
			});
			return <div className="Paginator">
				<PaginatedComponent{...newProps} />
				{this.renderPagination()}
			</div>
		}
	}