import React, {Component, Fragment} from "react";
import {getProductsList, search, clear} from "./../store/actions/product_actions";
import {connect} from "react-redux";
import SearchBar from "../components/SearchBar";
import FacetedNavigation from "../components/FacetedNavigation";
import ProductsList from "../components/ProductsList";


class Home extends Component {
    state = {
        searchQuery: "",
    };

    componentDidMount() {
        console.log("window height", window.innerHeight);
        this.props.getProductsList();
    }

    handleSearch = (searchQuery) => {
        this.props.clear();
        if (this.state.searchQuery === "") {
            this.props.getProductsList()
        } else {
            this.props.search(searchQuery)
        }

    };

    handleSearchKeyword = (e) => {
        this.setState({
            searchQuery: e.target.value,
        });
        console.log(e.target.value);
    };

    render() {


        return (
            <Fragment>
                <FacetedNavigation handleSearch={(searchQuery) => this.handleSearch(searchQuery) } />
                <div className="col-md-9" style={{height: window.innerHeight + "px", overflow: "scroll", padding: "20px 20px 0 0" }}>
                    <SearchBar searchQuery={this.state.searchQuery} handleSearch={(searchQuery) => this.handleSearch(searchQuery) } handleSearchKeyword={(e) => this.handleSearchKeyword(e)} />
                    <ProductsList  productsIsLoading={this.props.productsIsLoading} products={this.props.products} />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        productsIsLoading: state.product.productsIsLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProductsList: () => dispatch(getProductsList()),
        search: (searchQuery) => dispatch(search(searchQuery)),
        clear: () => dispatch(clear())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
