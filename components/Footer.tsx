export default function Footer() {
  return (
    <footer className="border-t border-panelBorder/70 px-6 py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} Simon Githuo Maina. All rights reserved.
      <p>
        Unauthorized copying, reproduction, or misuse of this content is strictly prohibited.
      </p>
    </footer>
  );
}
