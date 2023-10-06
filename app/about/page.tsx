import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto my-40 p-6">
            <h1 className="text-4xl font-playfair mb-6 font-bold">O Poradni Magnolia</h1>

            <section className="mb-10">
                <h2 className="text-3xl font-playfair mb-4">Nasza misja</h2>
                <p className="text-gray-600">
                Poradnia MAGNOLIA powstała w odpowiedzi na dwuletnie działania prowadzone w zakresie wspierania uczniów ze specjalnymi potrzebami edukacyjnymi – i co ważne – w odpowiedzi na odczarowanie terminu: „uczeń ze specjalnymi potrzebami edukacyjnymi”. 

W dwa lata przeszkolonych zostało 3.350 nauczycieli z obszaru edukacji włączenia, którzy uczestniczyli łącznie w 5.270 godzinach zajęć. Następstwem dwuletnich działań było powołanie do życia Poradni Psychologiczno – Pedagogicznej MAGNOLIA, która działa na podstawie wpisu Prezydenta Miasta Rybnika do ewidencji szkół i placówek niepublicznych: 
 <span className=" font-semibold">Nr wpisu: E-I.4430.51.2023.</span>
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-playfair mb-4">Strona poradni</h2>
                <p className="text-gray-600">
                    Jesteś ciekawy naszej oferty? Chciałbyś dowiedzieć jak możemy wesprzeć Ciebie lub twoje dziecko? Zachęcamy do odwiedzenia strony naszej placówki→ <Link href="https://www.poradniamagnolia.pl" target="_blank"><span className=" font-semibold text-[#921D7F]">www.poradniamagnolia.pl</span></Link>
                </p>
                
            </section>

            <section className="">
                <h2 className="text-3xl font-playfair mb-4">Bezpośredni kontakt</h2>
                <p className="text-gray-600">
                   Zachęcamy również do bezpośredniego kontaktu z nami→ <Link href="/contact"><span className=" font-semibold text-gray-800">kontakt</span></Link>
                </p>
                
            </section>

        </div>
    );
};

export default AboutUs;
