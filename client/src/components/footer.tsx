export function Footer() {
  return (
    <footer className="py-12 bg-slate-900 dark:bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0" data-testid="footer-brand">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Muhammad Ali
            </div>
            <p className="text-gray-400 mt-2">Software Engineer | Full-Stack Developer</p>
          </div>
          
          <div className="text-center md:text-right" data-testid="footer-copyright">
            <p className="text-gray-400 mb-2">© 2025 Muhammad Ali. Made with ❤️</p>
            <p className="text-gray-500 text-sm">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
