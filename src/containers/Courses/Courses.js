import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';
 // <Link to={'/posts/' + post.id} key={post.id}>
class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }


    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link to={{pathname: '/courses/' + course.id, search: '?start=' + course.title}} key={course.id}>
                                    <article className="Course" >{course.title}</article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Switch>
                    <Route path={"/courses/:id" } exact  component={Course} />
                </Switch>
            </div>
        );
    }
}

export default Courses;