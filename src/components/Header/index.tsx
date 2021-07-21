import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: 23,004</span>
      </div>
      <div className="toggle">
        <span>Dark Mode</span>
      </div>
    </Container>
  );
}