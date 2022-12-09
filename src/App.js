import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SearchResults from './components/SearchResults';
import { fetchSearchResults } from './store/action-creators';
import useDebounce from './components/utils/useDebouncer';
import { TextField, Dialog} from '@mui/material';
import DialogContent from './components/DialogContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Error from './components/utils/Error';
import Loader from './components/utils/Loader';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#123C69",
      }
    }
  });
  
  const [input,setInput] = useState('');
  const [open,setOpen] = useState(false);
  const {data, success, loading} = useSelector(state => state.searchInput);
  const itemDetails = useSelector(state => state.itemDetails);
  const debouncedSearch = useDebounce(input, 500);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  }
  const inputHandler = (e) =>{
    setInput(e.target.value);
  }

  useEffect(()=>{
    if(debouncedSearch){
      const url = `http://hn.algolia.com/api/v1/search?query=${debouncedSearch}`
      dispatch(fetchSearchResults(url));
    }
  },[debouncedSearch, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TextField id="outlined-basic" value={input} sx={{width:210}} onChange={inputHandler} label="Please enter your search" variant="outlined" color="primary" style={{marginBottom:"1em"}}/>
        {loading && <Loader/>}
        {!loading && <ul>
          {success && data.hits.map((data, index)=>
            <SearchResults setOpen={setOpen}id={data.objectID} url={data.url} key={index} title={data.title} author={data.author}/>
          )}
        </ul>}
        {!loading && !success && <Error/>}
        <Dialog onClose={handleClose} open={open} >
          <DialogContent handleClose={handleClose} itemDetails={itemDetails}/>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default App;
