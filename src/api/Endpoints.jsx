import Constants from "./Constants";

const Endpoints = {
    CATEGORY_URL : `${Constants.BASE_URL}category`,
    SUBCATEGORY_BY_CATID_URL: `${Constants.BASE_URL}subcategory/`,
    PRODUCT_BY_CATID_URL: `${Constants.BASE_URL}products/cat/`
}

export default Endpoints;