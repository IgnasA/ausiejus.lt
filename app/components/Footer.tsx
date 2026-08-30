import TokenInspector from './TokenInspector';

export default function Footer() {
  return (
    <footer data-tokens="--muted --accent">
      <a href="mailto:ausiejus.ignas@gmail.com">Email</a>
      <a href="https://github.com/IgnasA">GitHub</a>
      <a href="https://www.linkedin.com/in/ignasausiejus">LinkedIn</a>
      <a href="/cv.pdf">CV</a>
      <TokenInspector />
    </footer>
  );
}
