import { Avatar, Grid } from '@mui/material';
import './SearchResults.css';
import { useDispatch } from 'react-redux';
import { fetchItemDetails } from '../store/action-creators';
import PropTypes from 'prop-types';

function SearchResults({ setOpen, id ,author, url, title }) {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        const url = `http://hn.algolia.com/api/v1/items/${id}`
        dispatch(fetchItemDetails(url));
        setOpen(true);
    }
    
    return <Grid className="grid" direction="column" container spacing={2} item xs zeroMinWidth >
        <Grid onClick={onClickHandler} className="inner-grid" sx={{ boxShadow: 3 }}>
        <Avatar className="avatar" style={{backgroundColor: "#ffffff", color:"#123C69"}}>{author[0].toUpperCase()}</Avatar>
        <h3>{author}</h3>
        <h2 >{title}</h2>
        <h3 style={{padding: "0 2em"}}>{url}</h3> 
        </Grid>
    </Grid>
}

SearchResults.propTypes = {
    setOpen: PropTypes.func,
    id: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string
  };

export default SearchResults;