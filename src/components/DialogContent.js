import './DialogContent.css';
import { Avatar, Box, Grid, LinearProgress, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Error from './utils/Error';
import PropTypes from 'prop-types';

function DialogContent ({handleClose, itemDetails}) {

    const { details, success, loading } = itemDetails;

    const findFirstLetter = (name) => {
        if(name) return name[0].toUpperCase();
        return null
    }

    return (
    <div>
        {loading && <div className="loading">
            <LinearProgress /> 
            <div >
                <Skeleton data-testid="skeleton-element" variant="h2" className="skeleton-h2"/>
                <Skeleton variant="h3" className="skeleton-h3"/>
                {[...Array(20)].map((value, index) => <Skeleton key={index} height={60} className="skeleton-lists" variant="h3" animation="wave"/>)}
            </div>
        </div>}
        {!loading && success && <Grid className="grid-dialog" >
            <CloseIcon onClick={handleClose} className="close-icon"/>
            <h2>{details.title}</h2>
            <h3>Points: {details.points}</h3>
            <ul className="list">{details.children.map((children, index)=>{
                return (<Box sx={{ boxShadow: 3 }} className="children" key={index}>
                    <Avatar className="avatar" style={{backgroundColor: "#ffffff", color:"#123C69"}}>{findFirstLetter(children.author)}</Avatar>
                    <h3 style={{textAlign:"center"}}>{children.author}</h3>
                    <h3 className="comment">{children.text}</h3>
                </Box>)
            })}</ul>
        </Grid> }
        {!loading && !success && <Error/>}
    </div>)
}

DialogContent.propTypes = {
    itemDetails: PropTypes.object,
    handleClose: PropTypes.func
  };
export default DialogContent;