import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 10" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.substractCounter} />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.ctr)}>STORE RESULT</button>
                <ul>
                    {
                        this.props.results.map(result => {
                            return <li
                                key={result.id}
                                onClick={() => this.props.deleteResult(result.id)}>{result.value}</li>
                        })
                    }

                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return { ctr: state.ctr.counter, results: state.res.result };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({
            type: 'INCREMENT'
        }),
        onDecrement: () => dispatch({
            type: 'DECREMENT'
        }),
        addCounter: () => dispatch({
            type: 'ADD_COUNTER',
            val: 10
        }),
        substractCounter: () => dispatch({
            type: 'SUBSTRACT_COUNTER',
            val: 15
        }),
        storeResult: (result) => dispatch({
            type: 'STORE_RESULT',
            result: result
        }),
        deleteResult: (id) => dispatch({
            type: 'DELETE_RESULT',
            resultElID: id
        })
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);