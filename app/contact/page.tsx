import Form from "@/components/form";

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto my-40 p-6">
            <section className="mb-10">
                <h2 className="text-4xl font-playfair mb-4">Skontaktuj się z nami</h2>
                <p className="text-gray-600 mb-4">
                    Jeśli masz pytania, wątpliwości lub chcesz nawiązać współpracę, skontaktuj się z nami poprzez poniższy formularz.
                </p>
                
                <Form />
            </section>

            <section>
                <h2 className="text-3xl font-playfair mb-4">Inne sposoby kontaktu</h2>
                <p className="text-gray-600">
                    Możesz też skontaktować się z nami bezpośrednio pod adresem email: <a href="mailto:poradniamagnolia@gmail.com" className="text-blue-500 hover:text-blue-700">poradniamagnolia@gmail.com</a> lub telefonicznie pod numerem: +48 690 515 224.
                </p>
            </section>
        </div>
    );
};

export default Contact;
