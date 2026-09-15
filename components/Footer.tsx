export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="content-wrap flex flex-col gap-1 py-10 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Bian</span>
        <span>Built with code and curiosity.</span>
      </div>
    </footer>
  );
}
