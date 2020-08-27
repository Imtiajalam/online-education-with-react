import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Columns from 'react-columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    // console.log(props.Courses);
    const Courses = props.Courses;
    const handleCourse = props.handleCourse;
    
    let Course = Courses.map(course => {
        // console.log(course.name)
        let {name,description,price,image,id} = course;
   
    return (
        <CardDeck className="mx-4 mt-4 text-center">
            <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Card.Text>
                <h3>${price}</h3>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger" className="px-5" onClick={() => handleCourse(course)}><FontAwesomeIcon icon={ faShoppingCart }/> Enroll Now</Button>
            </Card.Footer>
            </Card>
      </CardDeck>
    )
  })

    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }];
    return (
        <div>
           <Columns queries={queries}>{Course}</Columns>
        </div>
    );
};

export default Course;