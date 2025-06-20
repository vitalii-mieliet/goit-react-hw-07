import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/operation";
import { selectIsError, selectIsLoading } from "./redux/selectors";

import "./App.css";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ width: "300px", margin: "0 auto 24px auto" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Contacts is loading ...</p>}
      {isError && <p>Something went wrong: {isError}</p>}
      <ContactList />
    </div>
  );
}
export default App;
