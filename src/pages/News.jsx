import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import { newsFetchData } from '../actions/news'; 
import { connect } from 'react-redux';
import PageHeadline from '../components/PageHeadline';

const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ec3bb4a228c94b39b104e71a3d4fc93a';

class News extends Component {
    constructor(props) {
        super(props)

        // this.newsFetchData = this.newsFetchData.bind(this);

    }

    componentDidMount() {
        this.props.newsFetchData(url);
    }


    render() {
        return(
            <section className="section">
                <PageHeadline text="Top headlines from TechCrunch" color="has-text-primary" />
                <NewsList news={this.props.news} />
            </section>
        )
    }
}

News.propTypes = {
    news: PropTypes.array,
    newsFetchData: PropTypes.func
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newsFetchData: (url) => dispatch(newsFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
