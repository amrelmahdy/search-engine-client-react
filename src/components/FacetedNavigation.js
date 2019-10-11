import React from "react";
import LogoSection from "./LogoSection";
import axios from "axios";
import {clear,searchByCategory, search,searchByPrice} from "../store/actions/product_actions";
import {connect} from "react-redux";

class FacetedNavigation extends React.Component {

    state = {
        brands: [],
        categories: [],

    };

    componentDidMount() {
        axios.get("http://localhost:8000/api/products/faceted-navigator").then(res => {
            console.log("faceted data", res.data.data[0]);
            this.setState({
                brands: res.data.data[0].brands,
                categories: res.data.data[0].categories,
                price: res.data.data[0].price,
            })
        });
    }

    handleNavigateBrands = (e, brand) => {
        e.preventDefault();
        this.props.clear();
        this.props.search(brand);
    };

    handleNavigateCategory = (e, categoryId) => {
        e.preventDefault();
        this.props.clear();
        this.props.searchByCategory(categoryId);
    };

    handlePriceNavigation = (e, start, end) => {
        e.preventDefault();
        this.props.clear();
        this.props.searchByPrice(start, end);
    };

    render() {

        const brandsList = this.state.brands.length ? this.state.brands.map((brand, index) => {
            return <div className="filter-item" key={index}>
                <a href="/" onClick={ (e) => this.handleNavigateBrands(e, brand._id)} ><label>{brand._id}({brand.count})</label></a>
            </div>
        }) : null;

        const categoriesList = this.state.categories.length ? this.state.categories.map((cat, index) => {
            return <div className="filter-item" key={index}>
                <a href="/" onClick={(e) => this.handleNavigateCategory(e, cat._id) }><label>{cat.name[0].name}({cat.count})</label></a>
            </div>
        }) : null;


        return <div className="col-md-3" style={{paddingLeft: "0 !important"}} id="sidebar-parent">
            <div className="sidebar"
                 style={{overflow: "scroll", height: window.innerHeight + "px", backgroundColor: "#FFF"}}>
                <LogoSection/>
                <div className="faceted-navigation">
                    <div className="search-header">
                        Filters
                    </div>
                    <div className="filter">

                        <div className="filter-header">
                            <i className="fa fa-money font-20"></i>
                            <span className="font-20">Category</span>
                        </div>
                        <div className="filter-body">
                            {categoriesList}
                        </div>


                        <div className="filter-header">
                            <i className="fa fa-money font-20"></i>
                            <span className="font-20">Brand</span>
                        </div>
                        <div className="filter-body">
                            {brandsList}
                        </div>


                        <div className="filter-header">
                            <i className="fa fa-money font-20"></i>
                            <span className="font-20">Price</span>
                        </div>
                        <div className="filter-body">
                            <div className="filter-item">
                                <a href="/" onClick={(e) => this.handlePriceNavigation(e, 0, 100)}><label>Less than $100({this.state.price?this.state.price[0].count:0})</label></a>
                            </div>
                            <div className="filter-item">

                                <a href="/" onClick={(e) => this.handlePriceNavigation(e, 100, 500)}> <label>From $100 to $500({this.state.price?this.state.price[1].count:0})</label></a>
                            </div>
                            <div className="filter-item">
                                <a href="/" onClick={(e) => this.handlePriceNavigation(e, 500, 1000)}> <label>From $500 to $1000({this.state.price?this.state.price[2].count:0})</label></a>
                            </div>

                            <div className="filter-item">
                                <a href="/" onClick={(e) => this.handlePriceNavigation(e, 1000, 5000)}><label>From $1000 to $5000({this.state.price?this.state.price[3].count:0})</label></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        search: (searchQuery) => dispatch(search(searchQuery)),
        searchByCategory: (categoryId) => dispatch(searchByCategory(categoryId)),
        searchByPrice: (start, end) => dispatch(searchByPrice(start, end)),
        clear: () => dispatch(clear())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FacetedNavigation);


