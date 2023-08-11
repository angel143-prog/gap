import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employee Hub - Global HR",
  description: "Employee Hub - Global HR",
};

const page = () => {
  return (
    <Container>
      <div>Employee Hub</div>
    </Container>
  );
};

export default page;
