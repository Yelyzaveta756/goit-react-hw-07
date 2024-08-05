import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectIsLoading } from './redux/selectors';
import { Audio } from 'react-loader-spinner'
import './App.css';

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1><b>Phonebook</b></h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Audio />}
      {error && <p>There is something wrong, please reload the page</p>}
      <ContactList />
    </div>
  );
}

export default App;
