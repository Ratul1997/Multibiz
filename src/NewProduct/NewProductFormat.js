export default Forms = [
    {
        key:'Image',
        header: "Upload Image",
        sizeFactor: 8,
        uploadImageUrl:'',
        uploaded:false
    },
    {
        key: "Code",
        header: "Product Code",
        inputTypeText: true,
        security: false,
        sizeFactor: 3,
        required: false,
        newline:false,
    },
    {
        key: "Product_Brand",
        header: "Product Brand",
        inputTypeText: true,
        security: false,
        newline:false,
        required: false,
        sizeFactor: 3
    },
    {
        key: "Buying_price",
        header: "Buying Price",
        inputTypeText: true,
        security: false,
        newline:true,
        required: false,
        sizeFactor: 3
    },
    {
        key: "SellingPrice",
        header: "Selling Price",
        inputTypeText: true,
        required: false,
        newline:false,
        security: false,
        sizeFactor: 3
    }, {
        key: "Description",
        header: "Description",
        security: false,
        required: false,
        newline: true,
        inputTypeText: true,
        sizeFactor: 5
    }, {
        key: "Stock",
        header: "Stock",
        required: false,
        inputTypeText: true,
        newline:false,
        security: false,
        sizeFactor: 3
    },
    {
        key: "Dealer",
        header: "Dealer",
        inputTypeText: true,
        security: false,
        newline:true,
        required: false,
        sizeFactor: 3
    },
]