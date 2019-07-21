import React, { Component } from 'react'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLeads } from '../../actions/leads';

class TestComponent extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                {this.props.leads.map(lead => (
                    <div key={lead.id}>
                        <p><b>{lead.name}</b> - {lead.author}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(TestComponent);
