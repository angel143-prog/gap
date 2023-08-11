import Container from "@/components/container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Employee Manager - Global HR",
  description: "Employee Manager - Global HR",
};

const page = () => {
  return (
    <Container>
      <div>Employee Manager</div>
    </Container>
  );
};

export default page;
