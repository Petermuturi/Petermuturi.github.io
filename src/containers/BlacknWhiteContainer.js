import { connect } from 'react-redux';
import BlackNWhite from '../components/BlackNWhite';
import { setBnW } from '../actions/actions';

const mapStateToProps = (state)=> {
  return {
    bnw: state.bnw
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBnW: (data)=> {
      dispatch(setBnW(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlackNWhite);
