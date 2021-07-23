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
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </Container>
  );
}