const Foot = () => {
    return (
        <footer className="w-full bg-white text-gray-800 p-4 border-t">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl space-x-2">
              <a href="/" aria-label="Przejdź do strony głównej" className="font-bold hover:text-gray-300 text-4xl font-playfair">Magnolia Blog</a>
              <span className='italic text-[8px]'>by</span>
              <span className='text-[12px] text-[#921D7F]'>Poradnia Magnolia</span>
            </div>
            <nav aria-label="Nawigacja stopki">
              <ul className="flex space-x-4 text-sm menu">
                <li><a href="/" className="text-gray-500 hover:text-slate-600" aria-label="Przejdź do strony głównej">Strona główna</a></li>
                <li><a href="/about" className="text-gray-500 hover:text-slate-600" aria-label="Dowiedz się więcej o nas">O nas</a></li>
                <li><a href="/contact" className="text-gray-500 hover:text-slate-600" aria-label="Skontaktuj się z nami">Kontakt</a></li>
                <li><a href="https://www.poradniamagnolia.pl" target="_blank" className="text-gray-500 hover:text-slate-600" aria-label="Przejdź na stronę poradni">Poradnia</a></li>

              </ul>
            </nav>
          </div>
        </footer>
    )
}
export default Foot;
