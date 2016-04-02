import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'
import { getBoards } from '../actions/boardsActions';
import BoardsList from '../components/BoardsList.js';

class BoardsListContainer extends Component {
    constructor(props) {
        super(props);
        this.handleBoardClick = this.handleBoardClick.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getBoards());
    }

    handleBoardClick(id) {
        console.log(id);
    }

    render() {
        const { boards } = this.props;
        return (
            <BoardsList
                boards={boards}
                onBoardClick={this.handleBoardClick}
            />
        );
    }
}

BoardsListContainer.propTypes = {
    boards: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        boards: state.boards.items
    };
};

export default connect(
    mapStateToProps
)(BoardsListContainer);