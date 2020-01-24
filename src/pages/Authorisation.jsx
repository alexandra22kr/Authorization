import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Form from '../components/Form';


class Authorisation extends Component {
    constructor(props) {
        super(props);

        // this.users = this.props.users.bind(this);
    }

    render() {
        return(
            <div className="container">
                <Form users={this.users} />
            </div>
        )
    }
}

Authorisation.propTypes = {
    users: PropTypes.array
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Authorisation);
