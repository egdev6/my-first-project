import React, {PropTypes} from 'react';

import ExternalLink from '../ExternalLink';

class About extends React.Component{
	shouldComponentUpdate(nextProps, nextState){
		return false;
	}

	get egdevLink(){
		return 'https://www.linkedin.com/in/egdev';
	}

	render(){
		return <section className="About">
			<p>Esta aplicacion es poarte del curso de React impartido en Openwebinars. Realizada por el alumno 
			{' '}<ExternalLink to={this.egdevLink}>Enrique Gomez</ExternalLink>
			</p>
		</section>
	}
}

export default About;