import {createAppContainer,createStackNavigator,createMaterialTopTabNavigator} from "react-navigation";
import NavigationService from "./NavigationService";



import React from "react";
import {Icon} from "react-native-elements";

import CartPage from "./CartPager/CartPage";
import HomePage from "./HomePage/HomePage";
import CategoryPage from "./CategoryPage/CategoryPage";
import ProductPage from "./ProductPage/ProductPage";
import OrderPage from "./OrderPage/OrderPage";
import CustomerInfo from "./CustomerInfo/CustomerInfo";
import NewProduct from "./NewProduct/NewProduct";




const TopNav = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },

    CategoryPage: {
        screen: CategoryPage
    },
    CartPage: CartPage,
    OrderPage: OrderPage,
    ProductPage:ProductPage,
    CustomerInfo: CustomerInfo,
    NewProduct:NewProduct
},{ 
    initialRouteName:'NewProduct',
    // headerMode:'none'
})


const AppNavigation = createStackNavigator({

    Home:{
        screen:TopNav
    }
},{
    initialRouteName:'Home',
    headerMode:'none'
})

export default createAppContainer(AppNavigation)