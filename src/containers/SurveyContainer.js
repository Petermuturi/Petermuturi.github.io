import { connect } from 'react-redux';
import Survey from '../components/Survey';
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

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
