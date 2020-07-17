import React from "react";
import { useParams } from "react-router-dom";

interface User {
  name: string;
}

const AboutPage: React.FC = () => {
  const { name } = useParams<User>();

  return (
    <div className="text-center">
      <h1>Hello</h1>
      <h1>{name}</h1>
      <h1>=D</h1>
    </div>
  );
};

export default AboutPage;
