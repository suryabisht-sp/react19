import React, { useState, useTransition } from "react";
import data from "../../utility/Data.json";
import Card from "../Card";
const ListItems = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();


  return (
    <div className="grid-cols grid">
      {data &&
        data.map((item, index) => {
          return <Card key={item.id}  item={item} />;
        })}
    </div>
  );
};

export default ListItems;
