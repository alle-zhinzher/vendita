import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLeads } from '../../actions/leads';

class TestComponent extends Component {
    static PropTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(TestComponent);
