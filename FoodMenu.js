import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const FoodMenu = ({ items, type }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleInputChange = (event) => {
    setNewItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle adding the new item in the parent component
    // For simplicity, I'll just log the new item name here
    console.log("New Item Name:", newItemName);
    setNewItemName(""); // Clear the input field after submission
  };

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {type} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${type.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          {/* Form for adding new item */}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="newItemName">New {type} Name:</Label>
              <Input
                type="text"
                name="newItemName"
                id="newItemName"
                value={newItemName}
                onChange={handleInputChange}
                placeholder={`Enter new ${type.toLowerCase()} name`}
              />
            </FormGroup>
            <Button type="submit" color="primary">Add New {type}</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
};

export default FoodMenu;



