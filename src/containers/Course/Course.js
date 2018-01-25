import React, { Component } from 'react';

class Course extends Component {
	state = {
		titulo: "",
		id: 0
	};

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(){
    	this.loadData();
    }

    loadData () {
    	if(this.props.match.params.id){
    		//previene infinite loop
    		if(this.state.id !== +this.props.match.params.id){
    			const query = new URLSearchParams(this.props.location.search);
        		for (let param of query.entries()) {
            		console.log(param[1]); // yields ['start', '5']
            		console.log(this.state.id);
            		this.setState({titulo: param[1], id: +this.props.match.params.id})      
        		}
        	}
    	}
    }

    render () {
		const	course = (<div>
			                <h1>{this.state.titulo}</h1>
			               <p>You selected the Course with ID: {this.state.id}</p>
			           </div>);
        return course;
    }
}

export default Course;