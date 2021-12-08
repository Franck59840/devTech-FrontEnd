import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Argonauts() {
  const [results, setResults] = useState([]);
  const [add, setAdd] = useState({ nameHeroes: '' });

  const handleChange = (event) => {
    setAdd({ nameHeroes: event.target.value });
  };
  const handleSubmit = () => {
    axios
      .post(`http://localhost:5050/users`, add)
      .then(({ response }) => {
        setAdd(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5050/users`)
      .then(({ data }) => {
        setResults(data);
      })
      .catch();
  }, []);

  return (
    <main>
      <h2>Ajouter un(e) Argonaute</h2>
      <form onSubmit={handleSubmit} className='new-member-form'>
        <label htmlFor='name'>Nom de l&apos;Argonaute</label>
        <input
          onChange={handleChange}
          id='name'
          name='name'
          type='text'
          placeholder='Charalampos'
        />
        <button type='submit'>Envoyer</button>
      </form>

      <h2>Membres de l'équipage</h2>
      <section className='member-list'>
        {results.map((result) => {
          return <li key={result.id}> {result.nameHeroes}</li>;
        })}
      </section>
    </main>
  );
}
