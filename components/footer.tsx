const Foot = () => {
  return (
      <footer className="w-full bg-white text-gray-800 p-4 border-t">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
        <div className="font-bold text-xl w-full">
          <a href="/" className="hover:text-[#ffae82] logo text-4xl font-playfair">Magnolia Blog<br className="md:hidden block" /><span className='italic text-[8px]'>by</span><span className=' text-[12px] text-[#921D7F]'>Poradnia Magnolia</span></a>
        </div>
          <nav aria-label="Nawigacja stopki" className=" w-full flex md:justify-end justify-start">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-md md:text-sm menu">
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
