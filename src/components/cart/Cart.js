import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const cart = (props) => {
    console.log(props.addCourse);
    const addCourse = props.addCourse;
    let total = 0 ;
    let price = 0;
    for(let i = 0; i<addCourse.length; i++) {
        price = addCourse[i].price;
        price = Number(price);
        total +=price;
    }
    const addedCourse = addCourse.map(addC => {
        return (
            <CardDeck className="mt-4 mr-2 ">
               <Card>
                <Card.Img variant="top" height="170px" src={addC.image} />
               <Card.Body>
                   <Card.Title>{addC.name}</Card.Title>
                   <Card.Text>
                     <h3>Price : ${addC.price}</h3>
                   </Card.Text>
               </Card.Body>
               </Card>
           </CardDeck>
        )
    });
    return (
        <div>
            <CardDeck className="mt-5">
            <Card>
            <Card.Header><h2>Your Courses</h2></Card.Header>
            <Card.Body>
                
                <Card.Text>
                 <h4>Total Courses : {addCourse.length}</h4>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
               <h3>Total Price : ${total}</h3>
            </Card.Footer>
            </Card>
      </CardDeck>
      {addedCourse}
        </div>
    );
};

export default cart;