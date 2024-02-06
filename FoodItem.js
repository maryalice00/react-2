import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const FoodItem = ({ items, cantFind }) => {
  const { id } = useParams();

  // Find the snack with the given id
  const snack = items.find(snack => snack.id === id);

  // If the snack with the given id is not found, redirect to the specified route
  if (!snack) {
    return <Redirect to={cantFind} />;
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
};

export default FoodItem;
