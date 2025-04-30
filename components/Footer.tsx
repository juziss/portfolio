export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="w-full text-center py-4 bg-gray-100 text-gray-600 text-sm">
        <p>© {currentYear} Julia Coutinho Neta. Todos os direitos reservados.</p>
      </footer>
    );
  }
  