import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavButton from '../components/NavButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F9CB2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30,
  },
});

class First extends Component {
  componentDidMount() {
    this.props.fetchUser('paolorovella');
  }
  render() {
    const {
      onButtonPress,
      user,
    } = this.props;
    return (
      <View style={styles.container}>
        {this.props.user &&
          <Text style={styles.title}>Welcome {user.name}</Text>
        }
        <Text style={styles.title}>First Screen</Text>
        <NavButton destLabel="Second" buttonHandler={onButtonPress} />
      </View>
    );
  }
}

First.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
First.defaultProps = {
  user: {},
};
const mapStateToProps = (state) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (user) => {
    dispatch(actions.fetchUser(user));
  },
  onButtonPress: () => {
    dispatch(actions.navigatePush('Second'));
  },
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(First);
